import { currencyFormatter } from '../../utils/Formats';
import * as S from './CardTotalE.styles';

export interface CardTotalEProps {
  data: any;
}

export const CardTotalE = (props: CardTotalEProps) => {
  return (
    <>
      <S.DivContainerEnd className="d-flex flex-column justify-content-between align-items-start">
        <S.DivTable bordered={false} borderless={true}>
          <thead>
            <tr>
              <th>
                <S.TextSubtitleCard1>Punto emisión</S.TextSubtitleCard1>
              </th>
              <th>
                <S.TextSubtitleCard1>Total</S.TextSubtitleCard1>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data?.length > 0 &&
              props.data.map((x: any, index: any) => (
                <tr key={index}>
                  <td>
                    <S.TextSubtitleCardUnits>{x.point}</S.TextSubtitleCardUnits>
                  </td>
                  <td>
                    <S.TextSubtitleCardUnits>
                      {x.total.toString() !== ''
                        ? currencyFormatter({
                            currency: 'USD',
                            value: x.total ? x.total.toString() : '0',
                          })
                        : ''}
                    </S.TextSubtitleCardUnits>
                  </td>
                </tr>
              ))}
          </tbody>
        </S.DivTable>
      </S.DivContainerEnd>
    </>
  );
};
export default CardTotalE;
