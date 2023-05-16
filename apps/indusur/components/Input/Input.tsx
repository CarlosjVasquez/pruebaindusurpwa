import * as S from './Input.styles';

export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  typeFormat?: string;
  label?: string;
  handleStatus?: (e: any) => void;
  status?: boolean;
}

export const Input = (props: InputProps) => {
  return (
    <div className="input-group">
      {props.typeFormat === 'currency' && (
        <S.FormSpan className="input-group-text fw-bold">$</S.FormSpan>
      )}
      {props.label && (
        <S.FormLabel className="w-100">{props.label}</S.FormLabel>
      )}
      <S.FormInput
        className={
          props.typeFormat === 'currency'
            ? 'border-start-0 ' + 'form-control'
            : 'form-control'
        }
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e: any) => {
          // props.typeFormat === 'currency' &&
          //   (e.target.value = formatNumber(e.target.value));
          props.handleChange(e.target.value);
        }}
        value={props.value}
      />
      {props.type === 'password' && !props.status && (
        <S.FormSpanPsw className="input-group-text fw-bold">
          <S.ContainerImg
            onClick={props.handleStatus}
            src="./icons/eye-slash-regular.svg"
          />
        </S.FormSpanPsw>
      )}
      {props.type === 'text' && props.status && (
        <S.FormSpanPsw className="input-group-text fw-bold">
          <S.ContainerImg
            onClick={props.handleStatus}
            src="./icons/eye-regular.svg"
          />
        </S.FormSpanPsw>
      )}
    </div>
  );
};
export default Input;
