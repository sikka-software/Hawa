# Hawa | هواء

> Custom App Navigation Component

[![NPM](https://img.shields.io/npm/v/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![NPM](https://img.shields.io/npm/dt/@sikka/hawa.svg)](https://www.npmjs.com/package/@sikka/hawa)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sikka/hawa
```

## Props

| Prop         |  Type   |     Default     |                                    Purpose |
| ------------ | :-----: | :-------------: | -----------------------------------------: |
| buttons      |  Array  | empty array []  |                        The list of buttons |
| bgColor      | String  |   'lightgrey'   |            The background color of the bar |
| textColor    | String  |     'black'     |                                            |
| direction    | String  |     'right'     |                                            |
| showAvatar   | Boolean |      false      |                                            |
| versionLabel | String  | empty string "" |                                            |
| activeItem   | String  | empty string "" | The slug name of the current selected item |

## Usage

```jsx
import React, { useState } from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Button } from "@sikka/hawa"
import "@sikka/hawa/dist/index.css" //Still in progress

const buttons = [
  {
    name: "button1",
    icon: <AccountCircleIcon />,
    action: () => {
      //Do something when button1 is clicked
    },
  },
  // {name: String, icon: Component, action: Function}
]

const Example = () => {
  return (
    <Hawa
      bgColor={"red"}
      textColor={"blue"}
      direction={"right"}
      buttons={buttons}
    />
  )
}
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
import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Hawa } from "../components/Hawa/Hawa"

const stories = storiesOf("App Test", module)

// Your code goes here

stories.add("App", () => {
  const [expand, setExpand] = useState(false)

  const buttons = [
    { name: "something" },
    { name: "something" },
    { name: "something" },
  ]

  return (
    <Hawa
      expended={expand}
      handleExpand={() => setExpand(!expand)}
      bgColor={"red"}
      direction={"right"}
      buttons={buttons}
    />
  )
})
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
