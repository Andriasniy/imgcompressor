const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

async function compressImages(inputDir, outputDir) {
    try {
        const compressedFiles = await imagemin([`${inputDir}/*.{jpg,png,gif,svg}`], {
            destination: outputDir,
            plugins: [
                imageminMozjpeg({ quality: 80 }),
                imageminPngquant({ quality: [0.6, 0.8] }),
                imageminGifsicle({ optimizationLevel: 2 }),
                imageminSvgo()
            ]
        });

        console.log('Images compressed successfully:');
        compressedFiles.forEach(file => console.log(file.destinationPath));
    } catch (error) {
        console.error('Error compressing images:', error);
    }
}

module.exports = { compressImages };
