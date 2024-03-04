# ImageCompressor

ImageCompressor is a lightweight image compression tool for Node.js applications. It utilizes popular image optimization plugins to reduce the file size of JPEG, PNG, GIF, and SVG images.

## Installation

You can install ImageCompressor via npm:

\`\`\`bash
npm install imagecompress
\`\`\`

## Usage

\`\`\`javascript
const { compressImages } = require('imagecompress');

// Compress images from input directory to output directory
compressImages('./input_images', './output_images')
  .then(() => console.log('Images compressed successfully'))
  .catch(error => console.error('Error compressing images:', error));
\`\`\`

## Features

- Supports compression of JPEG, PNG, GIF, and SVG images.
- Configurable compression settings for JPEG and PNG images.
- Simple and easy-to-use API for image compression in Node.js applications.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
