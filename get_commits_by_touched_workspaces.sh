#!/bin/bash

# Check if a target directory argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <target_directory>"
    exit 1
fi

# Assign the first argument to targetDirectory
targetDirectory="$1"

# Ensure the scripts/archive_changelogs directory exists
mkdir -p scripts/archive_changelogs

# Get the current date
current_date=$(date +%Y_%m_%d)

# Output file for commits affecting the target directory with date
outputFileName="${targetDirectory//\//_}_commits_${current_date}.md"
changesetFile="scripts/archive_changelogs/$outputFileName"

# Clear the file if it already exists
>"$changesetFile"

# GitHub repository URL
repo_url="https://github.com/sikka-software/Hawa"

# Get all commit messages and check for changes in the target directory
git log --pretty=format:"%h - %ad - %s" --date=short | while IFS= read -r line; do
    # Extract the commit hash, date, and message
    hash=$(echo "$line" | cut -d' ' -f1)
    date=$(echo "$line" | cut -d' ' -f3)
    message=$(echo "$line" | cut -d' ' -f4-)

    # Check if the commit includes changes in the target directory
    if git show --pretty="" --name-only "$hash" | grep -q "^$targetDirectory/"; then
        # Append the commit message with a link to the changeset file
        cat <<EOT >>"$changesetFile"
- [$hash]($repo_url/commit/$hash) - $date $message
EOT
        # Print the commit hash
        echo "Appended commit: $hash - $date $message"
    fi
done