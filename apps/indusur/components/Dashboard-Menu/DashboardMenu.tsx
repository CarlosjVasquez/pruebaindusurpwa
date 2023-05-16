import { useRouter } from 'next/router';
import * as S from './DashboardMenu.styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderIcon from '../HeaderIcon';
import { useAppDispatch } from '../../hooks/useStore';
import { resetAuth } from '../../redux/actions/authAction';
import { resetUserData } from '../../redux/actions/userAction';

export interface DashboardMenuProps {
  active?: boolean;
}

export const DashboardMenu = (props: DashboardMenuProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(resetAuth());
    dispatch(resetUserData());
    localStorage.setItem('T', '');
    localStorage.setItem('N', '');
    localStorage.setItem('I', '');
    router.push('/');
  };

  return (
    <>
      <S.StyleNavar key={'true'} bg="white" expand={'true'}>
        <Container fluid>
          <S.StyleNavarBrand href="#">
            <HeaderIcon />
          </S.StyleNavarBrand>
          <S.StyleNavarTog aria-controls={`offcanvasNavbar-expand-${'true'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'true'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'true'}`}
            placement="start"
          >
            <Offcanvas.Header closeButton style={{ background: 'white' }}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'true'}`}>
                <HeaderIcon />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ background: 'white' }}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  className="text-secondary"
                  title="Empresas"
                  id={`offcanvasNavbarDropdown-expand-${true}`}
                >
                  <NavDropdown.Item className="d-flex">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="../icons/logoEmpresa.svg" />
                    </div>
                    <div className="d-flex flex-column justify-content-center px-2">
                      {!props.active && (
                        <S.TextActive>Estas viendo</S.TextActive>
                      )}
                      <S.TextEnterprice>INDUAUTO</S.TextEnterprice>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="d-flex flex-column pt-5">
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center">
                      <img src="../icons/dashboard.svg" />
                      <S.TextOption>Dashboard</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/notification.svg" />
                      <S.TextOption>Notificaciones</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/ventas.svg" />
                      <S.TextOption>Ventas</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/marketing.svg" />
                      <S.TextOption>Marketing</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/clients.svg" />
                      <S.TextOption>Clientes</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/vendedores.svg" />
                      <S.TextOption>Vendedores</S.TextOption>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <div className="d-flex justify-content-start align-items-center pt-2">
                      <img src="../icons/informes.svg" />
                      <S.TextOption>Informes</S.TextOption>
                    </div>
                  </Nav.Link>
                </div>
                <div className="d-flex flex-column pt-5">
                  <Nav.Link href="#" className="d-none">
                    {/*borrar el className */}
                    <S.TextOption>Configuración</S.TextOption>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <S.TextOption onClick={logout}>Cerrar Sesión</S.TextOption>
                  </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </S.StyleNavar>
    </>
  );
};
export default DashboardMenu;
