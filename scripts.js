    let splashScreen = document.querySelector(".splash");
    splashScreen.addEventListener("click", () => {
      splashScreen.style.opacity = 0;
      setTimeout(() => {
        splashScreen.classList.add("hidden");
      }, 610);
    });

    let dog = document.querySelector(".dog");
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      dog.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
