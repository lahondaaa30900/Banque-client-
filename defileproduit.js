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

document.querySelectorAll('.product').forEach(product => {
    const images = product.querySelector('.product-images');
    const leftArrow = product.querySelector('.product-arrow.left');
    const rightArrow = product.querySelector('.product-arrow.right');

    let scrollPosition = 0;
    const imageWidth = images.clientWidth;

    leftArrow.addEventListener('click', () => {
        scrollPosition -= imageWidth;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        images.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        scrollPosition += imageWidth;
        if (scrollPosition > images.scrollWidth - imageWidth) {
            scrollPosition = images.scrollWidth - imageWidth;
        }
        images.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});
