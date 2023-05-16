import * as S from './CardTable.styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { currencyFormatter } from '../../utils/Formats';
import { useEffect, useState } from 'react';
import DashboardDetails from '../Dashboard-Details';
import CardTotalE from '../Card-TotalE';

export interface CardTableProps {
  data?: any;
  year: any;
  month: any;
  load: boolean;
  loadI?: boolean;
  dataT?: any;
  dataE?: any;
}

export const CardTable = (props: CardTableProps) => {
  const [isShow, setIsShow] = useState(false);
  const [showDetail, setShowDetail] = useState(-1);

  useEffect(() => {
    setShowDetail(-1);
  }, [props.load]);

  return (
    <>
      {props.dataT?.length > 0 &&
        props.dataT.map((total, index) => (
          <S.ContainerCards className="d-flex" key={index}>
            <S.DivCardT className="card">
              <div className="card-body d-flex flex-column">
                <S.DivCardBody className="row">
                  <S.TextTitleCard>Consolidados</S.TextTitleCard>
                  <S.DivContainerCards className="mt-1">
                    <S.DivAmountsTotal className="card border-0 justify-content-center align-items-center">
                      <S.TextAmount>
                        {currencyFormatter({
                          currency: 'USD',
                          value: total.budget ? total.budget.toString() : '0',
                        })}
                      </S.TextAmount>
                      <S.TextSubtitle2>Presupuesto</S.TextSubtitle2>
                    </S.DivAmountsTotal>
                    <S.DivAmountsTotal className="card border-0 justify-content-center align-items-center">
                      <S.TextAmount>
                        {currencyFormatter({
                          currency: 'USD',
                          value: total.sale ? total.sale.toString() : '0',
                        })}
                      </S.TextAmount>
                      <S.TextSubtitle2>Venta</S.TextSubtitle2>
                    </S.DivAmountsTotal>
                    <S.DivCardPercentTotal className="card border-0 justify-content-center align-items-center">
                      <CircularProgressbar
                        value={total.percent}
                        text={`${total.percent.toFixed(2)}%`}
                      />
                      <S.TextSubtitleCardUnits className="pt-1">
                        % Cumplimiento
                      </S.TextSubtitleCardUnits>
                    </S.DivCardPercentTotal>
                  </S.DivContainerCards>
                </S.DivCardBody>
              </div>
            </S.DivCardT>
          </S.ContainerCards>
        ))}
      {props.data?.length > 0 &&
        props.data.map((element, index) => (
          <S.ContainerCards className="d-flex pt-4" key={index}>
            <S.DivCard className="card">
              <div className="card-body d-flex flex-column">
                <S.DivCardBody className="row">
                  <S.TextTitleCard>{element.title}</S.TextTitleCard>
                  <S.TextSubtitleCard>
                    Facturación de{' '}
                    {props.month > 9 ? props.month : '0' + props.month} /{' '}
                    {props.year}
                  </S.TextSubtitleCard>
                  <S.DivContainerCards className="pt-3">
                    <S.DivCardUnits className="card border-0 justify-content-center align-items-center">
                      <CircularProgressbar
                        value={
                          element.goal
                            ? (element.total / element.goal) * 100
                            : 0
                        }
                        text={
                          element.goal
                            ? `${((element.total / element.goal) * 100).toFixed(
                                2
                              )}%`
                            : '0%'
                        }
                      />
                      <S.TextSubtitleCardUnits className="pt-1">
                        % Cumplimiento
                      </S.TextSubtitleCardUnits>
                    </S.DivCardUnits>
                    <S.DivCardAmountActive className="card justify-content-center align-items-center">
                      <S.TextAmount>
                        {currencyFormatter({
                          currency: 'USD',
                          value: element.total ? element.total.toString() : '0',
                        })}
                      </S.TextAmount>
                      <S.TextSubtitle2>Total Facturación</S.TextSubtitle2>
                    </S.DivCardAmountActive>
                    <S.DivCardAmounts className="card border-0 justify-content-center align-items-center">
                      <S.TextAmountDisabled>
                        {currencyFormatter({
                          currency: 'USD',
                          value: element.goal ? element.goal.toString() : '0',
                        })}
                      </S.TextAmountDisabled>
                      <S.TextSubtitleCardUnits>
                        Meta Comercial
                      </S.TextSubtitleCardUnits>
                    </S.DivCardAmounts>
                    <S.DivCardAmounts className="card border-0 justify-content-center align-items-center">
                      <S.TextAmountDisabled>
                        {currencyFormatter({
                          currency: 'USD',
                          value: element.utility
                            ? element.utility.toString()
                            : '0',
                        })}
                      </S.TextAmountDisabled>
                      <S.TextSubtitleCardUnits>
                        Utilidad Bruta
                      </S.TextSubtitleCardUnits>
                    </S.DivCardAmounts>
                    <S.DivCardAmounts className="card border-0 justify-content-center align-items-center">
                      <S.TextAmountDisabled>
                        {`${(
                          ((element.total - element.costo) / element.total) *
                          100
                        ).toFixed(2)}%`}
                      </S.TextAmountDisabled>
                      <S.TextSubtitleCardUnits>
                        % Margen Bruto
                      </S.TextSubtitleCardUnits>
                    </S.DivCardAmounts>
                  </S.DivContainerCards>
                </S.DivCardBody>
              </div>
              <div className="card-footer border-0 bg-white">
                <div className="justify-content-between d-flex align-items-center">
                  {element.title !== 'Vehiculos' &&
                    element.title !== 'Enderezada' && (
                      <div className="d-flex flex-column justify-content-between align-items-center"></div>
                    )}
                  {element.title === 'Enderezada' && (
                    <CardTotalE data={props.dataE} />
                  )}
                  {element.title === 'Vehiculos' && (
                    <div className="d-flex justify-content-between align-items-center">
                      <S.TextNumber1>{element.units}</S.TextNumber1>
                      <S.TextSubtitleCard1>
                        Unidades Vendidas
                      </S.TextSubtitleCard1>
                    </div>
                  )}
                  <div
                    onClick={() => [setIsShow(!isShow), setShowDetail(index)]}
                  >
                    <S.TextFooterCard>
                      Desplegar detalles de ventas
                      <img src="../icons/arrowRigth.svg" />
                    </S.TextFooterCard>
                  </div>
                </div>
                {isShow && showDetail === index && (
                  <DashboardDetails
                    show={isShow}
                    title={element.title}
                    subtitle={element.subtitle}
                    percent={
                      element.goal ? (element.total / element.goal) * 100 : 0
                    }
                    total={element.total.toString()}
                    goal={element.goal.toString()}
                    data={element.details}
                    dataE={props.dataE}
                  />
                )}
              </div>
            </S.DivCard>
          </S.ContainerCards>
        ))}

      {props.loadI && props.dataT?.length === 0 && (
        <S.ContainerCards className="d-flex pt-4">
          <S.DivCard className="card">
            <div className="card-body d-flex justify-content-center align-items-center">
              <S.DivCardBody className="row">
                <S.TextTitleCard>No Existen Consolidados</S.TextTitleCard>
              </S.DivCardBody>
            </div>
          </S.DivCard>
        </S.ContainerCards>
      )}
      {props.load && props.dataT?.length === 0 && (
        <S.ContainerCards className="d-flex pt-4">
          <S.DivCard className="card">
            <div className="card-body d-flex justify-content-center align-items-center">
              <S.DivCardBody className="row">
                <div
                  className="spinner-border text-secondary"
                  role="status"
                ></div>
              </S.DivCardBody>
            </div>
          </S.DivCard>
        </S.ContainerCards>
      )}

      {props.loadI && props.data?.length === 0 && (
        <S.ContainerCards className="d-flex pt-4">
          <S.DivCard className="card">
            <div className="card-body d-flex justify-content-center align-items-center">
              <S.DivCardBody className="row">
                <S.TextTitleCard>No Existen Datos</S.TextTitleCard>
              </S.DivCardBody>
            </div>
          </S.DivCard>
        </S.ContainerCards>
      )}
      {props.load && props.data?.length === 0 && (
        <S.ContainerCards className="d-flex pt-4">
          <S.DivCard className="card">
            <div className="card-body d-flex justify-content-center align-items-center">
              <S.DivCardBody className="row">
                <div
                  className="spinner-border text-secondary"
                  role="status"
                ></div>
              </S.DivCardBody>
            </div>
          </S.DivCard>
        </S.ContainerCards>
      )}
    </>
  );
};
export default CardTable;
