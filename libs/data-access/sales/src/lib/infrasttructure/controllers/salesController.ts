import SalesRepositoryImp from '../repositories/salesRepositoryImp';
import { getSales } from '../../application/useCases/salesUseCases';
import { SalesRequest, SalesResponse } from '../../domain/entities/sales';

const api = new SalesRepositoryImp();

export class SalesController {
  static async getSales(data: SalesRequest): Promise<SalesResponse> {
    return getSales(api, data);
  }
}
