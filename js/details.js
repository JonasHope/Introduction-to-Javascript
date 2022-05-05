const details = document.querySelector(".detailContainer");
const back = document.querySelector(".back-b")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;

async function getDrinks() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.drinks[0]);

        const marga = json.drinks[0];

        createHtml(marga);
    }
    catch(error) {
        console.log(error, "upsi, something went wrong, try again.");
        details.innerHTML = "upsi, something went wrong, try again."
    }
}

getDrinks();


function createHtml(marga) {
    details.innerHTML = `<div class="box">
                            <h1>${marga.strDrink ?? ``}</h1>
                            <img class="img-detail" src="${marga.strDrinkThumb ?? ``}" alt"${marga.strDrink ?? ``}" />
                            <div class="h3-detail">
                              <h4> Type: ${marga.strAlcoholic ?? ``}</h4>
                              <h4> Category: ${marga.strCategory ?? ``}</h4>
                              <h4> Glass: ${marga.strGlass ?? ``}</h4>
                            </div>
                            <hr>
                            <div class="ingredients-detail">
                             <h2>Ingredients</h2>
                              <ul>
                                <li>${marga.strIngredient1 ?? ``}</li>
                                <li>${marga.strIngredient2 ?? ``}</li>
                                <li>${marga.strIngredient3 ?? ``}</li>
                                <li>${marga.strIngredient4 ?? ``}</li>
                                <li>${marga.strIngredient5 ?? ``}</li>
                                <li>${marga.strIngredient6 ?? ``}</li>
                                <li>${marga.strIngredient7 ?? ``}</li>
                                <li>${marga.strIngredient8 ?? ``}</li>
                              </ul>
                            </div>
                            <hr>
                            <p>${marga.strInstructions ?? ``}</p>
                         </div>`
}