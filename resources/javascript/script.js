
// run after load
document.addEventListener('DOMContentLoaded', (event) => {
    // selector links (by html)
    const clickSelector = '.js-scroll';

    // foreach selector what to do after a click
    document.querySelectorAll(clickSelector).forEach((elementLink) => {
        // run on click
        elementLink.addEventListener('click', (event) => {
            event.preventDefault();

            // easing scroll
            let targetSelector = elementLink.getAttribute('href');
            document.querySelector(targetSelector).scrollIntoView({
                behavior: 'smooth'
            });

            // remove class active from all links
            document.querySelectorAll(clickSelector).forEach((elementLinkMenu) => {
                elementLinkMenu.classList.remove('active');
            });

            // add class active to clicked link
            elementLink.classList.add('active');
        });
    });
});