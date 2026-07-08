const fs = require('fs');
let data = JSON.parse(fs.readFileSync('metadata.json', 'utf8'));

if(!data.majorCapabilities.includes("MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API")) {
  data.majorCapabilities.push("MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API");
  fs.writeFileSync('metadata.json', JSON.stringify(data, null, 2));
}
