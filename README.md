# Hawa | هواء

> UI Kit for web apps and websites.

[![NPM](https://img.shields.io/npm/v/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![NPM](https://img.shields.io/npm/dt/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sikka/hawa
```

## Components

| Prop         |  Type   |     Default     |                                    Purpose |
| ------------ | :-----: | :-------------: | -----------------------------------------: |
| TextField      |  Array  | empty array []  |                        The list of buttons |
| bgColor      | String  |   'lightgrey'   |            The background color of the bar |
| textColor    | String  |     'black'     |                                            |
| direction    | String  |     'right'     |                                            |
| showAvatar   | Boolean |      false      |                                            |
| versionLabel | String  | empty string "" |                                            |
| activeItem   | String  | empty string "" | The slug name of the current selected item |

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

- Edit **Hawa/src/stories/Hawa.stories.js_** file

- Add your custom testing component in **Hawa.stories.js** file

```jsx

//example coming soon inshallah

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
