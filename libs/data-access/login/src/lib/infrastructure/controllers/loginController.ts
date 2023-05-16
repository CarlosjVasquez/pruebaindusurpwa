import LoginRepositoryImp from '../repositories/loginRepositoryImp';
import { postLogin } from '../../application/useCases/loginUseCases';
import { LoginRequest, LoginResponse } from '../../domain/entities/login';

const api = new LoginRepositoryImp();

export class LoginController {
  static async postLogin(data: LoginRequest): Promise<LoginResponse> {
    return postLogin(api, data);
  }
}
