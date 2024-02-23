// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

const modal = document.getElementById("myModal");

const add = document.getElementById("add");

const cancel = document.getElementById("cancel");

add.onclick = () => {
  modal.style.display = "flex";
}

cancel.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
