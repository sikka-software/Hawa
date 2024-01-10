![alam-readme-1](https://github.com/sikka-software/alam/assets/46135573/707377e6-314b-47ba-8ed8-1a9b63c908f3)

# ALAM

SVG Country Flags for React (Package Name)

## Description

This NPM package provides a collection of SVG country flags, optimized for React applications and written in TypeScript. It offers a simple and efficient way to include scalable, high-quality flag icons in your web projects.

## Features

- High-quality SVG flags for a wide range of countries.
- Easy integration with React projects.
- TypeScript support for type safety and autocompletion.
- Lightweight with minimal dependencies.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @sikka/alam --save
```

## Usage

Import the flag component in your React application:

```jsx
import { SA } from '@sikka/alam';

const MyComponent = () => (
  <div>
    <SA />
  </div>
);

export default MyComponent;
```

## Props

| Prop        | Type   | Description                      | Required |
| ----------- | ------ | -------------------------------- | -------- |
| countryCode | string | ISO Alpha-2 country code         | Yes      |
| width       | string | Width of the flag (in pixels)    | No       |
| height      | string | Height of the flag (in pixels)   | No       |
| className   | string | Additional CSS class for styling | No       |

## Contributing

We welcome contributions to this package. If you have a suggestion or fix:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` file for more information.

## Acknowledgments

- The SVG files of the flags were taken from [yammadev/flag-icons](https://github.com/yammadev/flag-icons).
