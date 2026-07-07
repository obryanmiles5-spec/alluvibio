const { Jimp } = require('jimp');

async function test() {
  try {
    const image = await Jimp.read('test.png');
    // For test.png, the text is at [202, 276, 398, 299]
    // Let's just crop out the center or blur it.
    // Or just draw a filled rectangle
    // Jimp doesn't have a direct fillRect, but we can iterate pixels or scan
    image.scan(180, 270, 240, 40, function(x, y, idx) {
      // fill with blue-ish or white
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = 255;
    });
    await image.write('test_out.png');
    console.log("Saved test_out.png");
  } catch (err) {
    console.error(err);
  }
}
test();
