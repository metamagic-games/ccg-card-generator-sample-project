var generateCard = function generateCard(card, dimensions) {
  console.log('dsahfiasdhfiuhsdaif')

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
        <div class="card-frame">
          <div class="frame-header">
            <h1 class="name">${card.name}</h1>
            
            <i class="ms ms-g" id="mana-icon"></i>
          </div>

          <img class="frame-art" src="https://image.ibb.co/fqdLEn/nissa.jpg" alt="nissa art">

          <div class="frame-type-line">
            <h1 class="type">Legendary Enchantment</h1>
            <img src="https://image.ibb.co/kzaLjn/OGW_R.png" id="set-icon" alt="OGW-icon">
          </div>

          <div class="frame-text-box">
            <p class="description ftb-inner-margin">When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.
            </p>
            <p class="description">
              You may spend mana as though it were mana of any color to cast planeswalker spells.
            </p>
            <p class="flavour-text">"For the life of every plane, I will keep watch."
            </p>
          </div>

          <div class="frame-bottom-info inner-margin">
            <div class="fbi-left">
              <p>140/184 R</p>
            <p>OGW &#x2022; EN <!--   <img class="paintbrush" src="https://image.ibb.co/e2VxAS/paintbrush_white.png" alt="paintbrush icon">--> Wesley Burt</p> 
            </div>

            <div class="fbi-center"></div>

            <div class="fbi-right">
              &#x99; &amp; &#169; 2016 Wizards of the Coast
            </div>
          </div>
        </div>
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

var generateMtgHtmlBody = function generateMtgHtmlBody(dimensions, cardPages) {
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

const foo = 5

module.exports = {
  generateMtgHtmlBody,
  foo
}