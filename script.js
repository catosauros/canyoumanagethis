let sections = document.querySelectorAll(".pagesection");
let buttons = document.querySelectorAll(".butn");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      let color = "";
    
      buttons.forEach(button => {
        button.style.background = "transparent";
      });
      
      if (id === "welcome") {
        color="white";
        buttons[0].style.background = color;
      } else if (id === "managers") {
        color="black";
        buttons[1].style.background = color;
      } else if (id === "guests") {
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
