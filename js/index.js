const details = document.querySelector(".details")

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

async function api() {
    try {
        const response = await fetch (url);
        const json = await response.json();

        console.log(json)

        const results = json.drinks;

        for (let i = 0; i < 6; i++) {
            const drinks = results[i];
            console.log([drinks])
        
            details.innerHTML += `<div class="box">
                                  <h3>${drinks.strDrink}</h3>
                                  <img src="${drinks.strDrinkThumb}" alt"${drinks.strDrink}" />
                                  <h5>${drinks.strGlass}</h5>
                                  </div>`
        }

    }
    catch (error) {
        console.log("Something went wrong!", error)
        details.innerHTML = `<div class="indexError">Something went wrong!</div>`, error
    }
}
api()