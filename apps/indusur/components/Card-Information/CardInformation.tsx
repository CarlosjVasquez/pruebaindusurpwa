import { currencyFormatter, onlyNumber } from '../../utils/Formats';
import * as S from './CardInformation.styles';

export interface CardInformationProps {
  title: string;
  subtitle: string;
  amount: string;
  percent: string;
}

export const CardInformation = (props: CardInformationProps) => {
  return (
    <>
      <S.DivCard className="card">
        <div className="card-body d-flex flex-column">
          <S.DivCardBody className="row">
            <S.TextTitleCard>{props.title}</S.TextTitleCard>
            <S.TextNumber1>
              {currencyFormatter({ currency: 'USD', value: props.amount })}
            </S.TextNumber1>
            <S.TextSubtitleCard>{props.subtitle}</S.TextSubtitleCard>
          </S.DivCardBody>
        </div>
        <div className="card-footer justify-content-between d-flex border-top-0 bg-white">
          <div
            className="d-flex mx-2"
            style={
              props.percent > '0' ? { color: '#16A34A' } : { color: '#DC2626' }
            }
          >
            {props.percent > '0' ? <S.IconPositive /> : <S.IconNegative />}
            {props.percent}%
          </div>
          <S.TextFooterCard href="">Ver detalles</S.TextFooterCard>
        </div>
      </S.DivCard>
    </>
  );
};
export default CardInformation;
