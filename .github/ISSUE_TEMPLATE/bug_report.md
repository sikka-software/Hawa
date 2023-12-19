---
name: Bug Report
description: Create a bug report to help us improve the Hawa UI Kit
labels: ['template: bug']
body:
  - type: markdown
    attributes:
      value: |
        This template is to report bugs specific to the Hawa UI Kit. Before opening a new issue, please do a [search](https://github.com/sikka-software/Hawa/issues) of existing issues and :+1: upvote the existing issue instead. This will result in a quicker resolution.

        If you have feature requests or ideas, please open a [discussion](https://github.com/sikka-software/Hawa/discussions/new?category=ideas) instead.

        For general help and support, you can:
        - Start a discussion in the ["Help" section](https://github.com/sikka-software/Hawa/discussions/categories/help)

  - type: input
    attributes:
      label: Link to the code that reproduces this issue or a replay of the bug
      description: |
        Please provide a link to a **public** [GitHub repository](https://github.com/sikka-software/Hawa/tree/main/examples/reproduction-template) or a minimal reproduction created from our [bug report template](https://github.com/sikka-software/Hawa/tree/main/examples/reproduction-template). Include only changes that contribute to the issue.

        If a minimal reproduction can't be created, please share a [replay](https://www.replay.io/) of the bug which doesn't require sharing a private repo.

        **Skipping this/providing an invalid link could result in the issue being closed**
      placeholder: 'https://github.com/user/my-minimal-hawa-ui-kit-issue-reproduction'
    validations:
      required: true
  - type: textarea
    attributes:
      label: To Reproduce
      description: A step-by-step description of how to reproduce the issue, based on the linked reproduction. Screenshots can be provided in the issue body below. If using code blocks, ensure that [syntax highlighting is correct](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting) and double check that the rendered preview is not broken.
      placeholder: |
        1. Start the application in development mode
        2. Click on X component
        3. Y unexpected behavior occurs
    validations:
      required: true
  - type: textarea
    attributes:
      label: Current vs. Expected behavior
      description: A clear and concise description of what the bug is, and what you expected to happen.
      placeholder: 'Following the steps from the previous section, I expected A to happen, but observed B instead'
    validations:
      required: true
  - type: checkboxes
    attributes:
      label: Verify latest release
      description: 'Please ensure you have tested the latest release of the Hawa UI Kit. Some issues may already be fixed in the latest version, so verify that your issue persists before opening a new issue.'
      options:
        - label: I verified that the issue exists in the latest Hawa UI Kit release
          required: true
  - type: textarea
    attributes:
      label: Provide environment information
      description: Please provide information about your development environment including operating system, Node.js version, npm/Yarn version, and any other relevant details.
      render: bash
      placeholder: |
        Operating System:
          Platform: Windows
          Version: 10.0.19043 Build 19043
        Binaries:
          Node: 14.17.1
          npm: 6.14.13
        Relevant Packages:
          @sikka/hawa: 1.0.0
          react: 17.0.2
          typescript: 4.3.5
    validations:
      required: true
  - type: dropdown
    attributes:
      label: Which area(s) are affected? (Select all that apply)
      multiple: true
      options:
        - 'Not sure'
        - 'Components'
        - 'Styles'
        - 'Documentation'
        - 'Build and Deployment'
        - 'Examples'
        - 'Other'
    validations:
      required: true
  - type: dropdown
    attributes:
      label: Which section is the component from?
      multiple: false
      options:
        - 'Blocks'
        - 'Layout'
        - 'Elements'
        - 'Other'
    validations:
      required: false
  - type: textarea
    attributes:
      label: Additional
