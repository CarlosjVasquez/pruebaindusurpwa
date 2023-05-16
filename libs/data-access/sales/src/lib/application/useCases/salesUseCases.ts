import { SalesRequest, SalesResponse } from '../../domain/entities/sales';
import SalesRepository from '../../domain/interfaces/salesRepository';

export const getSales = (
  salesInterface: SalesRepository,
  data: SalesRequest
): Promise<SalesResponse> => {
  return salesInterface.getSales(data);
};
