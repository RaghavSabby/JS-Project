/// <reference types="cypress" />

// describe('Check CountriesList Iterations', () => {
//     it('Check CountriesList Iterations', () => {
//         cy.visit("/");
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").should('have.length', 10).and("exist").and("be.visible");
//         });
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").then((articles) => {
//                 for (let article of articles) {
//                     cy.get(article).within(() => {
//                         cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
//                         cy.get("h2").should("exist").and("be.visible").invoke('text').should("have.length.gt", 0);
//                         cy.get("i").should("have.attr", "id");
//                         cy.get("p").then((paras) => {
//                             for (let para of paras) {
//                                 cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0)
//                             }
//                         });
//                     });
//                 }
//             });
//         });
//     });
// });

describe('Check LocalStorage Functionality', () => {
    it('Check LocalStorage Functionality', () => {
        cy.visit("/");
        cy.get("article.country-card").then((articles) => {
            // Added and Removed Single Code
            const firstArticle = articles[0];
            cy.get(firstArticle).within(() => {
                cy.get("i").should("have.attr", "id", "IND").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
                cy.get("i").should("have.attr", "id", "IND").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(2);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('[]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
            });

            // Added Two Code, Removed One
            const secondArticle = articles[1];
            cy.get(secondArticle).within(() => {
                cy.get("i").should("have.attr", "id", "TWN").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
            });

            const thirdArticle = articles[2];
            cy.get(thirdArticle).within(() => {
                cy.get("i").should("have.attr", "id", "CHN").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","CHN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
                cy.get("i").should("have.attr", "id", "CHN").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
            });

            // Added Two More, Removed One
            const forthArticle = articles[3];
            cy.get(forthArticle).within(() => {
                cy.get("i").should("have.attr", "id", "DEU").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
            });

            const fifthArticle = articles[4];
            cy.get(fifthArticle).within(() => {
                cy.get("i").should("have.attr", "id", "ESP").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(19);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU","ESP"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
                cy.get("i").should("have.attr", "id", "ESP").click().should(() => {
                    expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
                    expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU"]');
                });
                cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
            });
        });
        // Page Refreshed
        cy.visit("/");
        cy.wait(4000);
        cy.window().then((win) => {
            let codesArray = win.localStorage.getItem("countryAlphaCodes");
            cy.wrap(codesArray).should("have.length", 13);
            // cy.wrap(codesArray).eq(0).should("have.text", "TWN");
            // cy.wrap(codesArray).eq(1).should("have.text", "DEU");
        });
    });
});