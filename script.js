/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-5

      Author: Nazia Ashraf
      Date: 2/17/2023

      Filename: script.js
   */
      "use strict";
      var delivInfo = {};
      var delivSummary = document.getElementById("deliverTo");
      var foodInfo = {};
      var foodSummary = document.getElementById("order");

      //function to process delivery info
      
      function processDeliveryInfo(){
         //local variable
         var prop;
         
         delivInfo.name = document.getElementById("nameinput").value;
         delivInfo.addr = document.getElementById("addrinput").value;
         delivInfo.city = document.getElementById("cityinput").value;
         delivInfo.email = document.getElementById("emailinput").value;
         delivInfo.phone = document.getElementById("phoneinput").value;
         
         for (prop in delivInfo)
         {
            delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
         }
      }

      function previewOrder() {
         processDeliveryInfo();
         processFood();
         document.getElementsByTagName("section")[0].style.display = "block";
      }

      

      function processFood(){
         var prop;
         var crustOpt = document.getElementById("crust"); 
         var toppings = 0;
         var toppingBoxes = document.getElementsByTagName("toppings");
         var instr = document.getElementById("instructions").value;

         //radio box checked for crust
         if (document.getElementById('thin').checked) {
            foodInfo.crust = document.getElementById('thin').value;
         } else if (document.getElementById('thick').checked) {
            foodInfo.crust = document.getElementById('thick').value;
         }

         foodInfo.size = document.getElementById("size").value;

         for(var i = 0; i < toppings.length; i++) {
            if(toppingBoxes[i].checked) {
               toppingBoxes = toppingBoxes[i].value + 1;
               foodInfo = toppingBoxes + toppingBoxes[i].value;
            }
         }
         

         foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
         foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
         foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
         foodSummary.innerHTML += "<ul>"; 
         for (var i = 1; i < 6; i++) {
            if (foodInfo["topping" + i]) { 
               foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
            }
         }
         foodSummary.innerHTML += "</ul>"; 
         foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions; 
         document.getElementById("order").style.display = "block";
      }

      function createEventListener() {
         var previewBtn = document.getElementById("previewBtn");
         if (previewBtn.addEventListener) {
            previewBtn.addEventListener("click", previewOrder, false);
         } else if (previewBtn.attachEvent) {
            previewBtn.attachEvent("onclick", previewOrder);
         }
      }

      if (window.addEventListener) { 
         window.addEventListener("load", createEventListener, false);
      } else if (window.attachEvent) {
         window.attachEvent("onload", createEventListener);
      }