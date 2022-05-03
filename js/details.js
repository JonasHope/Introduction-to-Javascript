const details = document.querySelector("detailContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" + id;

async function getDrinks() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        const results = json.drinks;

        for (let i = 0; i < 6; i++) {
            const drinks = results[i];
            console.log([drinks]);

            details.innerHTML += 
            `
            <h3>${drinks.strDrink}</h3>
            <img src="${drinks.strDrinkThumb}" alt"${drinks.strDrink}" />
            <h5>${drinks.strGlass}</h5>
            `
        }
    }
    catch(error) {
        console.log(error, "upsi, something went wrong, try again.");
    }
}

getDrinks();
