/*
// Exercise 1

console.log('Hello Wordl');

*/


/*

// EXERCISE 2
function changeAllArticleColors() {
    const articles = document.querySelectorAll('#products article');
    
    for ( const article of articles) {
        article.classList.add('sale');
    }

}

changeAllArticleColors();
*/


function atachBuyEvents() {

    // vai buscar todos os buttons dentro de product

    const buttons = document.querySelectorAll('#products button')


    /*
    for loop em que dentro dos buttons itera cada button que quando carregado executa
    uma função que é chamada pelo eventListener quando um botão é clicked
    */
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('BUY');
 
            //imprime o event Target, ou seja o button que foi clickado
            console.log(this);
        })
    })


}

atachBuyEvents();
