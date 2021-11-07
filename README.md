# Loah | لوح

> Custom Table Component

[![NPM](https://img.shields.io/npm/v/@sikka/loah.svg)](https://www.npmjs.com/package/@sikka/loah)
[![NPM](https://img.shields.io/npm/dt/@sikka/loah.svg)](https://www.npmjs.com/package/@sikka/loah)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sikka/loah
```


## Props
| Prop          | Type     | Default         | Purpose                         |
| --------------|:--------:|:---------------:| -------------------------------:|
| buttons       | Array    | empty array []  | The list of buttons             |
| bgColor       | String   | 'lightgrey'     | The background color of the bar |
| textColor     | String   | 'black'         |                                 |
| direction     | String   |  'right'        |                                 |
| showAvatar    | Boolean  |  false          |                                 |
| versionLabel  | String   | empty string "" |                                 |
| activeItem    | String   | empty string "" | The slug name of the current selected item


## Usage

```jsx
import React, {useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Loah } from '@sikka/loah'
import '@sikka/loah/dist/index.css' //Still in progress

const buttons= [
  {
    name : "button1",
    icon : <AccountCircleIcon />,
    action: () => {
      //Do something when button1 is clicked
    }
  },
  // {name: String, icon: Component, action: Function}
]

const Example = () => {
  return (
    <Loah
      bgColor={"red"}
      textColor={"blue"}
      
      // navbar's direction it could be "left", "right", "top" or "buttom"
      direction={"right"}
      
      // navbar's elament
      buttons={buttons}
    />
  )
}
```

## Contributing

To contribute, clone this github repository and run the development server

- clone repository

```bash
git clone git@github.com:sikka-software/loah.git
cd loah
npm install
```



## TESTING


- Run development server

```bash
git clone git@github.com:sikka-software/loah.git
cd loah
npm install
npm run storybook
```

- Edit ***loah/src/stories/Loah.stories.js*** file

- Add your custom testing component in **Loah.stories.js** file

```jsx
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Loah } from "../components/Loah/Loah";

const stories = storiesOf("App Test", module);

// Your code goes here

stories.add("App", () => {
  const [expand, setExpand] = useState(false);

  const buttons = [
    {
      name: "something",
    },
    {
      name: "something",
    },
    {
      name: "something",
    },
  ];

  return (
    <Loah
      expended={expand}
      handleExpand={() => setExpand(!expand)}
      bgColor={"red"}
      direction={"right"}
      buttons={buttons}
    />
  );
});

```

## License

MIT © [SIKKA SOFTWARE](https://sikka.sa)
