export class LoginRequest {
  usuario: string;
  clave: string;
  idGrupo: number;

  constructor() {
    this.usuario = '';
    this.clave = '';
    this.idGrupo = 0;
  }
}

export type LoginResponse = {
  error?: any;
  data?: any;
};
