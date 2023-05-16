import Offcanvas from 'react-bootstrap/Offcanvas';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import * as S from './DashboardDetails.styles';
import { currencyFormatter } from '../../utils/Formats';

export interface DashboardDetailsProps {
  show: boolean;
  title: string;
  subtitle: string;
  percent: number;
  total: string;
  goal: string;
  data: any;
  dataE?: any;
}

export const DashboardDetails = (props: DashboardDetailsProps) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    setShow(!props.show);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.Container>
            <div className="d-flex justify-content-center align-items-center">
              <S.TitleDetail>{props.title}</S.TitleDetail>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <S.SubtitleDetail>{props.subtitle}</S.SubtitleDetail>
            </div>
            <div className="pt-3">
              <S.TitlePercent>{`${props.percent.toFixed(2)}%`}</S.TitlePercent>
              <ProgressBar now={props.percent} />
              <S.SubtitleAmount className="pt-2">
                % Cumplimiento
              </S.SubtitleAmount>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <S.ContainerAmount>
                <S.TextAmount>
                  {currencyFormatter({
                    currency: 'USD',
                    value: props.total ? props.total : '0',
                  })}
                </S.TextAmount>
              </S.ContainerAmount>
              <S.SubtitleAmount>Total Facturación</S.SubtitleAmount>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <S.ContainerAmount>
                <S.TextGoal>
                  {currencyFormatter({
                    currency: 'USD',
                    value: props.goal ? props.goal : '0',
                  })}
                </S.TextGoal>
              </S.ContainerAmount>
              <S.SubtitleGoal>Meta Comercial</S.SubtitleGoal>
            </div>

            {props.data.map((info: any, index) => (
              <S.ContainerData key={index}>
                <div className="d-flex flex-column mb-4">
                  <div>
                    {info.tipo !== 'Camiones' && info.tipo !== 'Vehiculos' && (
                      <S.TitleData>{info.tipo}</S.TitleData>
                    )}
                    {info.tipo === 'Camiones' && (
                      <S.TitleData>Pesados</S.TitleData>
                    )}
                    {info.tipo === 'Vehiculos' && (
                      <S.TitleData>Livianos</S.TitleData>
                    )}
                    <img src="../icons/linedividerBold.svg" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <S.SubtitleFact>Facturación</S.SubtitleFact>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumFact>
                        {info.venta.toString() !== ''
                          ? currencyFormatter({
                              currency: 'USD',
                              value: info.venta ? info.venta.toString() : '0',
                            })
                          : ''}
                      </S.TextDataNumFact>
                    </S.ContainerDataNumbers>
                  </div>
                  <img src="../icons/lineDivider.svg" />
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <div>
                      <S.SubtitleGoal>Meta Comercial</S.SubtitleGoal>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumbers>
                        {info.presupuesto.toString() !== ''
                          ? currencyFormatter({
                              currency: 'USD',
                              value: info.presupuesto
                                ? info.presupuesto.toString()
                                : '0',
                            })
                          : ''}
                      </S.TextDataNumbers>
                    </S.ContainerDataNumbers>
                  </div>
                  <img src="../icons/lineDivider.svg" />
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <div>
                      <S.SubtitleGoal>% Cumplimiento</S.SubtitleGoal>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumbers>
                        {info.porcentajeCumplimiento.toString() !== ''
                          ? `${info.porcentajeCumplimiento}%`
                          : ''}
                      </S.TextDataNumbers>
                    </S.ContainerDataNumbers>
                  </div>
                  <img src="../icons/lineDivider.svg" />
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <div>
                      <S.SubtitleGoal>Utilidad Bruta</S.SubtitleGoal>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumbers>
                        {info.utilidadBruta.toString() !== ''
                          ? currencyFormatter({
                              currency: 'USD',
                              value: info.utilidadBruta
                                ? info.utilidadBruta.toString()
                                : '0',
                            })
                          : ''}
                      </S.TextDataNumbers>
                    </S.ContainerDataNumbers>
                  </div>
                  <img src="../icons/lineDivider.svg" />
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <div>
                      <S.SubtitleGoal>% Margen Bruto</S.SubtitleGoal>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumbers>
                        {info.porcentajeMargenBruto.toString() !== ''
                          ? `${info.porcentajeMargenBruto}%`
                          : ''}
                      </S.TextDataNumbers>
                    </S.ContainerDataNumbers>
                  </div>
                  <img src="../icons/lineDivider.svg" />
                  {props.title === 'Vehiculos' && (
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div>
                        <S.SubtitleGoal>Unidades</S.SubtitleGoal>
                      </div>
                      <S.ContainerDataNumbers>
                        <S.TextDataNumbers>
                          {info.unidades.toString() !== '' ? info.unidades : ''}
                        </S.TextDataNumbers>
                      </S.ContainerDataNumbers>
                    </div>
                  )}
                </div>
              </S.ContainerData>
            ))}
            {props.title === 'Enderezada' && props.dataE?.length > 0 && (
              <>
                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <S.TitleData>Punto Emisión</S.TitleData>
                    <S.TitleTotal>Total</S.TitleTotal>
                  </div>
                  <img src="../icons/linedividerBold.svg" />
                </div>
                {props.dataE.map((x, index) => (
                  <div
                    className="d-flex justify-content-between align-items-center mt-2"
                    key={index}
                  >
                    <div>
                      <S.SubtitleGoal>{x.point}</S.SubtitleGoal>
                    </div>
                    <S.ContainerDataNumbers>
                      <S.TextDataNumbers>
                        {x.total.toString() !== ''
                          ? currencyFormatter({
                              currency: 'USD',
                              value: x.total ? x.total.toString() : '0',
                            })
                          : ''}
                      </S.TextDataNumbers>
                    </S.ContainerDataNumbers>
                  </div>
                ))}
              </>
            )}
          </S.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default DashboardDetails;
