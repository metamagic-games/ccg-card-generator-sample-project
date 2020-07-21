var generateCard = function generateCard(card, dimensions) {
  return `
    <div 
      class="card card-container"
      style="
        height: ${dimensions.card.height}mm;
        width: ${dimensions.card.width}mm;
        margin-bottom: ${dimensions.card.margin}mm;
        margin-right: ${dimensions.card.margin}mm;
      "
    >
      <div class="card-background">
        <div class="card-name">${card.name}</div>
        <div class="card-text">${card.text}</div>
      </div>
    </div>
  `;
}

var generatePage = function generatePage(cardPage, pageNumber, dimensions) {
  return `
    <div 
      class="page page-${pageNumber}"
      style="
        height: ${dimensions.page.height}mm;
        width: ${dimensions.page.width}mm;
        max-height: ${dimensions.page.height}mm;
        max-width: ${dimensions.page.width}mm;
        padding: ${dimensions.page.padding}mm;
      "
    >
      ${ 
        cardPage.map( ( card ) => {
            return generateCard(card, dimensions)
          })
          .join(" ")
      }
    </div>
  `
}

var generateHtmlBody = function generateMtgHtmlBody(dimensions, cardPages) {
  return `
    <body class="document">
      <div class="pages">
        ${
          cardPages.map( ( cardPage, i ) => {
            return generatePage(cardPage, i, dimensions)
          }).join('')
        }
      </div>
    </body>
  `
}

module.exports = {
  generateHtmlBody
}