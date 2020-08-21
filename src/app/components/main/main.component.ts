import { Component, OnInit } from "@angular/core";
import { MainService } from '../../services/main.service';
import { ModalService } from 'src/app/services/modal.service';
import { User } from '../../models/users.model';
import { Role } from '../../models/roles.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

class MainComponent implements OnInit {

  search: string;

  users: User[] = [];
  roles: Role[] = [];

  /* Se injectan los servicios */
  constructor(
    private mainService: MainService) {

  }

  ngOnInit(): void {
    /* Otiene los datos del archivo json */
    this.mainService.getUsers().subscribe((data: User[]) => { this.users = data; });
    this.mainService.getRoles().subscribe((data: Role[]) => { this.roles = data; });
  }

  /* Filtra los roles con respecto al id */
  getRole = (id, roles) => {
    if (roles.length > 0) {
      return roles.filter(role => (role.id === id));
    }
  }
}

export { MainComponent };
