import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({name: 'filter'})

class Pipefilter implements PipeTransform {

  /**
   * @description
   * Pipe que filtra los usuarios por los campos email o nombre.
   *
   * @param users Estructura JSON de los usuarios.
   * @param search Palabra o caracter para su busqueda en los usuarios (nombre o email).
   */
  transform(users: any[], search: string): any[] {
    if (!users) {
      return users;
    }

    if (!search) {
      return users;
    }

    search = search.toLocaleLowerCase();

    return users.filter(user => {
      return user.name.toLowerCase().includes((search || '').toLowerCase()) ||
      user.email.toLowerCase().includes((search || '').toLowerCase());
    });
  }
}

export { Pipefilter };
