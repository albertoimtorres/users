import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

class HeaderComponent implements OnInit {

  constructor(
    private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  openModal(id: string) {
    console.log(id, '¿ID EN HEADER?')
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

export { HeaderComponent };
