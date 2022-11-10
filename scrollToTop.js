// ==UserScript==
// @name         Scroll To Top
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       北岛没有海
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  function createStyle() {
      var style = document.createElement("style");
      style.type = "text/css";
      var text = document.createTextNode(`
    body>#luoTopBtn {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      display: none;
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      font-size: 18px;
      border: none;
      outline: none;
      background: red;
      color: white;
      cursor: pointer;
      padding: 15px;
      border-radius: 4px;
    }

    body>#luoTopBtn:hover {
      background-color: #555;
    }
  `);
      style.appendChild(text);
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(style);
  }

  let mybutton = {}
  function createBtn() {
      var node=document.createElement("button");
      var textnode=document.createTextNode("Top");
      node.appendChild(textnode);
      node.id = "luoTopBtn"
      node.title="Go to top"
      node.onclick = topFunction
      const div = document.createElement('div')
      console.log(document.getElementsByTagName('body'))
      document.getElementsByTagName('body')[0].appendChild(node)
      mybutton = document.getElementById("luoTopBtn");
  }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  function topFunction() {
      console.log('top')
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  createStyle()
  createBtn()
})();