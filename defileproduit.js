// Sélectionnez tous les produits
const products = document.querySelectorAll('.product');

// Parcourir chaque produit
products.forEach(product => {
    // Sélectionnez les images du produit
    const images = product.querySelector('.product-images');
    // Ajoutez un gestionnaire d'événements au survol du produit
    product.addEventListener('mouseenter', () => {
        images.style.overflowX = 'scroll';
    });
    // Ajoutez un gestionnaire d'événements lorsque le curseur quitte le produit
    product.addEventListener('mouseleave', () => {
        images.style.overflowX = 'hidden';
    });
});
