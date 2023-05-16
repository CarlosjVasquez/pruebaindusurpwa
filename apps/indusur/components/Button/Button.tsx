import * as S from './Button.styles';

export interface ButtonProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
  type: string;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      {props.type === 'Continue' && (
        <S.ButtonContinue disabled={props.disabled} onClick={props.handleClick}>
          {!props.loading && props.text}
          {props.loading && (
            <S.StyleSpinner className="d-flex justify-content-center">
              <div className="spinner-border" role="status"></div>
            </S.StyleSpinner>
          )}
        </S.ButtonContinue>
      )}
      {props.type === 'Cancel' && (
        <S.ButtonCancel disabled={props.disabled} onClick={props.handleClick}>
          {!props.loading && props.text}
          {props.loading && (
            <S.StyleSpinnerCancel className="d-flex justify-content-center">
              <div className="spinner-border" role="status"></div>
            </S.StyleSpinnerCancel>
          )}
        </S.ButtonCancel>
      )}
      {props.type === 'Info' && (
        <S.ButtonInfo disabled={props.disabled} onClick={props.handleClick}>
          {props.text}
        </S.ButtonInfo>
      )}
    </>
  );
};
export default Button;
