# React Spinning Donut

This is a React component that renders an engaging, spinning donut using ASCII art. This project represents an interesting blend of art and technology, leveraging both the power of JavaScript and the aesthetics of ASCII art to create a dynamic visual component.

![Spinning Donut](./demo.gif)

## Installation

To install this component into your project, you can use npm, yarn:

```bash
$ npm i react-spinning-donut
$ yarn add react-spinning-donut
```

## Usage

Import and use the `Donut` component in your React application. You can customize the appearance of the donut using props.

```jsx
import Donut from 'react-spinning-donut';

function MyApp() {
  return (
    <div>
        <Donut
            color="red"
            scaleX={1}
            scaleY={0.75}/>
        <Donut
            color="#8E2DE2"
            scaleX={1}
            scaleY={0.5}/>
        <Donut
            color="rgb(194 65 12)"
            scaleX={0.5}
            scaleY={0.3}/>
    </div>
);
}
```

## Props

- `scaleX`: The scaling factor in the x-direction. Defaults to 1.
- `scaleY`: The scaling factor in the y-direction. Defaults to 1.
- `color`: The color of the donut. Defaults to "#000000".
- `fontSize`: The font size of the donut characters. Defaults to 8.

## Author

This package was created by Huang An Sheng. You can find more about the author on [GitHub](https://github.com/andy19910102).

## Contribute

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under the MIT license.