import sendRequest from '@indusur/utility/axios';
import SalesRepository from '../../domain/interfaces/salesRepository';
import { SalesRequest, SalesResponse } from '../../domain/entities/sales';

export default class SalesRepositoryImp implements SalesRepository {
  async getSales(req: SalesRequest): Promise<SalesResponse> {
    const endpoint = {
      host: 'erp.skyknoxerp.com',
      port: 8088,
      ssl: true
    };
    const url =
      `APICuadroVentas/fiRepCuadroVenta/getdashboard?` +
      `idEmpresa=` +
      req.enterprice_id +
      `&anio=` +
      req.year +
      `&mes=` +
      req.month;
    try {
      const response: any = await sendRequest(endpoint).get(url);
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
