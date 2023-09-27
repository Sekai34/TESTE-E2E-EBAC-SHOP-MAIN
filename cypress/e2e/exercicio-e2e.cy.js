/// <reference types="cypress" />
var lenght= 8
var faker = require ('faker');
const Faker = require('faker/lib');
const Random = require('faker/lib/random');
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
   

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        /*Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final*/
    });

      it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('.post-3850 > .product-block').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
          cy.addProduct()
          
        cy.get('.single_add_to_cart_button').click()
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#select2-billing_country-container').type('Brasil').click()
        cy.get('#billing_address_1').type(faker.address.streetAddress('49717684'))
        cy.get('#billing_city').type('São paulo')
        cy.get('#select2-billing_state-container').click().type('São paulo').click()
        
        cy.get('#billing_postcode').type('22710-074')
      
        cy.get('#billing_phone').type('+55 21 97732-7930')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').click()
        cy.get('#account_password').type(faker.internet.password())
        cy.get('#payment_method_cheque').click()
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click({force:true})
        cy.get('.woocommerce-order-details__title').contains('Detalhes do pedido')
        





    });
});
