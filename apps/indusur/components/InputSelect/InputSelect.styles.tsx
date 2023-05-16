import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const InputSelect = styled.select`
  min-height: 4.44vw;
  width: 100%;
  border-radius: 0.28vw;
  margin-inline-end: 10.45vw;
  border: 1px solid #e5e5e5;
  background: white;

  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: #000000;
  font-size: 0.9vw;
  line-height: 0.97vw;

  &:focus {
    box-shadow: rgba(18, 60, 201, 1) !important;
    outline: rgba(18, 60, 201, 1) !important;
    background: #ffffff;
    border: 1px solid transparent;
  }

  ${Responsive.SM} {
    min-height: 11.11vw;
    border-radius: 1.5vw;
    margin-inline-end: 3.45vw;

    font-size: 2.26vw;
    line-height: 2.43vw;
  }
`;
