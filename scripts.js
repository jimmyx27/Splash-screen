const chaser = document.getElementById("chaser");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  chaser.style.left = `${clientX}px`;
  chaser.style.top = `${clientY}px`;
};
