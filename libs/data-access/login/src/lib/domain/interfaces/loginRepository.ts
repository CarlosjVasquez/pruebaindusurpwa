import { LoginRequest, LoginResponse } from '../entities/login';

export default interface LoginRepository {
  postLogin(data: LoginRequest): Promise<LoginResponse>;
}
