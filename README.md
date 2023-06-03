# React Spinning Donut

This is a React component that renders an engaging, spinning donut using ASCII art. This project represents an interesting blend of art and technology, leveraging both the power of JavaScript and the aesthetics of ASCII art to create a dynamic visual component.

![Spinning Donut](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTUzMjc3YWM3MWE3MjhhODQxY2ZlMDQyMGIzNTY1OWI5NjkwMTA1MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/jo8b22iDLLuQAVF2yD/giphy.gif)

Live Demo: [https://andy19910102.github.io/react-spinning-donut/](https://andy19910102.github.io/react-spinning-donut/)

## Installation

To install this component into your project, you can use npm, yarn:

```bash
$ npm i react-spinning-donut
$ yarn add react-spinning-donut
```

## Usage

Import Donut component from react-spinning-donut:

```jsx
import Donut from 'react-spinning-donut';

function MyApp() {
  return (
    <div>
      <Donut />
    </div>
  )
}
```

You can customize the appearance of the donut using props.

```jsx
import Donut from 'react-spinning-donut';

function MyApp() {
  return (
    <div>
        <Donut
          color="red"
          scaleX={1}
          scaleY={0.75}
        />
        <Donut
          color="#8E2DE2"
          scaleX={1}
          scaleY={0.5}
        />
        <Donut
          color="rgb(194 65 12)"
          scaleX={0.5}
          scaleY={0.3}
          frameInterval={50}
        />
    </div>
);
}
```

## Props

| Prop       | Type   | Default   | Description                                                         |
|------------|--------|-----------|---------------------------------------------------------------------|
| `scaleX`   | Number | 1         | Horizontal scale of the donut.                                      |
| `scaleY`   | Number | 1         | Vertical scale of the donut.                                        |
| `color`    | String | "#000"    | CSS color of the donut.                                             |
| `fontSize` | Number | 8         | Font size in pixels of the donut.                                   |
| `interval` | Number | 100       | Interval in milliseconds at which the donut spins (one frame delay). |

```jsx
<Donut 
  scaleX={1} // The horizontal scale of the donut. Default: 1
  scaleY={1} // The vertical scale of the donut. Default: 1
  color="#000" // The color of the donut. Default: "#000"
  fontSize={8} // The font size of the donut. Default: 8
  frameInterval={100} // The time interval (in milliseconds) between each frame. Default: 100
/>
```

## Author

This package was created by Huang An Sheng. You can find more about the author on [GitHub](https://github.com/andy19910102).

## Contribute

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under the MIT license.