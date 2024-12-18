# React Image Zoomer

`image-zoomer-react` is a simple React component that allows you to zoom in on an image by clicking it. The image expands into a lightbox overlay with a smooth zoom animation, and clicking outside the enlarged image closes the overlay. This component integrates seamlessly with React and Next.js, supporting TypeScript.

## Features

- **Click-to-Zoom:** Click an image to zoom into a larger view.
- **Close on Outside Click:** Close the zoomed view intuitively by clicking outside the image.
- **Smooth Animations:** Powered by `framer-motion` for fade-in, fade-out, and zoom animations.
- **Customizable Message:** Optionally display a message below the enlarged image.
- **TypeScript Support:** Fully typed props for better developer experience.

## Installation

Install the component via NPM or Yarn:

```bash
npm install image-zoomer-react
# or
yarn add image-zoomer-react
```

## Usage

Here's a basic example of how to use the `ImageZoomer` component in a React or Next.js project:

```tsx
import React from "react"
import { ImageZoomer } from "image-zoomer-react"

export default function ExamplePage() {
  return (
    <div>
      <h1>Image Zoomer Example</h1>
      <ImageZoomer
        src="/path/to/image.jpg"
        alt="Beautiful Image"
        className="w-64 h-auto"
        textMessage="Click outside the image to close the zoom."
      />
    </div>
  )
}
```

### Props

The `ImageZoomer` component extends all valid `<img>` HTML properties and introduces a few additional props:

| Prop           | Type                                | Default                                                    | Description                                              |
|-----------------|-------------------------------------|------------------------------------------------------------|----------------------------------------------------------|
| `textMessage`   | `string`                           | "Click outside the image to close the zoom."               | Optional message displayed below the zoomed image.       |
| `src`          | `string`                           | *Required*                                                 | The image URL to display.                                |
| `alt`          | `string`                           | *Required*                                                 | Alternative text for accessibility purposes.             |
| ...props       | `React.ImgHTMLAttributes<HTMLImageElement>` | -                                                        | Any additional valid props for an `<img>` tag.           |

### Styles and Classes

This component leverages Tailwind CSS utility classes for styling:

- `cursor-zoom-in` for the base image cursor.
- `cursor-zoom-out` for the zoomed image cursor.
- `bg-black bg-opacity-75` for the overlay background.

If you are **not using Tailwind CSS**, you can replace these styles with your own custom CSS.

### Animation

`image-zoomer-react` uses `framer-motion` to handle smooth animations:

- The overlay fades in and out with opacity transitions.
- The zoomed image smoothly scales in and out with `scale` animations.

Animations can be customized by forking the component and adjusting the `motion.div` configurations.

## Example with Tailwind CSS

Here’s a practical example including Tailwind for styling:

```tsx
<ImageZoomer
  src="/path/to/your/image.jpg"
  alt="Example image"
  className="rounded-lg shadow-md"
/>
```

If you're not using Tailwind, you can simply override the styles using a `className` or custom CSS.

## Dependencies

This package relies on the following:

- `react` and `react-dom` (React 18+ recommended)
- `framer-motion` for animations
- `clsx` and `tailwind-merge` for utility class management

> Note: Tailwind CSS is used by default for styling. If you do not use Tailwind, you can replace or override the classes.

## Development and Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request.

## License

This project is licensed under the [ISC License](./LICENSE). Feel free to use, modify, and distribute the code.

---

Enjoy using `image-zoomer-react`! Feel free to reach out for any improvements or issues.