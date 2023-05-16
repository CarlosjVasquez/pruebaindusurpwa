import * as S from './FormLogin.styles';
import HeaderIcon from '../HeaderIcon';
import InputSelect from '../InputSelect';
import Input from '../Input';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoginRequest } from '../../../../libs/data-access/login/src/lib/domain/entities/login';
import { LoginController } from '../../../../libs/data-access/login/src/lib/infrastructure/controllers/loginController';
import { useAppDispatch } from '../../hooks/useStore';
import { setAuth } from '../../redux/actions/authAction';
import { setUserData } from '../../redux/actions/userAction';

const data = [{ id: '1', title: 'INDUAUTO' }];

export const FormLogin = () => {
  const [clsBtn, setClsBtn] = useState(true);
  const [opSelect, setOpSelect] = useState('1'); //cambiar a '' por defecto
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [msj, setMsj] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (opSelect !== '' && user !== '' && pass !== '') {
      setClsBtn(false);
      setMsj('');
    }
  }, [opSelect, user, pass]);

  const onChangeOption = (e: any) => {
    setOpSelect(e);
  };

  const sendData = async () => {
    setIsLoading(true);
    if (opSelect !== '' && user !== '' && pass !== '') {
      const req: LoginRequest = {
        usuario: user,
        clave: pass,
        idGrupo: parseInt(opSelect),
      };

      const { data } = await LoginController.postLogin(req);

      if (data !== undefined) {
        dispatch(setAuth({ token: true }));
        localStorage.setItem('T', 'true');
        dispatch(
          setUserData({
            name: data.data.nombres_Usuario,
            imgUser: data.data.imagen,
          })
        );
        localStorage.setItem('N', data.data.nombres_Usuario);
        localStorage.setItem('I', data.data.imagen);
        return router.push('/sales');
      }

      setIsLoading(false);
      setUser('');
      setPass('');
      setClsBtn(true);
      setMsj('Usuario y/o contraseña inválido');
    }
  };

  return (
    <>
      <div className="d-flex flex-column w-100 bg-white">
        <S.ContainerIcon>
          <HeaderIcon />
        </S.ContainerIcon>
        <S.ImgBannerApp className="d-flex justify-content-center align-items-center">
          <div></div>
        </S.ImgBannerApp>
        <S.ContainerText>
          <S.TextTitle>Iniciar sesión</S.TextTitle>
          <S.TextSubtitle className="pt-2">
            Ingresa tu usuario y clave de SKYKNOX
          </S.TextSubtitle>
        </S.ContainerText>
        <S.ContainerInputs>
          <div>
            <InputSelect data={data} handleChange={onChangeOption} />
          </div>
          <S.ContainerInputText>
            <Input
              type={'text'}
              placeholder={'Ingresa tu usuario'}
              value={user}
              handleChange={setUser}
              label={'Usuario'}
            />
          </S.ContainerInputText>
          <S.ContainerInputText className="d-flex justify-content-between align-items-center">
            {!viewPass && (
              <>
                <Input
                  type={'password'}
                  placeholder={'Ingresa tu contraseña'}
                  value={pass}
                  handleChange={setPass}
                  label={'Contraseña'}
                  handleStatus={() => setViewPass(!viewPass)}
                  status={viewPass}
                />
              </>
            )}
            {viewPass && (
              <>
                <Input
                  type={'text'}
                  placeholder={'Ingresa tu contraseña'}
                  value={pass}
                  handleChange={setPass}
                  label={'Contraseña'}
                  handleStatus={() => setViewPass(!viewPass)}
                  status={viewPass}
                />
              </>
            )}
          </S.ContainerInputText>
          {msj !== '' && <small className="text-danger">{msj}</small>}
          <S.ContainerPsw className="d-none">
            {/*borrar el className */}
            <S.TextLink href="">Olvidé mi contraseña</S.TextLink>
          </S.ContainerPsw>
          <S.ContainerButton>
            <Button
              text={'Iniciar Sesión'}
              handleClick={sendData}
              disabled={clsBtn}
              loading={isLoading}
              type="Continue"
            />
          </S.ContainerButton>
        </S.ContainerInputs>
        <S.ContainerInfo className="d-none">
          {/*cambiar d-none a d-flex */}
          <img src="./icons/info.svg" />
          <S.TextInfo>Solicita ayuda a soporte</S.TextInfo>
        </S.ContainerInfo>
      </div>
    </>
  );
};
export default FormLogin;
