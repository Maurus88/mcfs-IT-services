const images = document.querySelectorAll(".gallery img");
let activeImage = 0;

images.forEach((image, index) => {
  image.addEventListener("mouseenter", () => {
    activeImage = index;
    image.style.transform = "scale(1.2)";
    image.style.zIndex = "1";
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    image.style.zIndex = "0";
  });

  image.addEventListener("mousemove", (event) => {
    const { offsetX: x, offsetY: y } = event;
    const { offsetWidth: width, offsetHeight: height } = image;
    const move = 15;
    const xMove = (x / width * (move * 2)) - move;
    const yMove = (y / height * (move * 2)) - move;
    image.style.transform = `scale(1.2) translate(${xMove}px, ${yMove}px)`;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    activeImage++;
    if (activeImage >= images.length) {
      activeImage = 0;
    }
  } else if (event.key === "ArrowLeft") {
    activeImage--;
    if (activeImage < 0) {
      activeImage = images.length - 1;
    }
  }

  images.forEach((image, index) => {
    if (index === activeImage) {
      image.style.transform = "scale(1.2)";
      image.style.zIndex = "1";
    } else {
      image.style.transform = "scale(1)";
      image.style.zIndex = "0";
    }
  });
});
