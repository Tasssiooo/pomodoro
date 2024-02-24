import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        this.modal = document.querySelector('.modal');
    }

    open() {
        if (this.modal.style.display !== "flex") {
            this.modal.style.display = "flex";
        }
    }

    close(event) {
        if (event.detail.success) {
            this.modal.style.display = "none";
            window.location.pathname = "/";
        }
    }

    cancel() {
        if (this.modal.style.display === "flex") {
            this.modal.style.display = "none";
        }
    }
}