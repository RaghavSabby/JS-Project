const countriesList = [
    {
        "id": 1,
        "name": "India",
        "capital": "New Delhi",
        "region": "Asia",
        "population": 1380004385,
        "currencies": [
            {
                "currencyName": "Indian Rupee"
            }
        ],
        "flag": "https://flagcdn.com/w320/in.png", 
    },
    {
        "id": 2,
        "name": "Taiwan",
        "capital": "Taipei",
        "region": "Asia",
        "population": 23503349,
        "currencies": [
            {
                "currencyName": "New Taiwan dollar"
            }
        ],
        "flag": "https://flagcdn.com/w320/tw.png", 
    },
    {
        "id": 3,
        "name": "China",
        "capital": "Beijing",
        "region": "Asia",
        "population": 1402112000,
        "currencies": [
            {
                "currencyName": "Chinese yuan"
            }
        ],
        "flag": "https://flagcdn.com/w320/cn.png", 
    },
    {
        "id": 4,
        "name": "Germany",
        "capital": "Berlin",
        "region": "Europe",
        "population": 83240525,
        "currencies": [
            {
                "currencyName": "Euro"
            }
        ],
        "flag": "https://flagcdn.com/w320/de.png", 
    },
    {
        "id": 5,
        "name": "Spain",
        "capital": "Madrid",
        "region": "Europe",
        "population": 47351567,
        "currencies": [
            {
                "currencyName": "Euro"
            }
        ],
        "flag": "https://flagcdn.com/w320/es.png", 
    },
    {
        "id": 6,
        "name": "Brazil",
        "capital": "Brasília",
        "region": "Americas",
        "population": 212559409,
        "currencies": [
            {
                "currencyName": "Brazilian real"
            }
        ],
        "flag": "https://flagcdn.com/w320/br.png", 
    },
    {
        "id": 7,
        "name": "Canada",
        "capital": "Ottawa",
        "region": "Americas",
        "population": 38005238,
        "currencies": [
            {
                "currencyName": "Canadian dollar"
            }
        ],
        "flag": "https://flagcdn.com/w320/ca.png", 
    },
    {
        "id": 8,
        "name": "Australia",
        "capital": "Canberra",
        "region": "Oceania",
        "population": 25687041,
        "currencies": [
            {
                "currencyName": "Australian dollar"
            }
        ],
        "flag": "https://flagcdn.com/w320/au.png", 
    },
    {
        "id": 9,
        "name": "New Zealand",
        "capital": "Wellington",
        "region": "Oceania",
        "population": 25687041,
        "currencies": [
            {
                "currencyName": "New Zealand dollar"
            }
        ],
        "flag": "https://flagcdn.com/w320/nz.png", 
    },
    {
        "id": 10,
        "name": "South Africa",
        "capital": "Pretoria",
        "region": "Africa",
        "population": 59308690,
        "currencies": [
            {
                "currencyName": "South African rand"
            }
        ],
        "flag": "https://flagcdn.com/w320/za.png", 
    },
]

const contentContainer = document.querySelector(".content-container");
const unorderedWishList = document.querySelector(".unordered-wishlist");

// Fetching all the countries
const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const result = await response.json();
    return result;
}

// Fetching countries by alpha3Code, using in LocalStorage
const getCountryByAlphaCode = async (alphaCode) => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${alphaCode}`);
    const result = await response.json();
    return result;
}

// Fetching countries by country name
const getCountryBySearch = async (searchText) => {
    const response = await fetch(`https://restcountries.com/v2/name/${searchText}`);
    const result = await response.json();
    return result
}

// Fetching countries by region
const getCountryByRegion = async (region) => {
    const response = await fetch(`https://restcountries.com/v2/region/${region}`);
    const result = await response.json();
    return result
}

// countriesList.map((country) => {
//     const { name, capital, region, population, currencies: [{ currencyName }], flag, id } = country;
//     const cardArticle = document.createElement("article");
//     cardArticle.className = "country-card";
//     cardArticle.innerHTML += 
//         `
//         <img src="${flag}" alt="${name}" width="200px" height="120px">
//         <section class="country-data">
//             <section class="country-name-heart">
//                 <h2 class="country-name">${name}</h2>
//                 <i class="fa-regular fa-heart card-heart" id="${id}"></i>
//             </section>
//             <p class="country-population">Population: ${population}</p>
//             <p class="country-region">Region: ${region}</p>
//             <p class="country-capital">Capital: ${capital}</p>
//             <p class="country-currency">Currency: ${currencyName}</p>
//         </section>
//         `;
    
//     contentContainer.appendChild(cardArticle);
// });

const showCountry = (countryData) => {
    contentContainer.innerHTML = "";
    countryData.map((country) => {
        // const { name, capital, region, population, currencies: [{ currencyName }], flag, id } = country;
        const { name, capital, region, population, flag, alpha3Code } = country;
        const cardArticle = document.createElement("article");
        cardArticle.className = "country-card";
        cardArticle.innerHTML += 
            `
            <img src="${flag}" alt="${name}" width="100%" height="200px">
            <section class="country-data">
                <section class="country-name-heart">
                    <h2 class="country-name">${name}</h2>
                    <i class="fa-regular fa-heart card-heart" id="${alpha3Code}"></i>
                </section>
                <p class="country-population">Population: ${population}</p>
                <p class="country-region">Region: ${region}</p>
                <p class="country-capital">Capital: ${capital}</p>
            </section>
            `;

        const cardHeartBtn = cardArticle.querySelector(".card-heart");
        cardHeartBtn.addEventListener("click", (event) => {
            const { id } = event.target;
            console.log(event.target.id);
            // Storage.addCountryIdToLocalStorage(id);
            // showWishList(countriesList);
            // const getCountryByAlphaCodeData = await getCountryByAlphaCode(id);
            
            if (cardHeartBtn.classList.contains("fa-solid")) {
                Storage.removeCountryAlphaCodeFromLocalStorage(id);
                // showWishList(countryAlphaCodeArray);
                cardHeartBtn.classList.remove("fa-solid");
            } else {
                Storage.addCountryAlphaCodeToLocalStorage(id);
                // showWishList(countryAlphaCodeArray);
                cardHeartBtn.classList.add("fa-solid");
            }
            fetchWishlistCountry();
        })
        contentContainer.appendChild(cardArticle);
    });

}

// showCountry(countriesList);

class Storage {

    static getCountryAlphaCodeFromLocalStorage() {
        const countryAlphaCodes = JSON.parse(localStorage.getItem("countryAlphaCodes"));
        return countryAlphaCodes === null ? [] : countryAlphaCodes;
    }

    static addCountryAlphaCodeToLocalStorage(countryAlphaCode) {
        const countryAlphaCodes = this.getCountryAlphaCodeFromLocalStorage();
        localStorage.setItem("countryAlphaCodes", JSON.stringify([...countryAlphaCodes, countryAlphaCode]));
    }

    static removeCountryAlphaCodeFromLocalStorage(countryAlphaCode) {
        const countryAlphaCodes = this.getCountryAlphaCodeFromLocalStorage();
        localStorage.setItem("countryAlphaCodes", JSON.stringify(countryAlphaCodes.filter((id) => id !== countryAlphaCode)));
    }
}

window.Storage = Storage;


// countriesList.map((country) => {
//     const { name, flag, id } = country;
//     let countryIdArray = Storage.getCountryIdFromLocalStorage();
//     if (countryIdArray.includes(`"${id}"`)) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = 
//             `
//                 <section class="country-flag-name">
//                     <img src="${flag}" alt="${name}" width="110px" height="60px">
//                     <p>${name}</p>
//                 </section>
//                 <section class="remove-list-item">
//                     <i class="fa-solid fa-xmark fa-xl xmark"></i>
//                 </section>
//             `;
//         unorderedWishList.appendChild(listItem);
//     }
// });

const fetchWishlistCountry = async () => {
    unorderedWishList.innerHTML = "";
    const countryAlphaCodeArray = Storage.getCountryAlphaCodeFromLocalStorage();
    for (let i = 0; i < countryAlphaCodeArray.length; i++) {
        const alphaCode = countryAlphaCodeArray[i];
        let countryDataFromAlpha = await getCountryByAlphaCode(alphaCode);
        showWishList(countryDataFromAlpha);
    }
}

const showWishList = (countryAplhaCode) => {

    const { flag, name, alpha3Code } = countryAplhaCode;

    const listItem = document.createElement("li");
        listItem.innerHTML = 
            `
            <section class="country-flag-name">
                <img src="${flag}" alt="${name}" width="110px" height="60px">
                <p>${name}</p>
            </section>
            <section class="remove-list-item">
                <i class="fa-solid fa-xmark fa-xl xmark" id="${alpha3Code}"></i>
            </section>
            `;

        const removeFromWishlistBtn = listItem.querySelector(".remove-list-item .xmark");
        removeFromWishlistBtn.addEventListener("click", (event) => {
            const { id } = event.target;
            console.log(event.target.id);
            Storage.removeCountryAlphaCodeFromLocalStorage(id);
            fetchWishlistCountry();
        });
        unorderedWishList.appendChild(listItem);
    
    // countryAplhaCodes.map((countryAplhaCode) => {
    //     console.log(countryAplhaCode);
    //     const countryInfo = getCountryByAlphaCode(countryAplhaCode);
        
    //     const listItem = document.createElement("li");
    //     listItem.innerHTML = 
    //         `
    //         <section class="country-flag-name">
    //             <img src="${flag}" alt="${name}" width="110px" height="60px">
    //             <p>${name}</p>
    //         </section>
    //         <section class="remove-list-item">
    //             <i class="fa-solid fa-xmark fa-xl xmark" id="10"></i>
    //         </section>
    //         `;

    //     const removeFromWishlistBtn = listItem.querySelector(".remove-list-item .xmark");
    //     removeFromWishlistBtn.addEventListener("click", async (event) => {
    //         const { id } = event.target;
    //             console.log(event.target.id);
    //             Storage.removeCountryIdFromLocalStorage(id);
    //             const getCountryByAlphaCodeData = await getCountryByAlphaCode(id)
    //             showWishList(getCountryByAlphaCodeData);
    //     })
    //     unorderedWishList.appendChild(listItem);
    // });
}

// function showWishList(countryData) {
//     countryData.map((country) => {
//         const { name, flag, alpha3Code } = country;
//         let countryIdArray = Storage.getCountryIdFromLocalStorage();
//         if (countryIdArray.includes(`"${alpha3Code}"`)) {
//             const listItem = document.createElement("li");
//             listItem.innerHTML = 
//                 `
//                     <section class="country-flag-name">
//                         <img src="${flag}" alt="${name}" width="110px" height="60px">
//                         <p>${name}</p>
//                     </section>
//                     <section class="remove-list-item">
//                         <i class="fa-solid fa-xmark fa-xl xmark"></i>
//                     </section>
//                 `;
//             unorderedWishList.appendChild(listItem);
//         }
//     });
// }


document.addEventListener("DOMContentLoaded", async () => { 

    const getAllCountriesData = await getAllCountries();
    showCountry(getAllCountriesData);

    fetchWishlistCountry();

    document.querySelector("button.search-btn").addEventListener("click", async (event) => {
        event.preventDefault();
        const searchInputField = document.querySelector("input#search");
        console.log(searchInputField.value);
        const getCountryBySearchData = await getCountryBySearch(searchInputField.value);
        console.log(getCountryBySearchData);
        showCountry(getCountryBySearchData);
    });

    document.querySelector("select#countries").addEventListener("change", async (event) => {
        event.preventDefault();
        const optionValue = document.querySelector("select#countries");
        console.log(optionValue.value);
        if (optionValue.value == "All") {
            showCountry(getAllCountriesData);
        } else {
            const getCountryByRegionData = await getCountryByRegion(optionValue.value);
            showCountry(getCountryByRegionData);
        }     
    });
    
    function showMenu() {
        const wishlistMenu = document.querySelector("section.wishlist-menu");
        wishlistMenu.style.height = "100%";
        wishlistMenu.style.display = "block";
    }

    function closeMenu() {
        const wishlistMenu = document.querySelector("section.wishlist-menu");
        wishlistMenu.style.height = "0";
        wishlistMenu.style.display = "none";
    }

    document.querySelector("i#wishlish-heart-btn").addEventListener("click", showMenu);
    document.getElementById("wishlist-close-btn").addEventListener("click", closeMenu);

    // const cardHeartBtn = document.querySelectorAll(".country-name-heart .card-heart");
    // for (let i=0; i<cardHeartBtn.length; i++) {
    //     cardHeartBtn[i].addEventListener("click", async (event) => {
    //         const { id } = event.target;
    //         console.log(event.target.id);
    //         // Storage.addCountryIdToLocalStorage(id);
    //         // showWishList(countriesList);
    //         const getCountryByAlphaCodeData = await getCountryByAlphaCode(id);
    //         if (cardHeartBtn[i].classList.contains("fa-solid")) {
    //             Storage.removeCountryIdFromLocalStorage(id);
    //             showWishList(getCountryByAlphaCodeData);
    //             cardHeartBtn[i].classList.remove("fa-solid");
    //         } else {
    //             Storage.addCountryIdToLocalStorage(id);
    //             showWishList(getCountryByAlphaCodeData);
    //             cardHeartBtn[i].classList.add("fa-solid");
    //         }
    //     });
    // }

    // const removeFromWishlistBtn = document.querySelectorAll(".remove-list-item .xmark");
    // for (let i=0; i<removeFromWishlistBtn.length; i++) {
    //     removeFromWishlistBtn[i].addEventListener("click", async (event) => {
    //         const { id } = event.target;
    //         console.log(event.target.id);
    //         Storage.removeCountryIdFromLocalStorage(id);
    //         const getCountryByAlphaCodeData = await getCountryByAlphaCode(id)
    //         showWishList(getCountryByAlphaCodeData);
    //     });
    // }
});