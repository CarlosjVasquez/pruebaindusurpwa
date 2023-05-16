import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconPositive from '../../public/icons/positive.svg';
import iconNegative from '../../public/icons/negative.svg';

export const DivCard = styled.div`
  width: 32vw;
  min-height: 10.72vw;

  ${Responsive.SM} {
    width: 92vw;
    min-height: 28vw;
  }
`;

export const DivCardBody = styled.div`
  width: 75%;
`;

export const TextTitleCard = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 1.11vw;
  line-height: 1.67vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 4.17vw;
    padding-left: 4.17vw;
  }
`;

export const TextSubtitleCard = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #737373;
  font-size: 0.9vw;
  line-height: 1.39vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 4.17vw;
  }
`;

export const TextNumber1 = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1253c9;
  font-size: 2.22vw;
  line-height: 2.71vw;
  padding-left: 1.67vw;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 6.77vw;
    padding-left: 4.17vw;
  }
`;

export const TextFooterCard = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 0.98vw;
  line-height: 1.39vw;
  color: #1253c9;
  text-decoration: none;

  ${Responsive.SM} {
    font-size: 2.55vw;
    line-height: 3.47vw;
  }
`;

export const IconPositive = styled.a`
  background: url(${iconPositive.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.67vw;
  min-height: 1.67vw;

  ${Responsive.SM} {
    width: 4.17vw;
    min-height: 4.17vw;
  }
`;

export const IconNegative = styled.a`
  background: url(${iconNegative.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.67vw;
  min-height: 1.67vw;

  ${Responsive.SM} {
    width: 4.17vw;
    min-height: 4.17vw;
  }
`;
