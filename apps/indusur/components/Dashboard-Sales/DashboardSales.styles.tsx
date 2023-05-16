import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const ContainerMenu = styled.div`
  width: 20vw;
  min-height: 3.89vw;

  ${Responsive.SM} {
    width: 20vw;
    min-height: 9.72vw;
  }
`;

export const ContainerMenuHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;

  ${Responsive.SM} {
  }
`;

export const ContainerHeader = styled.div`
  width: 80vw;
  min-height: 3.89vw;
  border-bottom: 1px solid #e5e5e5;

  ${Responsive.SM} {
    width: 80vw;
    min-height: 9.72vw;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  padding-inline: 2.71vw;

  ${Responsive.SM} {
    padding-inline: 6.77vw;
  }
`;

export const TextTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1253c9;
  font-size: 1.67vw;
  line-height: 2.01vw;
  margin-inline-end: 75.5vw;

  ${Responsive.SM} {
    font-size: 4.23vw;
    line-height: 5.03vw;
    margin-inline-end: 40.5vw;
  }
`;
