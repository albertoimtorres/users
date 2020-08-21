import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({name: 'filter'})

class Pipefilter implements PipeTransform {

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
        // user.fathersLastName.toLowerCase().includes((search || '').toLowerCase()) ||
        // user.mothersLastName.toLowerCase().includes((search || '').toLowerCase()) ||
        // user.roleId.toString().toLowerCase().includes((search || '').toLowerCase());
    });
  }
}

export { Pipefilter };
