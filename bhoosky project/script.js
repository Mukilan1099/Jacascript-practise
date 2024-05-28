// selecting popup-nox,overlay,button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

// selecting cancel
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// selecting container,add-book,book-title,book-author,book-description
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var bookdescription = document.getElementById("book-description");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  // div.innerHTML = `<h1>${booktitle.value}</h1>`;
  div.innerHTML = `<h2>${booktitle.value}</h2>
  <h5>${bookauthor.value}</h5>
  <p>
    ${bookdescription.value}
  </p>
  <button>delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
function deletebook(event) {
  event.target.parentElement.remove();
}
