import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({name: 'sortBy'})

class Pipesort implements PipeTransform {

  transform(users: any[], key: string): any[] {
    if (!users) {
      return users;
    }

    if (!key) {
      return users;
    }

    return users.sort((a: User, b: User) => {
      if (a[key] > b[key]) {
        return 1;
      }

      if (a[key] < b[key]) {
        return -1;
      }

      return 0;
    });
  }
}

export { Pipesort };
