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
            
            //Parte do EX3
            /*console.log('BUY');
            
            //imprime o event Target, ou seja o button que foi clickado
            console.log(this);
            */
            
            // a class parent do button é o article data-id (html)
            const article = this.parentElement;


            console.log(article);
            
            //Adiciona ou remove a class 'sale' à class parente do botão clickado 
            article.classList.toggle('sale');

            const product_id = article.getAttribute('data-id');
            console.log('Product ID:', product_id);

            const product_name = article.querySelector('h2').textContent;
            console.log('Product:', product_name);

            const product_price = article.querySelector('.price').textContent;
            console.log('Current Price:', product_price);

            const  product_quant = article.querySelector('.quantity').value;        
            console.log('Chosen quantity:', product_quant);


        })
    })


}

atachBuyEvents();
