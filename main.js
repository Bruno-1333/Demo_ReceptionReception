const parms = new URLSearchParams(window.location.search);
const nom = parms.get('nom');
const don = parms.get('don');
if (nom || don) {
    afficherPersonne(nom, don);
}

function afficherPersonne(nom,don){
    $('#reception').append(
        `<p>Nom: ${nom}</p>
        <p>Don: ${don}</p>`
    );
}
const personne = JSON.parse(localStorage.getItem('personne'));
afficherPersonne(personne.nom, personne.don);