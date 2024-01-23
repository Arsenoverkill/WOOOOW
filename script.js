let block = document.querySelector(".block");
let btnStart = document.querySelector(".up");
let lvl1 = document.querySelector(".lvl-1");
let lvl2 = document.querySelector(".lvl-2");
let lvl3 = document.querySelector(".lvl-3");
let lvls = document.querySelector(".lvls");
let btnStop = document.querySelector(".stop");
let game2 = document.querySelector(".game-2");
let again = document.querySelector(".again");
let loser = document.querySelector(".loser");
let number = document.createElement("h1");

let obj = {
  num: 0,
};
number.classList = "number";
number.innerHTML = obj.num;

again.addEventListener("click", () => {
  location.reload();
});
btnStart.addEventListener("click", () => {
  btnStart.style.display = "none";
  game2.style.display = "none";
  lvls.style.display = "flex";
});
game2.addEventListener("click", () => {
  btnStart.style.display = "none";
  game2.style.display = "none";
  btnStop.style.display = "none";
});
btnStop.addEventListener("click", () => {
  btnStart.style.display = "block";
  btnStop.style.display = "none";
  location.reload();
});

function randomMargin() {
  let res = "px";
  let str = Math.floor(Math.random() * 1450);
  return str + res;
}
function randomMarginTop() {
  let res = "px";
  let str = Math.floor(Math.random() * 500);
  return str + res;
}

function Bubble() {
  let blocks = document.createElement("div");
  blocks.style.width = "50px";
  blocks.style.height = "50px";
  blocks.style.borderRadius = "50%";
  blocks.style.border = "solid 2px red";
  blocks.style.background = "none";
  blocks.style.position = "absolute";
  blocks.style.boxShadow = "0 0 5px 2.3px red";
  blocks.style.margin = ` ${randomMarginTop()} 0 0 ${randomMargin()}`;

  block.append(blocks);

  blocks.addEventListener("click", () => {
    blocks.style.display = "none";
    number.innerHTML = ++obj.num;
    block.append(number);
    console.log(number);
  });
}
function Bubble2() {
  let blocks = document.createElement("div");
  blocks.style.width = "50px";
  blocks.style.height = "50px";
  blocks.style.borderRadius = "50%";
  blocks.style.border = "solid 2px red";
  blocks.style.background = "none";
  blocks.style.position = "absolute";
  blocks.style.boxShadow = "0 0 5px 2.3px red";
  blocks.style.margin = ` ${randomMarginTop()} 0 0 ${randomMargin()}`;

  block.append(blocks);

  blocks.addEventListener("click", () => {
    blocks.style.display = "none";
    number.innerHTML = ++obj.num;
    block.append(number);
  });
}
function Bubble3() {
  let blocks = document.createElement("div");
  blocks.style.width = "50px";
  blocks.style.height = "50px";
  blocks.style.borderRadius = "50%";
  blocks.style.border = "solid 2px red";
  blocks.style.background = "none";
  blocks.style.position = "absolute";
  blocks.style.boxShadow = "0 0 5px 2.3px red";
  blocks.style.margin = ` ${randomMarginTop()} 0 0 ${randomMargin()}`;

  block.append(blocks);

  blocks.addEventListener("click", () => {
    blocks.style.display = "none";
    number.innerHTML = ++obj.num;
    block.append(number);
  });
}
function Bubble4() {
  let blocks = document.createElement("div");
  blocks.style.width = "50px";
  blocks.style.height = "50px";
  blocks.style.borderRadius = "50%";
  blocks.style.border = "solid 2px red";
  blocks.style.background = "none";
  blocks.style.position = "absolute";
  blocks.style.boxShadow = "0 0 5px 2.3px red";
  blocks.style.margin = ` ${randomMarginTop()} 0 0 ${randomMargin()}`;

  block.append(blocks);

  blocks.addEventListener("click", () => {
    blocks.style.display = "none";
    number.innerHTML = ++obj.num;
    block.append(number);
  });
  setTimeout(() => {
    if (blocks.style.display === "none") {
    } else {
      loser.style.display = "flex";
      loser.style.objectFit = 'blur(6px)'
    }
  }, 2000);
}

lvl1.addEventListener("click", () => {
  block.append(number);
  lvls.style.display = "none";
  btnStop.style.display = "block";
  setInterval(() => {
    Bubble();
  }, 1500);
  setInterval(() => {
    if (obj.num < "10") {
      alert("К сожелению вы проиграли");
      location.reload();
    } else {
      alert("Поздровляем Вы выйграли!!!");
      location.reload();
    }
  }, 16500);
});
lvl2.addEventListener("click", () => {
  block.append(number);
  lvls.style.display = "none";
  btnStop.style.display = "block";
  setInterval(() => {
    Bubble2();
  }, 1000);
  setInterval(() => {
    if (obj.num < "10") {
      alert("К сожелению вы проиграли");
      location.reload();
    } else {
      alert("Поздровляем вы выйграли!!!");
      location.reload();
    }
  }, 11500);
});
lvl3.addEventListener("click", () => {
  block.append(number);
  lvls.style.display = "none";
  btnStop.style.display = "block";
  setInterval(() => {
    Bubble3();
  }, 600);
  setInterval(() => {
    if (obj.num < "10") {
      alert("К сожелению вы проиграли");
      location.reload();
    } else {
      alert("Поздровляем вы выйграли!!!");
      location.reload();
    }
  }, 7500);
});

game2.addEventListener("click", () => {
  block.append(number);
  lvls.style.display = "none";
  btnStop.style.display = "block";
  setInterval(() => {
    Bubble4();
  }, 1000);
});
