import { SalesRequest, SalesResponse } from '../entities/sales';

export default interface SalesRepository {
  getSales(data: SalesRequest): Promise<SalesResponse>;
}
