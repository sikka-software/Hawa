<p align="center">
  <img src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png" alt="Hawa | هواء" />
</p>

# Hawa | هواء

[![NPM](https://img.shields.io/npm/v/@sikka/hawa.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@sikka/hawa)
[![NPM](https://img.shields.io/npm/dt/@sikka/hawa.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/@sikka/hawa)

> Opinionated UI Kit for web apps and websites.

## Install

```bash

npm install --save @sikka/hawa

```

# Concept

### Elements

The smallest components of this UI kit are the typical low-level components.

### Blocks

Blocks are commonly used collection of components.

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

# Features

- [ ] Change borders and margin, padding in one place
- [ ] Drag and drop tool to create a layout of boxes

## Components

- [ ] Layout
- [ ] TextArea
- [ ] Autocomplete
- [ ] Badges

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

MIT © [SIKKA SOFTWARE](https://sikka.sa)
