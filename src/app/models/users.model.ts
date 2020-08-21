interface UsersEntity {
  picture: string;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  email: string;
  roleId: number;
  active: boolean;
}

export interface User {
  users?: (UsersEntity)[] | null;
}
