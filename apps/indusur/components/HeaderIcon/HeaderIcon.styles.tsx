import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconIndusur from '../../public/icons/indusur.svg';

export const ImgIndudur = styled.div`
  background: url(${iconIndusur.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 9.5vw;
  min-height: 1.94vw;

  ${Responsive.SM} {
    width: 35vw;
    min-height: 6.86vw;
  }
`;
