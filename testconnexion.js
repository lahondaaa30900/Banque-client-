// Import des modules nécessaires pour les tests
const assert = require('chai').assert;
const { JSDOM } = require('jsdom');
const fs = require('fs');

// Charger le contenu de la page HTML à tester
const html = fs.readFileSync('votre_page_de_connexion.html', 'utf-8');

// Créer un environnement DOM simulé
const { window } = new JSDOM(html);
global.document = window.document;
global.window = window;

// Charger le script de la base de données simulée
require('./bdd1.js');

// Charger le script à tester
require('./votre_script_de_connexion.js');

// Décrire le test de la fonction de connexion
describe('Test de la fonction de connexion', function() {
    it('Doit rediriger vers la page d\'accueil avec des identifiants valides', function() {
        // Simuler la saisie des identifiants dans le formulaire de connexion
        document.getElementById('email').value = 'user1@example.com';
        document.getElementById('password').value = 'user1';

        // Simuler la soumission du formulaire
        document.getElementById('loginForm').dispatchEvent(new window.Event('submit'));

        // Vérifier que la page a été redirigée vers la page d'accueil
        assert.equal(window.location.href, 'accueil.html');
    });

    it('Doit afficher un message d\'erreur avec des identifiants invalides', function() {
        // Simuler la saisie des identifiants incorrects dans le formulaire de connexion
        document.getElementById('email').value = 'utilisateur_inconnu@example.com';
        document.getElementById('password').value = 'mot_de_passe_incorrect';

        // Simuler la soumission du formulaire
        document.getElementById('loginForm').dispatchEvent(new window.Event('submit'));

        // Vérifier que la page n'a pas été redirigée
        assert.notEqual(window.location.href, 'accueil.html');

        // Vérifier qu'un message d'erreur a été affiché
        assert.equal(window.alert.calledWith('Adresse e-mail ou mot de passe incorrect.'), true);
    });
});
