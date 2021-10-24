# Loah | لوح

> Custom Table Component

[![NPM](https://img.shields.io/npm/v/@sikka/loah.svg)](https://www.npmjs.com/package/@sikka/loah)
[![NPM](https://img.shields.io/npm/dt/@sikka/loah.svg)](https://www.npmjs.com/package/@sikka/loah)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sikka/loah
```

## Usage

```jsx
import React from 'react'
import { CustomTable } from '@sikka/loah'
import '@sikka/loah/dist/index.css' //Still in progress

const Example = () => {
  return (
    <CustomTable
      // array of objects
      rowData={[]}
      // keys for columns
      dataColumns={[]}
    />
  )
}
```

## Contributing

To contribute, clone this github repository and run the development server on the `/example` folder

- clone repository

```bash
git clone git@github.com:sikka-software/loah.git
cd loah
```

- run development server

```bash
npm run start
```

- edit index.js


## TESTING

```bash
git clone git@github.com:sikka-software/loah.git
cd example
npm run start

```

## License

MIT © [SIKKA SOFTWARE](https://sikka.sa)
