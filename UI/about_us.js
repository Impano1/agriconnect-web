
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.mission, .problem, .solution, .development-model, .hypothesis');
    
    function fadeInSections() {
        sections.forEach(section => {
            if (section && isElementInViewport(section)) {
                section.classList.add('animate__animated');
                if (section.style) {
                    section.style.opacity = 1;
                } else {
                    console.error("Element has no style property:", section);
                }
            }
        });
    }

    function isElementInViewport(el) {
        if (!el) {
            console.error("Element is null.");
            return false;
        }

        try {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= windowHeight &&
                rect.right <= windowWidth
            );
        } catch (e) {
            console.error("Failed to get element's bounding client rect:", e);
            return false;
        }
    }

    document.addEventListener('scroll', fadeInSections);
    fadeInSections()});
