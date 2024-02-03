import { Component } from '@angular/core';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrl: './input-modal.component.css',
})
export class InputModalComponent {
  showModal = false;

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }
}
