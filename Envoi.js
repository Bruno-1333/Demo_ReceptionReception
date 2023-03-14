function Personne(nom = "Line", don = 1) {
    this.nom = nom;
    this.don = don;
    }

    function stockage() {
    const nom = $('#nom').val();
    const don = $('#don').val();
    const personne = new Personne(nom, don);
    localStorage.setItem('personne', JSON.stringify(personne));
    return true;
    }
