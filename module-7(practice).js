// console.log(navigator);

// const p = document.querySelector(".text");
// console.log(p);

// let body = document.querySelector("body");

// let arr = [];

// for (let index = 0; index < arr.length; index++) {
//   const title = document.createElement("h3");

//   title.textContent = "TITLE";
//   title.style.color = "brown";

//   body.append(title);
// }

// for (let index = 0; index < 10; index += 1);

// // let body = document.querySelector("body");

// const image = document.createElement("img");

// image.getAttribute = (src. `https://picsum.photos/id/${Math.floor(
//     Math.random() * 255
// )}/200/300`);

// body.append();

// // image.getAttribute = `https://picsum.photos/id/${Math.floor(
// //     Math.random() * 255
// // )}/200/300`;

// ================================================

const body = document.querySelector("body");
// const btn = document.querySelector(".btn");

// btn.addEventListener("mousedown", () => {
//   body.style.backgroundColor = "teal";
// });

// btn.addEventListener("click", () => {
//   body.style.backgroundColor = "white";
// });
// ================================================

// const body = document.querySelector("body");

// for (let i = 0; i < 3; i += 1);

// const btn = document.createElement("button");
// btn.classList.add("colored");
// body.append(btn);
// const randomColor = `rgb(${Math.round(Math.random() * 255)} , ${Math.round(
//   Math.random() * 255
// )} , ${Math.round(Math.random() * 255)})`;

// btn.textContent = "COLOR";
// btn.style.background = randomColor;
// btn.style.margin = "50px";

// const buttonsList = document.querySelectorAll(".colored");
// const btn1 = buttonsList[0];
// const btn2 = buttonsList[1];
// const btn3 = buttonsList[2];

// btn1.addEventListener(
//   "click",
//   (event) => (body.style.background = event.target.style.background)
// );

// btn2.addEventListener(
//   "click",
//   (event) => (body.style.background = event.target.style.background)
// );

// btn3.addEventListener(
//   "click",
//   (event) => (body.style.background = event.target.style.background)
// );

// ================================================

// const body = document.querySelector("body");

// for (let i = 0; i < 10; i += 1) {
//   const cube = document.createElement("div");
//   cube.classList.add("cube");
//   cube.textContent = i;
//   body.append(cube);

//   //   cube.addEventListener("click", () => {
//   //     alert(cube.textContent);
//   //   });

//   body.addEventListener("click", (e) => {
//     alert(e.target.textContent);
//   });
// }

// const body = document.querySelector("body");

// window.addEventListener("scroll", (e) => {
//   window.scrollY > 200 && window.scrollY < 210
//     ? (body.style.background = "violet")
//     : window.scrollY > 300 && window.scrollY < 310
//     ? (body.style.background = "blue")
//     : "";
// });

// window.addEventListener("scroll", (e) => {
//   window.scrollY > 120 && window.scrollY < 150
//     ? (body.style.backgroundColor = "blue")
//     : window.scrollY > 300 && window.scrollY < 310
//     ? (body.style.backgroundColor = "yellow")
//     : "";
//   window.scrollY > 400 && window.scrollY < 460
//     ? (body.style.backgroundColor = "orange")
//     : "";
// });

// const body = document.querySelector("body");

// body.addEventListener("click", (e) => {
//   console.log(e);
//   body.innerHTML += `<div class="circle" style="top:${e.clientY}px; left:${e.clientX}px">💩</div>`;
// });

// ===============================================================

// // JavaScript

// // BOM, browser object model
// // Navigator

// // DOM,

// // API

// console.log(document)

// let vova = {
//     name: 'Vova',
//     age: 30
// }

// console.log(vova.name)

// vova.name = 'Sara';
// console.log(vova.name)

// document.querySelector('p')
// document.querySelectorAll('.my-class')

{
  /* <h1 class="title" id="heading">Heading</h1> */
}
// let h1 = document.querySelector('h1')
// h1 = document.querySelector('#heading')
// h1 = document.querySelector('.title');
// console.log(h1)

{
  /* <p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */
}

// let p = document.querySelector('p');
// p = document.querySelector('.text');
// console.log(p)

{
  /* <ul class="list">
    <li class="list__item">Item_1</li>
    <li class="list__item">Item_2</li>
    <li class="list__item">Item_3</li>
    <li class="list__item">Item_4</li>
</ul> */
}
{
  /* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let ul = document.querySelectorAll('ul');
// let li = ul[0].querySelectorAll('li');
// console.log(ul[0])
// console.log(li)
// // console.log(ul[1])

{
  /* <p class="text">
Lorem ipsum dolor sit <span>box</span> amet consectetur adipisicing
elit. Ratione ex ab, nulla nemo molestiae incidunt placeat quo
mollitia illo rerum cupiditate magni. Totam explicabo quas illum,
soluta cumque mollitia non!
</p>
<p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */
}

// let p = document.querySelectorAll('p')[1].style.background = 'green';
// let p = document.querySelectorAll('p');
// p[1].style.background = 'blue';
// console.log(p);

// let heading = document.getElementById('heading');
// let paragraph = document.getElementsByClassName('text');  // HTML Collection
// let p = document.querySelectorAll('p'); // NodeLIst

// Array.from(paragraph).forEach((elem) => {
//     console.log(elem)

// }
// )

// let html = [...paragraph];
// html.forEach((elem) => {
//     console.log(elem)

// }
// )

// p.forEach((elem) => {
//     console.log(elem)

// })

// console.log(paragraph);
// console.log(p)

// Traversing dom

{
  /* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let list = document.querySelectorAll('ul');
// console.log(list[1]);

// Manipulating elements

// font-size: 30px;
// fontSize: 30

// 1. Style
// document.body.style.background = 'blue';
// document.querySelector('.text').style.background = 'green'
// document.querySelector('.text').style.fontSize = '26px'

// 2. Classes
// let list = document.querySelectorAll('ul');
// // list[1].className
// list[1].classList.add('js-hook-list')
// list[1].classList.remove('js-hook-list')
// console.log(list[1]);

// 3. setAttribute, remoweAttibute
{
  /* <ul class="list" id="my-list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let list = document.querySelectorAll('ul');
// // list[1].setAttribute('id', 'js-my-list');
// // list[1].removeAttribute('id');
// // list[1].id = 'new-way';

// let img = document.querySelector('img');
// // img.alt = 'cat'
// // img.width = '250';

// img.setAttribute('alt', 'dog');
// img.removeAttribute('alt');
// img.id = 'sdVfadrfgrgRgrdgdrh'
// console.log(img)

// let h2 = document.querySelector('h2');
// // h2.innerText = 'Vova';
// // h2.innerHTML = '<span>COPY</span>';

// console.log(h2.innerText);

// 4. Creating elements

// let catImg = document.createElement('img');
// // let body = document.querySelector('body');
// let list = document.querySelectorAll('ul');

// catImg.setAttribute('src', 'https://loremflickr.com/640/360');
// catImg.setAttribute('alt', 'cat-image');
// catImg.getAttribute('alt');

// // catImg.src = ''
// // catImg.alt = ''
// // body.appendChild(catImg);
// // list[1].append(catImg);
// // list[1].prepend(catImg);
// // list[1].after(catImg);
// list[1].before(catImg);

// Events
// let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     // console.log('Click')
//     console.log(event.target);
//     // console.log(event.type);
//     // console.log(event);

//     console.log(this)

// })

// btn.addEventListener('focus', function (event) {
//     // console.log('Click')
//     // console.log(event.target);
//     console.log(event);
//     // console.log(event.type);
//     // console.log(event);

//     // console.log(this)

// })

// window.addEventListener('load', (e) => {
//     console.log(e);
// }
// );

// window.addEventListener('resize', (event) => {
//     console.log(event.target);
// }
// )

// let a = document.querySelector('a').addEventListener('click', (event) => {
//     console.log('click')
//     // event.preventDefault();

// }
// )

// ================================================================

// ==============SUBMIT==========
// let form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target[0].value);
// });

// ==============FOCUS==========

// input.addEventListener("focus", () => {
//   console.log("INPUT IS IN FOCUS");
// });

// ==============BLUR==========
// input.addEventListener("blur", () => {
//   console.log("INPUT HAS BEEN BLURED");
// });

// ==============INPUT==========
// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// ==============CHANGE==========
// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// ======KeyboardEvent.key и KeyboardEvent.code========
// window.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// ======================================================

// let card = document.querySelector(".card");

// const cardChange = (e) => {
//   e.preventDefault();
//   console.log(e.target.nodeName);

//   e.target.nodeName === "IMG"
//     ? (e.target.src = "https://picsum.photos/200/300")
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "orange")
//     : e.target.nodeName === "H1"
//     ? (e.target.textContent = "CHUPACABRA")
//     : "";
// };

// card.addEventListener("click", cardChange);

// let card = document.querySelector(".card");

// const cardChange = (e) => {
//   e.preventDefault();
//   console.log(e.target.nodeName);

//   e.target.nodeName === "IMG"
//     ? (e.target.src = "https://picsum.photos/id/1025/200/300")
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "orange")
//     : e.target.nodeName === "H2"
//     ? (e.target.textContent += " TITLE HAS BEEN CHANGED")
//     : e.target.nodeName === "BUTTON"
//     ? (e.target.parentNode.style.overflow = "visible")
//     : " ";
// };

// card.addEventListener("click", cardChange);

// ============THROTTLE/DEBOUNCE==============
// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll event handler invocation every 300ms.");
//   }, 1000)
// );
// ____________________________
// input.addEventListener(
//   "input",
//   _.debounce((e) => {
//     console.log(e.target.value);
//   }, 300)
// );
// ====================================================================

// import gallery from "./gallery.js";

// gallery.map((el) => {
//   body.innerHTML += `<img width ='300' src='${el.src}' data-src='${el.data}' class='imgs' id='${el.id}'>`;
// });

// window.onload = () => {
//   const options = {
//     root: null,

//     rootMargin: "0px",

//     threshold: 1,
//   };

//   const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//       entry.isIntersecting ? (entry.target.src = entry.target.dataset.src) : "";
//     });
//   }, options);

//   let images = document.querySelectorAll(".imgs");

//   images.forEach((el) => {
//     observer.observe(el);
//   });
// };
