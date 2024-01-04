let animationContainer = document.querySelector('.animated-title');
let textData = animationContainer.getAttribute('aria-label');

function splitWords() {
  let splitedText = textData.split(' ');
  
  splitedText.forEach(function(word, index) {
    if (word) {
      let span = document.createElement('span');
      span.classList.add('animated-word');
      span.setAttribute('data-text', word);
      animationContainer.appendChild(span);
    }

    if (index < splitedText.length - 1) {
      let spaceSpan = document.createElement('span');
      spaceSpan.innerHTML = ' ';
      animationContainer.appendChild(spaceSpan);
    }
  });

  splitLetters();
}

function splitLetters() {
  let animatedWords = document.querySelectorAll('.animated-word');
  animatedWords.forEach(function(wordElement) {
    wordElement.getAttribute('data-text').split('').forEach(function(char) {
      char = char === ' ' ? '&#32;' : (char === '&' ? '&amp;' : char);
      let span = document.createElement('span');
      span.classList.add('animated-element');
      span.setAttribute('aria-hidden', 'true');
      span.innerHTML = char;
      wordElement.appendChild(span);
    });
    animate(wordElement);
  });
}

function animate(wordElement) {
  let wordCount = wordElement.getAttribute('data-text').length;
  wordElement.style.opacity = 1;
  wordElement.classList.add('animate');
}

function replay() {
  let animatedWords = document.querySelectorAll('.animated-word');
  animatedWords.forEach(function(wordElement) {
    wordElement.classList.remove('animate');
    wordElement.style.opacity = 0;
    setTimeout(() => {
      animate(wordElement);
    }, 500);
  });
}

// Initialize animation on page load
window.onload = splitWords;

// Project Showcase
document.addEventListener('DOMContentLoaded', function() {
  var filterButtons = document.querySelectorAll('.filter-bar .btn');
  
  filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(function(button) {
              button.classList.remove('active');
          });
          
          // Add active class to clicked button
          this.classList.add('active');
          
          var filterValue = this.getAttribute('data-filter');
          var projectItems = document.querySelectorAll('.project-item');
          
          projectItems.forEach(function(item) {
              if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});


// nav bar
let lastScrollTop = 0;
navbar = document.getElementById('mainNavbar');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop){
    // Scroll Down
    navbar.style.top = '-60px'; // Adjust this value to the height of your navbar
  } else {
    // Scroll Up
    navbar.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);


// animated elements

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#About');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.3 });

  observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', () => {
  const expertiseCards = document.querySelectorAll('.card');

  expertiseCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease-in-out';
      card.style.borderColor = '#77FF85'; // Change to desired hover border color
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.borderColor = ''; // Reset border color
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 }); // Adjust threshold as needed

  projectItems.forEach(item => {
    observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.querySelector('#Contact');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  observer.observe(contactSection);
});


