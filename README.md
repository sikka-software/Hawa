# Tawila

> Custom Table Component

[![NPM](https://img.shields.io/npm/v/@sikka/tawila.svg)](https://www.npmjs.com/package/@sikka/tawila)
[![NPM](https://img.shields.io/npm/dt/@sikka/tawila.svg)](https://www.npmjs.com/package/@sikka/tawila)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sikka/tawila
```

## Usage

```jsx
import React from 'react'
import { CustomTable } from '@sikka/tawila'
import '@sikka/tawila/dist/index.css' //Still in progress

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
git clone git@github.com:sikka-software/tawila.git
cd tawila
```

- run development server

```bash
npm run start
```

- edit index.js


## TESTING

```bash
git clone git@github.com:sikka-software/tawila.git
cd example
npm run start

```

## License

MIT © [SIKKA SOFTWARE](https://sikka.sa)
