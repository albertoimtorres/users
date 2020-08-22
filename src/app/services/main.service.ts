import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/users.model';
import { Role } from '../models/roles.model';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})

class MainService {

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  /**
   * @description
   * Servicio observable - Obtiene los usuarios realizando una pretición HTTO GET al servicio user.json
  */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appService.url}/users.json`, this.options).pipe(map(res => res));
  }

  /**
   * @description
   * Servicio observable - Obtiene los usuarios realizando una pretición HTTO GET al servicio roles.json
  */
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.appService.url}/roles.json`, this.options).pipe(map(res => res));
  }
}

export { MainService };
