function downloadCV() {
    const link = document.createElement('a');
    link.href = 'pdfs/EUGENE_VAN_DER_MERWE_CV.pdf'; // Path to your CV file
    link.download = 'EUGENE_VAN_DER_MERWE_CV.pdf'; // Filename to be downloaded
    link.click();
}
/*
// Function to check if an element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
 
// Function to add the 'section-visible' class when in view
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('section-visible');
        }
    });
}

// Attach the animateOnScroll function to scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // To trigger on page load as well
 */