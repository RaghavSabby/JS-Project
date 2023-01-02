/// <reference types="cypress" />

describe('Check CountriesList Iterations', () => {
    it('Check CountriesList Iterations', () => {
        cy.visit("/");
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").should('have.length', 10).and("exist").and("be.visible");
        });
        cy.get("main.content-container").within(() => {
            cy.get("article.country-card").then((articles) => {
                const firstArticle = articles[0];
                cy.get(firstArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/in.png");
                    cy.get("h2").should("exist").and("be.visible").contains("India");
                    cy.get("i").should("have.attr", "id", "IND")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("1380004385");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Asia");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("New Delhi");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Indian Rupee");
                    });
                });

                const secondArticle = articles[1];
                cy.get(secondArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/tw.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Taiwan");
                    cy.get("i").should("have.attr", "id", "TWN")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("23503349");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Asia");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Taipei");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("New Taiwan dollar");
                    });
                });

                const thirdArticle = articles[2];
                cy.get(thirdArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/cn.png");
                    cy.get("h2").should("exist").and("be.visible").contains("China");
                    cy.get("i").should("have.attr", "id", "CHN")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("1402112000");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Asia");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Beijing");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Chinese yuan");
                    });
                });

                const forthArticle = articles[3];
                cy.get(forthArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/de.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Germany");
                    cy.get("i").should("have.attr", "id", "DEU")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("83240525");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Berlin");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Euro");
                    });
                });

                const fifthArticle = articles[4];
                cy.get(fifthArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/es.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Spain");
                    cy.get("i").should("have.attr", "id", "ESP")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("47351567");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Europe");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Madrid");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Euro");
                    });
                });

                const sixthArticle = articles[5];
                cy.get(sixthArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/br.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Brazil");
                    cy.get("i").should("have.attr", "id", "BRA")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("212559409");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Americas");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Brasília");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Brazilian real");
                    });
                });

                const seventhArticle = articles[6];
                cy.get(seventhArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/ca.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Canada");
                    cy.get("i").should("have.attr", "id", "CAN")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("38005238");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Americas");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Ottawa");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Canadian dollar");
                    });
                });

                const eigthArticle = articles[7];
                cy.get(eigthArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/au.png");
                    cy.get("h2").should("exist").and("be.visible").contains("Australia");
                    cy.get("i").should("have.attr", "id", "AUS")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("25687041");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Oceania");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Canberra");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("Australian dollar");
                    });
                });

                const ninethArticle = articles[8];
                cy.get(ninethArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/nz.png");
                    cy.get("h2").should("exist").and("be.visible").contains("New Zealand");
                    cy.get("i").should("have.attr", "id", "NZL")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("25687041");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Oceania");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Wellington");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("New Zealand dollar");
                    });
                });

                const tenthArticle = articles[9];
                cy.get(tenthArticle).within(() => {
                    cy.get("img").should("exist").and("be.visible").and("have.attr", "src", "https://flagcdn.com/w320/za.png");
                    cy.get("h2").should("exist").and("be.visible").contains("South Africa");
                    cy.get("i").should("have.attr", "id", "ZAF")
                    cy.get("p").then((paras) => {
                        const firstPara = paras[0];
                        cy.get(firstPara).should("exist").and("be.visible").contains("59308690");
                        const secondPara = paras[1];
                        cy.get(secondPara).should("exist").and("be.visible").contains("Africa");
                        const thirdPara = paras[2];
                        cy.get(thirdPara).should("exist").and("be.visible").contains("Pretoria");
                        const forthPara = paras[3];
                        cy.get(forthPara).should("exist").and("be.visible").contains("South African rand");
                    });
                });
            });
        });
    });
});