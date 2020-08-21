import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  element: any;

  constructor(
    private modalService: ModalService,
    private elementRef: ElementRef) {
      this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal debe tener una identificación');
      return;
    }

    /* mover el elemento al final de la página (justo antes de </body>) para que se pueda mostrar sobre todo lo demás */
    document.body.appendChild(this.element);

    /* cerrar modal en segundo plano clic */
    this.element.addEventListener('click', el => {
      if (el.target.className === 'user-modal') {
        this.close();
      }
    });

    /* agrega self (esta instancia modal) al servicio modal para que sea accesible desde los controladores */
    this.modalService.add(this);
  }

  /* eliminar self del servicio modal cuando se destruye el componente */
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  /* abre modal */
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  /* cierra modal */
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

}

export { ModalComponent };
