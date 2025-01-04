document.addEventListener('DOMContentLoaded', function () {
    // Set default text from a specific anchor
    const defaultAnchor = document.getElementById('under'); // Set this to your preferred default
    const paragraph = document.getElementById('displayParagraph');
    paragraph.textContent = defaultAnchor.getAttribute('data-text');

    // Add event listeners for hover effect
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('mouseenter', function () {
            paragraph.textContent = this.getAttribute('data-text');
        });
    });
});
