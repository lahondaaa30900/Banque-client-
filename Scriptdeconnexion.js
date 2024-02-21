document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    
    // Récupérer les valeurs du formulaire
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Vérifier si les identifiants sont valides
    if (database.hasOwnProperty(email) && database[email] === password) {
        // Rediriger vers la page d'accueil si les identifiants sont valides
        window.location.href = "accueil.html";
    } else {
        // Afficher un message d'erreur si les identifiants sont incorrects
        alert("Adresse e-mail ou mot de passe incorrect.");
    }
});
