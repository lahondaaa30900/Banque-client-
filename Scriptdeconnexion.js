document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simulation de la base de données
        var database = [
            { email: 'exemple1@example.com', password: 'motdepasse1' },
            { email: 'exemple2@example.com', password: 'motdepasse2' },
            { email: 'exemple3@example.com', password: 'motdepasse3' },
            { email: 'exemple4@example.com', password: 'motdepasse4' }
            // Ajoutez d'autres utilisateurs au besoin
        ];

        var emailInput = document.getElementById('email').value;
        var passwordInput = document.getElementById('password').value;

        // Vérifiez les identifiants par rapport à la base de données
        var utilisateurTrouve = database.find(function (utilisateur) {
            return utilisateur.email === emailInput && utilisateur.password === passwordInput;
        });

        if (utilisateurTrouve) {
            // Redirige l'utilisateur vers la page d'accueil après la connexion réussie
            window.location.href = 'accueil.html';
        } else {
            // Gérez le cas où les identifiants ne sont pas valides (par exemple, affichez un message d'erreur)
            console.log('Votre identifiant ou mot de passe est incorrect.');
        }
    });
});
