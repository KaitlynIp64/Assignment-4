// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-4/sw.js", {
    scope: "/Assignment-4/",
  });
}

/**
 * Input
 */
function orderPizza() {
  var price = 0;
  var topping = 0;
  var total = 0;
  var tax = 0;

  var size1 = document.getElementById("size1");
  var size2 = document.getElementById("size2");

  if (size1.checked == true) {
    price = 6.0;
    document.getElementById("s_result").innerHTML = "Large";
  } else if (size2.checked == true) {
    price = 10.0;
    document.getElementById("s_result").innerHTML = "Extra Large";
  }

  document.getElementById("p_result").innerHTML = "$ " + price;

  var topping1 = document.getElementById("topping1");
  var topping2 = document.getElementById("topping2");
  var topping3 = document.getElementById("topping3");
  var topping4 = document.getElementById("topping4");

  if (topping1.checked == true) {
    topping = 1.0;
    document.getElementById("t_options").innerHTML = "1 Topping";
  }

  if (topping2.checked == true) {
    topping = 1.75;
    document.getElementById("t_options").innerHTML = "2 Toppings";
  }

  if (topping3.checked == true) {
    topping = 2.5;
    document.getElementById("t_options").innerHTML = "3 Toppings";
  }

  if (topping4.checked == true) {
    topping = 3.35;
    document.getElementById("t_options").innerHTML = "4 Toppings";
  }

  document.getElementById("total_result").innerHTML = "$ " + topping;

  tax = (price + topping) * 0.13;
  total = tax + (price + topping);

  document.getElementById("total_result").innerHTML =
    "Your Current Total is $ " + total.toFixed(2);
}
