/// <reference types="cypress" />

// Over the next few questions we will be creating a "Where in the World?" application, in which different countries with data is displayed, with search, filter, and add to favorite features. The HTML and the CSS code is already written, you only have to add to the JavaScript code.
// Part 1
// You have been given a "countriesList" array which contains objects with all the necessary details about a country.You have been given some starter code in the js file , you have to add new code to the existing file. Your first task is to display all the countries in the "countriesList" array. Map over the "countriesList" array and add the following HTML for each element in the main with class="content-container".
// Note: Give alpha3Code property as the id to the i element within every country's card. As we progress in this application, it will start making sense why we gave alpha3Code property as id to the i element of every country's card.
// This is how the application will look after you have implemented the first task.

describe('Check CountriesList Iterations', () => {
    it('Check CountriesList Iterations', () => {
        cy.visit("/");
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should('have.length', 10).and("exist").and("be.visible");
        });
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").then((articles) => {
                for (let article of articles) {
                    cy.get(article).within(() => {
                        cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
                        cy.get("h2").should("exist").and("be.visible").invoke('text').should("have.length.gt", 0);
                        cy.get("i").should("have.attr", "id");
                        cy.get("p").then((paras) => {
                            for (let para of paras) {
                                cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0)
                            }
                        });
                    });
                }
            });
        });
    });
});

// In continuation with the question "Where in the World? Part 1", in this question, we are going to add LocalStorage feature and some DOM Manipulation. Please solve the question "Where in the World? Part 1" before solving this question.
// Part 2
// In this question we are going to create the "Storage" class which will provide us all the necessary functions, which gets the alpha3Code array, adds a new alpha3Code, and removes a alpha3Code. Also, whenever any country card's heart with class="card-heart" is clicked, it adds "fa-solid" class to the country card's heart, and on clicking again that particular heart it removes the class "fa-solid". That is, on clicking the heart icon on a card, "fa-solid" class is added and the "alpha3Code" is added to the "countryAlphaCodes" array in local storage, and on clicking again "fa-solid" class is removed and the "alpha3Code" is removed from the "countryAlphaCodes" array.
// Create a Storage class: Create a static function named "getCountryAlphaCodeFromLocalStorage" which gets the list of all the alpha3Code already present in the cart. Note: Store the elements under the key "countryAlphaCodes" in local storage. Create a static function named "addCountryAlphaCodeToLocalStorage" which takes in an argument (countryAlphaCode) and adds it to the already existing list of products present in the cart. Create another static function "removeCountryAlphaCodeFromLocalStorage" which takes in a argument (countryAlphaCode) and removes that countryAlphaCode from the array in the local storage.
// This is how the application will look after you have implemented the task.

describe('Check LocalStorage Functionality developed using Class', () => {
    it('Check LocalStorage Functionality developed using Class', () => {
        cy.visit("/");
        cy.wait(5000);
        cy.window().then((win) => {
            let alphaCode = ["IND"];
            win.localStorage.setItem("countryAlphaCodes", JSON.stringify(alphaCode));
            let code = win.Storage.getCountryAlphaCodeFromLocalStorage();
            cy.wrap(code).should("have.length", 1);
            win.Storage.addCountryAlphaCodeToLocalStorage("USA");
            code = win.Storage.getCountryAlphaCodeFromLocalStorage();
            cy.wrap(code).should("have.length", 2);
            win.Storage.removeCountryAlphaCodeFromLocalStorage("USA");
            code = win.Storage.getCountryAlphaCodeFromLocalStorage();
            cy.wrap(code).should("have.length", 1);
        });
    });
});

describe('Check LocalStorage Functionality', () => {
    it('Check LocalStorage Functionality', () => {
        cy.visit("/");
        cy.get("article.country-card").then((articles) => {
            // Added and Removed Single Code
            const firstArticle = articles[0];
            cy.get(firstArticle).within(() => {
                cy.get("i").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
                cy.get("i").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(2);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('[]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
            });

            // Added Two Code, Removed One
            const secondArticle = articles[1];
            cy.get(secondArticle).within(() => {
                cy.get("i").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
            });

            const thirdArticle = articles[2];
            cy.get(thirdArticle).within(() => {
                cy.get("i").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","CHN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
                cy.get("i").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
            });
        });
        // Page Refreshed
        cy.visit("/");
        cy.wait(3000);
        cy.window().then((win) => {
            let codesArray = win.localStorage.getItem("countryAlphaCodes");
            cy.wrap(codesArray).should("have.length", 7);
            cy.wrap(codesArray).should('eq', '["TWN"]');
        });
    });
});

// In continuation with the question "Where in the World? Part 2", in this question, we are going to Fetch Data from an API and display country cards. Please solve the question "Where in the World? Part 2" before solving this question.
// Part 3
// In this question, we are going to fetch data from https://restcountries.com/v2/all API and generate country cards. Explore the API's data. The properties which are of interest to us are name, capital, region, population, flag, and alpha3Code. Map over the data array and add the following HTML for each element in the main with class="content-container".
// Make sure that the local storage functionality, which we developed in the previous question, should work in this task too.
// This is how the application will look after you have implemented the task.

describe('Check Fetched Country Data Iterations', () => {
    it('Check Fetched Country Data Iterations', () => {
        cy.visit("/");
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should('have.length', 250).and("exist").and("be.visible");
        });
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").then((articles) => {
                for (let i = 0; i <= 5; i++) {
                    cy.get(articles[i]).within(() => {
                        cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
                        cy.get("h2").should("exist").and("be.visible").invoke('text').should("have.length.gt", 0);
                        cy.get("i").should("have.attr", "id");
                        cy.get("p").then((paras) => {
                            for (let para of paras) {
                                cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0)
                            }
                        });
                    });
                }
            });
        });
    });
});

// In continuation with the question "Where in the World? Part 3", in this question, we are going to add search functionality and display country cards according to the search input which matches the country's name. Please solve the question "Where in the World? Part 3" before solving this question.
// Part 4
// In this question, we are going to fetch data from https://restcountries.com/v2/name/{countryName} API and display country cards according to the country's name searched. This API takes an argument "countryName" and accordingly sends a response with the countries' data. Here is an example, https://restcountries.com/v2/name/india. Provide the API with different country names and explore the data. After you get the array of data from the API, map over the data array and display the country cards.
// This is how the application will look after you have implemented the task.

describe('Check Search Functionality', () => {
    it('Check Search Functionality', () => {
        cy.visit("/");
        cy.wait(5000);
        cy.get("form").within(() => {
            cy.get("input").type("india");
            cy.wait(5000);
            cy.get("button.search-btn").click();
            cy.wait(5000);
        });
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should("have.length", 2).and("exist").and("be.visible");
            cy.get("article.country-card").then((articles) => {
                const secondArticle = articles[1];
                cy.get(secondArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
                    cy.get("h2").should("exist").and("be.visible").and("have.text", "India");
                    cy.get("i").should("have.attr", "id");
                    cy.get("p").then((paras) => {
                        for (let para of paras) {
                            cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                        }
                    });
                });
            });
        });

        cy.get("form").within(() => {
            cy.get("input").clear();
            cy.get("input").type("usa");
            cy.wait(5000);
            cy.get("button.search-btn").click();
            cy.wait(5000);
        });
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should("have.length", 1).and("exist").and("be.visible");
            cy.get("article.country-card").then((articles) => {
                const firstArticle = articles[0];
                cy.get(firstArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
                    cy.get("h2").should("exist").and("be.visible").and("have.text", "United States of America");
                    cy.get("i").should("have.attr", "id");
                    cy.get("p").then((paras) => {
                        for (let para of paras) {
                            cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                        }
                    });
                });
            });
        });
    });
});

// In continuation with the question "Where in the World? Part 4", in this question, we are going to add filter functionality and display country cards as per filtered region. Please solve the question "Where in the World? Part 4" before solving this question.
// Part 5
// In this question, we are going to use https://restcountries.com/v2/region/{region} API to display country cards with a specific region. This API takes an argument "region" and returns a data array of country of a particular region. Here is an example, https://restcountries.com/v2/region/europe. Provide the API with different regions and explore the data. After you get the array of data from the API, map over the data array and display the country cards. Make sure, when "All" option is selected, it should display all the country cards irrespective of the regions.
// This is how the application will look after you have implemented the task.

describe('Check Filter Functionality', () => {
    it('Check Filter Functionality', () => {
        cy.visit("/");
        cy.wait(5000);
        cy.get("select#countries").select("Africa");
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should("have.length", 60).and("exist").and("be.visible");
            cy.get("article.country-card").then((articles) => {
                for (let i=0; i <= 5; i++) {
                    cy.get(articles[i]).within(() => {
                        cy.get("p").then((paras) => {
                            const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Africa");
                        });
                    });
                }
            });
        });

        cy.get("select#countries").select("Europe");
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should("have.length", 53).and("exist").and("be.visible");
            cy.get("article.country-card").then((articles) => {
                for (let i=0; i <= 5; i++) {
                    cy.get(articles[i]).within(() => {
                        cy.get("p").then((paras) => {
                            const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                        });
                    });
                }
            });
        });

        cy.get("select#countries").select("All");
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should("have.length", 250).and("exist").and("be.visible");
            cy.get("article.country-card").then((articles) => {
                const firstArticle = articles[0];
                cy.get(firstArticle).within(() => {
                    cy.get("p").then((paras) => {
                        const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Asia");
                    });
                });
                const secondArticle = articles[1];
                cy.get(secondArticle).within(() => {
                    cy.get("p").then((paras) => {
                        const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                    });
                });
                const thirdArticle = articles[2];
                cy.get(thirdArticle).within(() => {
                    cy.get("p").then((paras) => {
                        const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                    });
                });
                const forthArticle = articles[3];
                cy.get(forthArticle).within(() => {
                    cy.get("p").then((paras) => {
                        const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Africa");
                    });
                });
            });
        });
    });
});

// In continuation with the question "Where in the World? Part 5", in this question, we are going to populate the wishlist section with the countries added to wishlist. Please solve the question "Where in the World? Part 5" before solving this question.
// Part 6
// In this question, we are going to get the "countryAlphaCodes" array from the localStorage and pass each element as argument in the https://restcountries.com/v2/alpha/{alphaCode} API, to get the country data. This time we are interested in flag, name, and alpha3Code properties of the data so that in the wishlist section only the flag and the name of the country is displayed. Add the following HTML for each element in the ul element with class="unordered-wishlist".
// Within the HTML given above, there is a section with class="remove-list-item". This is section should have a click event which removes the country from the wishlist section and the alpha3Code from the "countryAlphaCodes" array.
// This is how the application will look after you have implemented the task.

describe('Check Wishlist Section', () => {
    it('Check Wishlist Section', () => {
        cy.visit('/');
        cy.wait(5000);
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").then((articles) => {
                const albaniaCard = articles[2];
                cy.get(albaniaCard).within(() => {
                        cy.get("i").click();
                });
                const algeriaCard = articles[3];
                cy.get(algeriaCard).within(() => {
                        cy.get("i").click();
                });
            });
        });
        cy.get("#wishlist-heart-btn").click();
        cy.get("ul.unordered-wishlist").should("exist").and("be.visible");
        cy.get("ul.unordered-wishlist").within(() => {
            cy.wait(5000);
            cy.get("li").should("have.length", 3).should("exist").and("be.visible");
            cy.get("li").within((listItems) => {
                const albaniaItem = listItems[1];
                cy.get(albaniaItem).should("exist").and("be.visible").contains("Albania");
                const algeriaItem = listItems[2];
                cy.get(algeriaItem).should("exist").and("be.visible").contains("Algeria");
            });
            cy.get("li").within((listItems) => {
                const albaniaItem = listItems[0];
                cy.get(albaniaItem).within(() => {
                    cy.get("section.remove-list-item").click();
                });
            });
        });
        cy.get("ul.unordered-wishlist").within(() => {
            cy.get("li").should("exist").and("be.visible").and("have.length", 1);
            cy.get("li").within((listItems) => {
                const algeriaItem = listItems[0];
                cy.get(algeriaItem).should("exist").and("be.visible").contains("Algeria");
            });
        });
    });
});