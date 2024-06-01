#!/bin/bash

# Ensure the scripts/archive_changelogs directory exists
mkdir -p scripts/archive_changelogs

# Get the current date
current_date=$(date +%Y_%m_%d)

# Output file with date
changesetFile="scripts/archive_changelogs/all_commits_${current_date}.md"

# Clear the file if it already exists
> "$changesetFile"

# Debugging: Check if the file was cleared
echo "File cleared: $changesetFile"

# Get all commit messages, hashes, and dates, and append to the file
git log --pretty=format:"%h - %ad - %s" --date=short | while IFS= read -r line; do
  # Extract the commit hash, date, and message
  hash=$(echo "$line" | cut -d' ' -f1)
  date=$(echo "$line" | cut -d' ' -f3)
  message=$(echo "$line" | cut -d' ' -f4-)

  # Debugging: Print the extracted values
  echo "Processing commit: $hash - $date - $message"

  # Append the commit message to the changeset file
  cat <<EOT >> "$changesetFile"
- [$hash](https://github.com/sikka-software/Hawa/commit/$hash) - $date $message
EOT

  # Print the commit hash
  echo "Appended commit: $hash - $date $message"
done

# Debugging: Check the contents of the file after processing
echo "Final contents of $changesetFile:"
cat "$changesetFile"
