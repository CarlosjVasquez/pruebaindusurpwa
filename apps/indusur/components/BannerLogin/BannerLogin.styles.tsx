import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconLogin from '../../public/bannerLoginImage.jpg';

export const Container = styled.div`
  margin-top: 1.25vw;
  margin-inline-end: 2.78vw;
  margin-bottom: 1.2vw;
  background: white;

  ${Responsive.SM} {
    display: none;
  }
`;

export const ImgBanner = styled.div`
  background: url(${iconLogin.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 45.83vw; //45.83
  min-height: 44.67vw; //68.67
  border-radius: 1.39vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;
