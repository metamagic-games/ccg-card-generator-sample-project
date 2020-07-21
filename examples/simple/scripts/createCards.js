const cards = require("../cards.js");
const { generateHtmlBody } = require("./generateBody.js");
const { ccggen, } = require("ccg-card-generator");

const options = {
	"debug": true,
  "customStyles": "./styles/simple.css",
  "bodyGenerator": generateHtmlBody,
};

const output = "./cards.pdf"

ccggen( cards.cards, output, options);