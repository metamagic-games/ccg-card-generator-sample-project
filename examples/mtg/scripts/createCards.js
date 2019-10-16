const cards = require("../cards.js");
const { generateMtgHtmlBody, foo } = require("./generateMtgBody.js");
const { ccggen, } = require("ccg-card-generator");

const options = {
	"debug": true,
  "customStyles": "./styles/mtg.css",
  "bodyGenerator": generateMtgHtmlBody,
};

const output = "./cards.pdf"

ccggen( cards.cards, output, options);