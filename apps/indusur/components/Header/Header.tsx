import { useAppSelector } from '../../hooks/useStore';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import * as S from './Header.styles';

export const Header = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <div className="d-none w-50 form-control border-0 bg-white">
        {/*cambiar d-none a d-flex */}
        <S.FormInput
          type={'search'}
          placeholder="Buscar información"
          className="border-0"
        />
      </div>
      <div className="d-flex w-100 justify-content-end">
        {/* <div className="mx-1 col-md-1 justify-content-end d-flex">
          <S.ImgIcon src="./icons/message.svg" />
        </div>
        <div className="mx-1 col-md-1 justify-content-end d-flex">
          <S.ImgIcon src="./icons/notif.svg" />
        </div> */}
        <div className="d-flex justify-content-between align-items-center">
          <S.ImgIcon className="mx-1" src="../icons/message.svg" />
          <S.ImgIcon className="mx-1" src="../icons/notif.svg" />
          <S.TextName>
            Hola, {user.name ? user.name : localStorage.getItem('N')}
            <img
              style={{ width: '32px', minHeight: '32px' }}
              src={
                'data:image/png;base64, ' +
                `${user.imgUser ? user.imgUser : localStorage.getItem('I')}`
              }
            />
          </S.TextName>

          <DropdownButton
            id="dropdown-item-button"
            title={<img src="../icons/userImg.svg" />}
            variant="white"
            className="d-none"
          >
            {/*quitar propiedad className */}
            <Dropdown.Item as="button" onClick={() => console.log('perfil')}>
              Perfil
            </Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => console.log('Movimientos')}
            >
              Movimientos
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => console.log('Accion')}>
              Accion 1
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};
export default Header;
