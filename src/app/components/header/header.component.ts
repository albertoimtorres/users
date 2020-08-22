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

  /**
   *
   * @param id identificador del modal.
   */
  openModal(id: string) {
    this.modalService.open(id);
  }

  /**
   *
   * @param id identificador del modal.
   */
  closeModal(id: string) {
    this.modalService.close(id);
  }
}

export { HeaderComponent };
