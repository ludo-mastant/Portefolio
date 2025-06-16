// Animation d'apparition au scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Effet d’apparition initial
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease-out";
});

// 
function toggleinternships() {
    const internshipsSection = document.getElementById('internships');
    if (internshipsSection.style.display === 'none') {
      internshipsSection.style.display = 'block';
    } else {
      internshipsSection.style.display = 'none';
    }
  }
