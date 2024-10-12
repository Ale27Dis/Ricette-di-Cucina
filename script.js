// Aggiungi un event listener per aggiungere una nuova ricetta
document.getElementById('add-recipe').addEventListener('click', function() {
    const recipeInput = document.getElementById('recipe-input');
    const recipeList = document.getElementById('recipe-list');

    // Controlla se l'input non è vuoto
    if (recipeInput.value) {
        // Crea un nuovo elemento della lista
        const li = document.createElement('li');
        li.innerHTML = `${recipeInput.value} <button class="delete">✗</button>`;
        recipeList.appendChild(li);

        // Anima la nuova ricetta utilizzando GSAP
        gsap.from(li, { duration: 0.5, opacity: 0, y: -20 });

        // Pulisci il campo di input
        recipeInput.value = '';
    }
});

// Aggiungi un event listener per eliminare le ricette
document.getElementById('recipe-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        // Anima la rimozione della ricetta utilizzando GSAP
        gsap.to(e.target.parentElement, { duration: 0.5, opacity: 0, y: 20, onComplete: function() {
            e.target.parentElement.remove();
        }});
    }
});


// espandi 
function toggleCard(card) {
    card.classList.toggle('expanded');
}
