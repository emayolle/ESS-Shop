var articles;

async function getArticles() {
  try {
    const response = await fetch('https://6523b2abea560a22a4e8b1b7.mockapi.io/articles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



(async () => {
    var productsList = document.querySelector('#products-list');

    while (productsList == undefined)
    {
        productsList = document.querySelector('#products-list');
        console.log("lelel");
        sleep(5);
    }
    articles = await getArticles();

    articles.forEach(article => {
        // console.log(article);

        /*
        <div class="card product-card">
            <div class="product-header"></div>
            <div class="product-footer">
                <div class="footer-content">
                    <div style="flex: 1;">
                        <h5>Heading</h5>
                    </div>
                    <div class="text-end" style="flex: 0.35 1;">
                        <p>Taille</p>
                        <p class="text-capitalize fw-semibold">PRIX</p>
                    </div>
                </div>
            </div>
        </div>
        */

        const productCard = document.createElement('div');
        productCard.classList.add('card', 'product-card');
        productCard.innerHTML = `
            <div class="product-header"></div>
            <div class="product-footer">
                <div class="footer-content">
                    <div style="flex: 1 0.5; display: flex;flex-direction:column;">
                        <div><h5>${article.nom}</h5></div>
                        <div><p>${article.couleur}</p></div>
                    </div>
                    <div class="text-end" style="flex: 0.35 1;flex-direction:column;">
                        <p>${article.taille ? article.taille : "Taille unique"}</p>
                        <p class="text-capitalize fw-semibold">${article.prix} €</p>
                    </div>
                </div>
            </div>
        `;
        productsList.appendChild(productCard);
    });
})();
