const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");

// box.style.backgroundColor = "palevioletred";
// box.style.width = "500px";

let num = "555";

box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = "90%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "yellow";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "yellow";
});

const div = document.createElement("div");

// const text = document.createTextNode("Вам всім піздєц");

div.classList.add("black");
wrapper.append(div);
// wrapper.appendChild(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2])

// circles[0].remove();
// wrapper.removeChild(hearts[1])

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>ЖОПА</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('beforeend', '<h2>Черная</h2>')