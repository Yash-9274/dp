
document.addEventListener('DOMContentLoaded', function() {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const projectCards = document.querySelectorAll('.project-card');

    let currentCardIndex = 0;

    prevArrow.addEventListener('click', function() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCardVisibility();
        }
    });

    nextArrow.addEventListener('click', function() {
        if (currentCardIndex < projectCards.length - 3) {
            currentCardIndex++;
            updateCardVisibility();
        }
    });
    // Add this script to your existing JavaScript

$(document).ready(function() {
    // Animate timeline items on scroll
    $(window).scroll(function() {
        $(".timeline-item").each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass("animate");
            }
        });
    });
});


    function updateCardVisibility() {
        projectCards.forEach(function(card, index) {
            if (index >= currentCardIndex && index < currentCardIndex + 3) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    updateCardVisibility();
    
});
