// JS Code //
/*
//bind()  is used to bind an object to a function so that when you call the object it's like calling the function

function func(taxPercent=0.1) {   //thats the default value which is assigned if no value was passed
  let a = 2;
  a *= taxPercent;
  console.log(a);
  return a;
}

let product = { pname: "str", price: num, ptype: "str" };
product.pname = "p1";
product.price = 25.5;
product.ptype = "t1";
product.purchaseState = true;
console.log(product);

var x = "str", y = Boolean, z = undefined, m = BigInt, n = Symbol, o = null;
o = new Object(); 
console.log(typeof o);
let undefv, v1 = 11, v2 = 6;
v2 = func();
console.log(`v2 is equal ${v2}`); 

console.log(math.random());  0 <= x < 1
console.log(!this);  // = console.log(false); (false = 0 = '' = NaN = undefined = null)
console.log(5 == '5.00' && 5 === 5);
console.log(5 != '5.00' || 5 !== 5);

if (true) {
  'true';
} else {
  'false';
}
//Equivalent to : true ? 'true' : 'false';
let x = 10;
const x = true ? 'yes' : 'no';   , therefore x = 'yes', 
false && console.log('print me');     , console prints falsy
const x = 5 && 'hey'; console.log(x); , console prints hey
const currency = undefined || 'USD';  , console prints USD

// JS Object
let product = {
  pname: "str",
  price: "num",
  ptype: "str",
  "pname-x": "p1-x",
  rating: {
    stars: "num",
    count: "num",
  },
  objFunc: function func() {
    console.log("i'm running");
  },
};
product.pname = "p1";
product.price = 25.5;
product.ptype = "t1";
product.purchaseState = true;
product.rating.stars = 4.32;
product.rating.stars = (product.rating.stars * 100 - 100) / 100;
delete product.ptype;
console.log(product);
console.log(product["pname"]);
console.log(product.rating.stars);
product.objFunc();
product.objFunc = 5;
console.log(product.objFunc);

console.log(localStorage.getItem("product")); //Should be converted with JSON.parse()
let jp1 = JSON.parse(localStorage.getItem("product")) || {
  pname: "str",
  price: "num",
  ptype: "str",
  pnameX: "p1X",
  rating: {
    stars: "num",
    count: "num",
  },
};
//jp1 = false ? "yes" : "no"; = //if (!jp1) { };
console.log(jp1);
//JSON = JS Object Notation (it's a universal syntax meaning it's understood in all programming languages and it's used to store data & send it to another computer)
let product2 = {
  pname: "str2",
  price: "num2",
  ptype: "str2",
  pnameX: "p1X2",
  rating: {
    stars: "num2",
    count: "num2",
  },
};
let jp = JSON.stringify(product2);

console.log(jp); //JSON objects can't contain functions
console.log(JSON.parse(jp));
localStorage.removeItem("product");
//LocalStorage - Supports strings only (meaning one should stringify objects before storing)
localStorage.setItem("product", jp);
console.log(jp); //check the effect by adjusting product2 with live server

'hello'.length;
'hello'.toUpperCase();

*/

let nameX,
  passX,
  mailX,
  radX,
  optX,
  cheX = Boolean;
console.log("let's code");

// JS Object
let product = {
  pname: "str",
  price: "num",
  ptype: "str",
  "pname-x": "p1-x",
  rating: {
    stars: "num",
    count: "num",
  },
  objFunc() {
    // : function func() {      (shorthand method)
    console.log("i'm running");
  },
};
product.pname = "p1";
product.price = 25.5;
product.ptype = "t1";
product.purchaseState = true;
product.rating.stars = 4.32;
product.rating.stars = (product.rating.stars * 100 - 100) / 100;
delete product.ptype;
console.log(product);
console.log(product["pname"]);
console.log(product.rating.stars);
product.objFunc();
product.objFunc = 5;
console.log(product.objFunc);

console.log(localStorage.getItem("product")); //Should be converted with JSON.parse()
let jp1 = JSON.parse(localStorage.getItem("product")) || {
  pname: "str",
  price: "num",
  ptype: "str",
  pnameX: "p1X",
  rating: {
    stars: "num",
    count: "num",
  },
};
//jp1 = false ? "yes" : "no"; = //if (!jp1) { };
console.log(jp1);
//JSON = JS Object Notation (it's a universal syntax meaning it's understood in all programming languages and it's used to store data & send it to another computer)
let product2 = {
  pname: "222",
  price: "250",
  ptype: "str2",
  pnameX: "p1X2",
  rating: {
    stars: "num2",
    count: "num2",
  },
};
let { pname, price } = product2;
price = Number(price);
pname = String(pname);
pname -= -2;
console.log(pname, price);
const obj1 = { pname };
console.log(obj1);

let jp = JSON.stringify(product2);
console.log(jp); //JSON objects can't contain functions
console.log(JSON.parse(jp));
localStorage.removeItem("product");
//LocalStorage - Supports strings only (meaning one should stringify objects before storing)
localStorage.setItem("product", jp);
console.log(jp); //check the effect by adjusting product2 with live server

console.log(window.document);
//DOM = Document Object Model (LINKED TO THE WEBPAGE)
//console.log(document.body.innerHTML); console.log(document.querySelector(".clink").innerHTML);  document.body.innerHTML = '<button class="clink">LOL</button>';  console.log(document.title);
document.title = "Zozz";
//console.log(document.querySelector(".ispansss").replaceWith("replaced"));
let resetButton = document.querySelector(".clink");
console.log(resetButton.innerText);
/* resetButton.classList.remove("clink");
resetButton.classList.add('cclink')
resetButton.classList.replace("clink", "cclink"); */

const myArr = [
  // Arrays (it represents a reference same as object)
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9, 11],
];
/* myArr.push(100);
const myArr2 = myArr.slice(); // slice means copying the values of myArr other than the reference
const [fValue, sValue] = [1, 2, 3];
myArr.splice(0, 1);
myArr.shift();
console.log(myArr[0].length); */
console.log(myArr);

/* while (myArr.length >= 1) {
  // While loop
  console.log(myArr[myArr.length - 1]);
  myArr.length -= 1;
}
console.log(myArr); */

/* const arrLen = myArr.length;
for (let i = 0; i <= arrLen; i++) {
  // For loop  (arrLen-1 = array max index)
  console.log(myArr);
  if (myArr.length) {
    myArr.length -= 1;
  } else {
    break;
  }
  if (myArr.length % 3 === 0) {
    console.log("i'm divisible by 3");
    continue;
  }
} */
let txt = document.querySelector("#txt"),
  imgdiv = document.querySelector("#imgdiv"),
  ch2 = document.querySelector("#ch2"),
  r1 = document.querySelector("#r1"),
  r2 = document.querySelector("#r2"),
  btn = document.querySelector(".cclink");

function imgFunc() {
  if ((txt.value === "Ali") & (ch2.checked === true)) {
    imgdiv.innerHTML =
      "<div><img src='pig glasses.avif' width='50%' /></div><div><img src='monkey.avif' width='50%' /></div>";
  } else if ((txt.value === "Nour") & (ch2.checked === true)) {
    imgdiv.innerHTML =
      "<div><img src='pig selfie.webp' width='50%' /></div><div><img src='monkey selfie.webp' width='50%' /></div>";
  } else if (ch2.checked === false) {
    alert("سيدك وكبيرك يا حيوان");
  }
}
