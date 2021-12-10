<p align="center">
  <img src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png" alt="Hawa | هواء" />
</p>

# Hawa | هواء

[![NPM](https://img.shields.io/npm/v/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![NPM](https://img.shields.io/npm/dt/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Opinionated UI Kit for web apps and websites.

# Concept

### Components

The smallest elements of this UI kit are the typical low-level components. Examples of components:

- InputField
- Checkboxes
- Modal
- Drag-Drop Image(s)
- Button
- etc ...

### Blocks

Blocks are commonly used collection of components. Examples of blocks:

- Sign-In
- Sign-Up
- Reset Password
- SaaS Pricing Plans
- Payment Methods Block (to list saved methods)
- Account Block (to edit account info)
- etc ...

### Boxes

Most components and blocks will live inside **boxes**. Windows can show anything. It can show a video, image, form, iFrame, etc. Boxes make out the layout of your website or application. Boxes can be arranged in different layouts

<p align="center">
  <img src="https://user-images.githubusercontent.com/46135573/143972102-0c104239-b8f6-4a7b-9aad-54f6d91a8906.png" alt="layout-types" />
</p>

Points

- The content inside each box can be scrollable (vertical/horizontal/Both) with one prop
- you can control the spacing of the content inside each box with one prop
- you can also control the spacing of all the box in the layout
- some boxes can float (animation of open and close modal)
- some boxes can go full screen (animation to transition)

### Utilities

- [x] **getTextColor(bgColor)**
determine if text should be black or white based on the contrast of `bgColor`

- [ ] **darkenColor(color,percent)**
darken a given `color` by a given `percent`

- [ ] **lightenColor(color,percent)**
lighten a given `color` by a given `percent`

# Features

- [ ] Change borders and margin, padding in one place
- [ ] Drag and drop tool to create a layout of boxes

## Components

- [ ] Layout
- [ ] Box
- [ ] TextField
- [ ] TextArea
- [ ] Radio Selector
- [ ] PasswordField
- [ ] Autocomplete
- [ ] Tabs
- [ ] Alerts
- [ ] Badges

## Install

```bash

npm install --save @sikka/hawa

```

## Usage

```jsx
//example coming soon inshallah
```

## Contributing

To contribute, clone this github repository and run the development server

- clone repository

```bash
git clone git@github.com:sikka-software/hawa.git
cd hawa
npm install
```

## TESTING

- Run development server

```bash
git clone git@github.com:sikka-software/hawa.git
cd hawa
npm install
npm run storybook
```

- Edit **Hawa/src/stories/Hawa.stories.js\_** file

- Add your custom testing component in **Hawa.stories.js** file

- Or you can preview without running development server. [See Preview](https://sikka-software.github.io/Hawa/storybook-static/)

```jsx
//example coming soon inshallah
```

## Deployment

```bash
npm run build-storybook
```

## Publishing (Admin)

```bash
npm version [major | minor | patch]
npm run build-lib
npm publish --access public
```

## License

<!-- https://github.com/react-component/drawer  -->

MIT © [SIKKA SOFTWARE](https://sikka.sa)
