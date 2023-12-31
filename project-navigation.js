
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

(function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
                $(this)
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $("#timeline-1").timeline();
  
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
// JavaScript code for handling arrow key movement
const wrapper = document.querySelector(".moving-pictures-wrapper");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveBackground(-10); // Adjust the value to control the movement speed
    } else if (event.key === "ArrowRight") {
        moveBackground(10); // Adjust the value to control the movement speed
    }
});

function moveBackground(amount) {
    wrapper.scrollLeft += amount;
}
