const { GoogleGenAI } = require("@google/genai");
const fs = require('fs');

async function analyze() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const imageResp = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          data: fs.readFileSync('test.png').toString("base64"),
          mimeType: "image/png"
        }
      },
      "Where is the watermark 'UK-peptides.com' located? Give me approximate bounding box coordinates or a good description so I can paint over it."
    ]
  });
  console.log(imageResp.text);
}
analyze().catch(console.error);
