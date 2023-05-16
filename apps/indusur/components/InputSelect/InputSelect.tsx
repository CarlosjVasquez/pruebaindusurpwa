import * as S from './InputSelect.styles';

export interface InputSelectProps {
  data: any;
  handleChange: (e: any) => void;
}

export const InputSelect = (props: InputSelectProps) => {
  return (
    <div className="input-group">
      <S.InputSelect
        className="form-control"
        onChange={(e: any) => props.handleChange(e.target.value)}
      >
        {/* <option disabled selected>
          Seleccione una opción
        </option> */}
        {/* {props.data.forEach((op) => {
          console.log('op', op.id, op.title);
          <option value={op.id}>{op.title}</option>;
        })} */}
        <option defaultValue={'1'} value={'1'}>
          INDUAUTO
        </option>
        {/* <option value={'2'}>Empresa 2</option>
        <option value={'3'}>Empresa 3</option>
        <option value={'4'}>Empresa 4</option>
        <option value={'5'}>Empresa 5</option> */}
      </S.InputSelect>
    </div>
  );
};
export default InputSelect;
