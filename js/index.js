import { crateCard } from "./function.js";
let wrapper = document.querySelector("#wrappers");
let loader = document.querySelector("#loader");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://strapi-store-server.onrender.com/api/products", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      data.data.length &&
        data.data.forEach(function (user) {
          let car = crateCard(user);
          wrapper.innerHTML += car;
        });
      let card = document.querySelectorAll(".wrapper");
      card.length &&
        card.forEach(function (event) {
          event.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            window.location.assign(
              `http://127.0.0.1:5500/page/datel.html?id="${id}"`
            );
          });
        });
    })
    .catch((er) => {
      console.log(er);
    })
    .finally(function () {
      loader.remove();
    });
});
