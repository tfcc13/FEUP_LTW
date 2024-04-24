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


function attachBuyEvents() {

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
            
            const total_price = product_quant*product_price;

            const cart_table = document.querySelector('#cart table');

            let cart_table_body = cart_table.querySelector('tbody');
            if (!cart_table_body) {
                cart_table_body = document.createElement('tbody');
                cart_table.appendChild(cart_table_body);
            }


            const existing_row = document.querySelector(`#cart table tbody tr[data-id="${product_id}"]`);

            if (existing_row) {
                const quant_cell = existing_row.querySelector('.quantity');
                const total_cell = existing_row.querySelector('.total');

                const new_quant_cell = parseInt(quant_cell.textContent)+parseInt(product_quant);
                const new_total_cell = total_price + parseInt(total_cell.textContent);

                quant_cell.textContent = new_quant_cell;
                total_cell.textContent = new_total_cell;
            }

            else {
                
                const new_row = document.createElement('tr');
                new_row.setAttribute('data-id', product_id)

                const id_cell = document.createElement('td');
                id_cell.textContent = product_id;

                const name_cell = document.createElement('td');
                name_cell.textContent = product_name;
                
                const price_cell = document.createElement('td');
                price_cell.textContent = product_price;

                const quant_cell = document.createElement('td');
                quant_cell.classList.add('quantity');
                quant_cell.textContent = product_quant;
                
                const total_cell = document.createElement('td');
                total_cell.textContent = total_price;
                total_cell.classList.add('total');

                const remove_cell_link = document.createElement('a');
                remove_cell_link.href = '#';
                remove_cell_link.textContent= 'X';
                remove_cell_link.addEventListener('click', function(event) {
                    event.preventDefault();
                    new_row.remove();
                    updateCart();
                });

                const remove_cell = document.createElement('td');
                remove_cell.appendChild(remove_cell_link);
                

                new_row.appendChild(id_cell);
                new_row.appendChild(name_cell);
                new_row.appendChild(quant_cell);
                new_row.appendChild(price_cell);
                new_row.appendChild(total_cell);
                new_row.appendChild(remove_cell);

                const cart_table_body = cart_table.querySelector('tbody');
                cart_table_body.appendChild(new_row);

            }


            
            updateCart();

        })      
    })


    function updateCart() {
        const rows = document.querySelectorAll('#cart table tbody tr');

        let total = 0;

        rows.forEach(row => {
            const total_price = parseInt(row.querySelector('.total').textContent)
            total += total_price;
        });

        total_element = document.querySelector('#cart table tfoot tr th:last-child');
        
        total_element.textContent = total;
    }

}



attachBuyEvents();
