import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

class ModalService {

  private modals: any[] = [];

  /**
   * @description
   * Agregar modal a la matriz de modales activos
  */
  add = (modal: any) => {
    this.modals.push(modal);
  }

  /**
   * @description
   * Eliminar modal de la matriz de modales activos
  */
  remove = (id: string) => {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  /**
   * @description
   * Modal abierta especificada por id
  */
  open = (id: string) => {
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  /**
   * @description
   * Modal cerrada especificada por id
  */
  close = (id: string) => {
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }
}

export { ModalService };
