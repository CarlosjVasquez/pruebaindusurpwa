import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const FormInput = styled.input`
  width: 35vw;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-inline-start: 20px;

  &:focus {
    box-shadow: none !important;
    outline: none !important;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  //text
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.18vw;
  color: #737373;

  ${Responsive.SM} {
    //text
    font-size: 3.43vw;
    line-height: 2.95vw;
  }
`;

export const TextName = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.93vw;
  line-height: 1.67vw;
  margin-inline-end: 2vw; //modificar

  ${Responsive.SM} {
    //display: none;
    font-size: 2.26vw;
    line-height: 4.17vw;
    margin-inline-end: 4vw; //modificar
  }
`;

export const ImgIcon = styled.img`
  width: 1.67vw;
  min-height: 1.67vw;
  pointer-events: none; //modificar

  ${Responsive.SM} {
    width: 4.17vw;
    min-height: 4.17vw;
  }
`;
