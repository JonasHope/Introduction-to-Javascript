const details = document.querySelector("detailContainer");
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

        const marga = json.drinks[0]

        createHtml(marga);
    }
    catch(error) {
        console.log(error, "upsi, something went wrong, try again.");
    }
}

getDrinks();

function createHtml(marga) {
    details.innerHTML = `<h1>${marga.strDrink}</h1>`
}