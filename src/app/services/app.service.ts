import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

class AppService {

  url = '';

  constructor(private http: HttpClient) {
    this.url = environment.url_json;
  }

}

export { AppService };
