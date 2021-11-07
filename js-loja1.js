"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log(document.querySelectorAll(".single-product"));

  var kart = document.querySelectorAll(".cart");
  let price = [];
  for (let i = 0; i < kart.length; i++) {
    document
      .querySelectorAll(".cart")
      [i].addEventListener("click", function () {
        price.push(
          Number(
            document
              .querySelectorAll(".price-amount")
              [i].textContent.replace("R$ ", "")
          )
        );
        console.log(price);
      });
  }
});
