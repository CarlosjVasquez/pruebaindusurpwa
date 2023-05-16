import sendRequest from '@indusur/utility/axios';
import LoginRepository from '../../domain/interfaces/loginRepository';
import { LoginRequest, LoginResponse } from '../../domain/entities/login';

export default class LoginRepositoryImp implements LoginRepository {
  async postLogin(req: LoginRequest): Promise<LoginResponse> {
    const endpoint = {
      host: 'erp.skyknoxerp.com',
      port: 8088,
      ssl: true
    };
    const url = `APICuadroVentas/sgUsuario/login`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
      return { data: response };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
}
