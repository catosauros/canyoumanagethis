let sections = document.querySelectorAll(".pagesection");
let buttons = document.querySelectorAll(".butn");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id; // Get the section id (like "section1")

      let color = "";
    
      buttons.forEach(button => {
        button.style.background = "transparent";
      });
      // Now set color based on section ID manually
      if (id === "first") {
        color="white";
        buttons[0].style.background = color;
      } else if (id === "second") {
        color="black";
        buttons[1].style.background = color;
      } else if (id === "third") {
        color="blue";
        buttons[2].style.background = color;
      }

      buttons.forEach(button => {
        button.style.borderColor = color;
      });

      
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});
