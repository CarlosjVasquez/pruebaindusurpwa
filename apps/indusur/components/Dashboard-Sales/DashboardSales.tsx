import DashboardMenu from '../Dashboard-Menu';
import Header from '../Header';
import * as S from './DashboardSales.styles';
import CardTable from '../Card-Table/CardTable';
import Button from '../Button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Input from '../Input';
import {
  DataSales,
  currencyFormatter,
  formatNumber,
} from '../../utils/Formats';
import {
  SalesController,
  SalesRequest,
  SalesEntities,
} from '@indusur/data-access/sales';

export const DashboardSales = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingI, setLoadingI] = useState(false);
  const [salesData, setSalesData] = useState([]);
  const [salesE, setSalesE] = useState([]);
  const [salesTotal, setSalesTotal] = useState([]);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [dateSelect, setDateSelect] = useState('');

  useEffect(() => {
    //llamar servicio primera vez con fecha actual
    if (year === 0 && month === 0) {
      const fecha = Date.now();
      const actualDate = new Date(fecha).toLocaleDateString();
      const arrayDate = actualDate.split('/');
      setMonth(parseInt(arrayDate[1]));
      setYear(parseInt(arrayDate[2]));
      setDateSelect(actualDate);
    }
    getData();
  }, [year, month]);

  const getData = async () => {
    try {
      setLoading(true);
      const aux = [];
      const auxE = [];
      let mapperTitles = [];
      let mapperTotals = [];
      let mapperE = [];
      let totalP = 0;
      let totalV = 0;
      if (year !== 0 && month !== 0) {
        const req: SalesRequest = {
          enterprice_id: 1,
          year: year,
          month: month,
        };

        const { data } = await SalesController.getSales(req);

        if (data.data.dashboardCuadroVenta.length > 0) {
          data.data.dashboardCuadroVenta.forEach((element) => {
            if (!aux.includes(element.tipoGeneral)) {
              aux.push(element.tipoGeneral);
            }
          });

          data.data.dashboardVentasColisiones.forEach((element) => {
            if (!auxE.includes(element.puntoEmision)) {
              auxE.push(element.puntoEmision);
            }
          });

          aux.forEach((e) => {
            mapperTitles.push({
              id: 0,
              title: e,
              subtitle: '',
              units: 0,
              percent: 0,
              total: 0,
              goal: 0,
              utility: 0,
              costo: 0,
              details: [],
            });
          });

          auxE.forEach((e) => {
            mapperE.push({
              point: e,
              total: 0,
            });
          });
        }

        mapperTitles.forEach((x, index) => {
          data.data.dashboardCuadroVenta.map((item) => {
            if (x.title === item.tipoGeneral) {
              mapperTitles[index].id = index;
              mapperTitles[index].units += item.unidades;
              mapperTitles[index].percent += item.porcentajeCumplimiento;
              mapperTitles[index].total += item.venta;
              mapperTitles[index].goal += item.presupuesto;
              mapperTitles[index].utility += item.utilidadBruta;
              mapperTitles[index].costo += item.costo;
              mapperTitles[index].details.push(item);
            }
          });
        });

        mapperTitles.forEach((x) => {
          totalP = totalP + x.goal;
          totalV = totalV + x.total;
        });

        if (totalP > 0 && totalV > 0) {
          mapperTotals.push({
            budget: totalP,
            sale: totalV,
            percent: (totalV * 100) / totalP,
          });
        }

        mapperE.forEach((x, index) => {
          data.data.dashboardVentasColisiones.map((item) => {
            if (x.point === item.puntoEmision) {
              mapperE[index].total += item.valorVenta;
            }
          });
        });
        if (
          mapperTitles.length > 0 &&
          mapperTotals.length > 0 &&
          mapperE.length > 0
        ) {
          setSalesData(mapperTitles);
          setSalesTotal(mapperTotals);
          setSalesE(mapperE);
          setLoadingI(false);
        } else {
          setSalesData([]);
          setSalesTotal([]);
          setSalesE([]);
          setLoadingI(true);
        }
      }

      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const onChangeDate = (e: any) => {
    setLoadingI(false);
    setSalesData([]);
    setSalesTotal([]);
    setSalesE([]);
    const arrayDate = e.split('-');
    if (year === parseInt(arrayDate[0]) && month === parseInt(arrayDate[1])) {
      getData();
    }
    setMonth(parseInt(arrayDate[1]));
    setYear(parseInt(arrayDate[0]));
    setDateSelect(e);
  };

  const newProspect = () => {
    setIsLoading(true);
    router.push('/prospect');
  };

  return (
    <>
      <S.ContainerMenuHeader className="d-flex justify-content-between bg-white">
        <S.ContainerMenu>
          <DashboardMenu />
        </S.ContainerMenu>
        <S.ContainerHeader className="d-flex justify-content-between align-items-center w-100">
          <Header />
        </S.ContainerHeader>
      </S.ContainerMenuHeader>
      <div className="d-flex flex-column bg-white mb-5">
        <S.ContainerCards className="d-flex justify-content-between align-items-center pt-4">
          <div className="d-flex justify-content-between align-items-center">
            <S.TextTitle>Ventas</S.TextTitle>
            <Input
              type={'month'}
              placeholder={''}
              value={dateSelect}
              handleChange={onChangeDate}
            />
          </div>
          {/* <div>
          <Button
            text={'Crear nuevo prospecto'}
            handleClick={newProspect}
            disabled={false}
            type="Continue"
            loading={isLoading}
          />
        </div> */}
        </S.ContainerCards>
        <CardTable
          dataT={salesTotal}
          dataE={salesE}
          year={year}
          month={month}
          load={loading}
          loadI={loadingI}
        />
        <CardTable
          data={salesData}
          dataE={salesE}
          year={year}
          month={month}
          load={loading}
          loadI={loadingI}
        />
      </div>
    </>
  );
};
export default DashboardSales;
