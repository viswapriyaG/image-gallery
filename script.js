window.addEventListener('load', () => {
    console.log('Page loaded');
    addTabFocus();
    testMouseMovement();
});

function addTabFocus() {
    const images = document.querySelectorAll('#gallery img');
    images.forEach(img => {
        img.addEventListener('focus', () => {
            console.log('Image focused:', img.alt);
            img.style.filter = 'none'; // Remove blur on focus
            img.style.border = '2px solid blue'; // Example focus style
        });

        img.addEventListener('blur', () => {
            console.log('Image blurred:', img.alt);
            img.style.filter = 'blur(5px)'; // Reapply blur on blur
            img.style.border = ''; // Remove focus style
        });
    });
}

function testMouseMovement() {
    document.addEventListener('mousemove', (event) => {
        console.log('Mouse moved at:', event.clientX, event.clientY);
    });
}
