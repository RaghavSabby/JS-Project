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

// describe('Check LocalStorage Functionality', () => {
//     it('Check LocalStorage Functionality', () => {
//         cy.visit("/");
//         cy.get("article.country-card").then((articles) => {
//             // Added and Removed Single Code
//             const firstArticle = articles[0];
//             cy.get(firstArticle).within(() => {
//                 cy.get("i").should("have.attr", "id", "IND").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//                 cy.get("i").should("have.attr", "id", "IND").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(2);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('[]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
//             });

//             // Added Two Code, Removed One
//             const secondArticle = articles[1];
//             cy.get(secondArticle).within(() => {
//                 cy.get("i").should("have.attr", "id", "TWN").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//             });

//             const thirdArticle = articles[2];
//             cy.get(thirdArticle).within(() => {
//                 cy.get("i").should("have.attr", "id", "CHN").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","CHN"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//                 cy.get("i").should("have.attr", "id", "CHN").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
//             });

//             // Added Two More, Removed One
//             const forthArticle = articles[3];
//             cy.get(forthArticle).within(() => {
//                 cy.get("i").should("have.attr", "id", "DEU").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//             });

//             const fifthArticle = articles[4];
//             cy.get(fifthArticle).within(() => {
//                 cy.get("i").should("have.attr", "id", "ESP").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(19);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU","ESP"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//                 cy.get("i").should("have.attr", "id", "ESP").click().should(() => {
//                     expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
//                     expect(localStorage.getItem("countryAlphaCodes")).to.eq('["TWN","DEU"]');
//                 });
//                 cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
//             });
//         });
//         // Page Refreshed
//         cy.visit("/");
//         cy.wait(3000);
//         cy.window().then((win) => {
//             let codesArray = win.localStorage.getItem("countryAlphaCodes");
//             cy.wrap(codesArray).should("have.length", 13);
//             // cy.wrap(codesArray).eq(0).should("have.text", "TWN");
//             // cy.wrap(codesArray).eq(1).should("have.text", "DEU");
//         });
//     });
// });

// describe('Check Fetched Country Data Iterations', () => {
//     it('Check Fetched Country Data Iterations', () => {
//         cy.visit("/");
//         cy.wait(5000);
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").should('have.length', 250).and("exist").and("be.visible");
//         });
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").then((articles) => {
//                 for (let i = 0; i <= 5; i++) {
//                     cy.get(articles[i]).within(() => {
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

// describe('Check Search Functionality which supports Local Storage', () => {
//     it('Check Search Functionality which supports Local Storage', () => {
//         cy.visit("/");
//         cy.wait(5000);
//         cy.get("form").within(() => {
//             cy.get("input").type("india");
//             cy.wait(5000);
//             cy.get("button.search-btn").click();
//             cy.wait(5000);
//         });
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").should("have.length", 2).and("exist").and("be.visible");
//             cy.get("article.country-card").then((articles) => {
//                 const secondArticle = articles[1];
//                 cy.get(secondArticle).within(() => {
//                     cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
//                     cy.get("h2").should("exist").and("be.visible").and("have.text", "India");
//                     cy.get("i").should("have.attr", "id");
//                     cy.get("p").then((paras) => {
//                         for (let para of paras) {
//                             cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
//                         }
//                     });
//                     cy.get("i").should("have.attr", "id", "IND").click().should(() => {
//                         expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
//                         expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND"]');
//                     });
//                 });
//             });
//         });

//         cy.get("form").within(() => {
//             cy.get("input").clear();
//             cy.get("input").type("usa");
//             cy.wait(5000);
//             cy.get("button.search-btn").click();
//             cy.wait(5000);
//         });
//         cy.get("main.content-container").within(() => {
//             cy.get("article.country-card").should("have.length", 1).and("exist").and("be.visible");
//             cy.get("article.country-card").then((articles) => {
//                 const firstArticle = articles[0];
//                 cy.get(firstArticle).within(() => {
//                     cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
//                     cy.get("h2").should("exist").and("be.visible").and("have.text", "United States of America");
//                     cy.get("i").should("have.attr", "id");
//                     cy.get("p").then((paras) => {
//                         for (let para of paras) {
//                             cy.get(para).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
//                         }
//                     });
//                     cy.get("i").should("have.attr", "id", "USA").click().should(() => {
//                         expect(localStorage.getItem("countryAlphaCodes")).to.length(13);
//                         expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND","USA"]');
//                     });
//                     cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart fa-solid");
//                     cy.get("i").should("have.attr", "id", "USA").click().should(() => {
//                         expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
//                         expect(localStorage.getItem("countryAlphaCodes")).to.eq('["IND"]');
//                     });
//                     cy.get("i").should("have.attr", "class", "fa-regular fa-heart card-heart");
//                 });
//             });
//         });
//     });
// });

describe('Check Filter Functionality which supports Local Storage', () => {
    it('Check Filter Functionality which supports Local Storage', () => {
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
                            // const firstPara = paras[0];
                            // cy.get(firstPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                            const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Africa");
                            // const thirdPara = paras[2];
                            // cy.get(thirdPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                        });
                    });
                }
            });
            cy.get("article.country-card").then((articles) => {
                const secondArticle = articles[0];
                cy.get(secondArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src");
                    cy.get("h2").should("exist").and("be.visible").and("have.text", "Algeria");
                    cy.get("i").should("have.attr", "id");
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Africa");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                    });
                    cy.get("i").should("have.attr", "id", "DZA").click().should(() => {
                        expect(localStorage.getItem("countryAlphaCodes")).to.length(7);
                        expect(localStorage.getItem("countryAlphaCodes")).to.eq('["DZA"]');
                    });
                });
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
                            // const firstPara = paras[0];
                            // cy.get(firstPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                            const secondPara = paras[1];
                            cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                            // const thirdPara = paras[2];
                            // cy.get(thirdPara).should("exist").and("be.visible").invoke("text").should("be.length.gt", 0);
                        });
                    });
                }
            });
        });
    });
});