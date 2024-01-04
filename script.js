//finding the element

// const form = document.querySelector("form");
// const name = document.querySelector(".form_info #name");
// const email = document.querySelector(".form_info #email");
// const password = document.querySelector(".form_info #password");

// form.addEventListener("submit", formHandler);

// function formHandler(e) {
//   e.preventDefault();

//   const userInfo = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   };

//   // userInfo.name = name.value;
//   // userInfo.email = email.value;
//   // userInfo.password = password.value;

//   console.log(userInfo);
// }

//end of finding the element

// const textarea = document.querySelector("textarea");
// // textarea.addEventListener("keydown", function () {
// //   console.log("keydown");
// // });
// // textarea.addEventListener("keypress", function () {
// //   console.log("keypress");
// // });
// textarea.addEventListener("keyup", function (e) {
//   console.log("e.shiftKey");
// });

const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("Text", e.target.id);
});

div.addEventListener("dragover", function (e) {
  e.preventDefault();
});

div.addEventListener("drop", function (e) {
  let id = e.dataTransfer.getData("Text");
  // console.log(id);
  div.appendChild(document.getElementById(id));
});
