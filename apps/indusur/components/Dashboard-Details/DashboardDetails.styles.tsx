import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const Container = styled.div`
  .progress {
    height: 0.56vw;
  }

  .progress-bar {
    background: #1253c9;
  }

  ${Responsive.SM} {
    .progress {
      height: 1.39vw;
    }
  }
`;

export const TitleDetail = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 1.67vw;
  line-height: 1.67vw;

  ${Responsive.SM} {
    font-size: 4.17vw;
    line-height: 4.17vw;
  }
`;

export const SubtitleDetail = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #737373;
  font-size: 0.9vw;
  line-height: 1.39vw;
  padding-top: 0.5vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-top: 1vw;
  }
`;

export const TitlePercent = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1253c9;
  font-size: 1.39vw;
  line-height: 1.67vw;
  padding-bottom: 0.83vw;

  ${Responsive.SM} {
    font-size: 3.47vw;
    line-height: 4.17vw;
    padding-bottom: 2.08vw;
  }
`;

export const ContainerAmount = styled.div`
  margin-top: 1.6vw;

  ${Responsive.SM} {
    margin-top: 4vw;
  }
`;

export const TextAmount = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1253c9;
  font-size: 2.22vw;
  line-height: 2.71vw;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 6.77vw;
  }
`;

export const TextGoal = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #737373;
  font-size: 1.53vw;
  line-height: 1.88vw;

  ${Responsive.SM} {
    font-size: 3.82vw;
    line-height: 4.69vw;
  }
`;

export const SubtitleAmount = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.9vw;
  line-height: 1.39vw;

  ${Responsive.SM} {
    font-size: 2.8vw;
    line-height: 3.47vw;
  }
`;

export const SubtitleGoal = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: #1e293b;
  font-size: 0.9vw;
  line-height: 1.67vw;

  ${Responsive.SM} {
    font-size: 2.8vw;
    line-height: 4.17vw;
  }
`;

export const ContainerData = styled.div`
  margin-top: 2.57vw;

  ${Responsive.SM} {
    margin-top: 6.42vw;
  }
`;

export const TitleData = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  color: #1e293b;
  font-size: 1.11vw;
  line-height: 1.39vw;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 3.47vw;
  }
`;

export const TitleTotal = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  color: #1e293b;
  font-size: 1.11vw;
  line-height: 1.39vw;
  margin-inline-end: 3vw;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 3.47vw;
    margin-inline-end: 8vw;
  }
`;

export const ContainerDataNumbers = styled.div`
  margin-inline-end: 2.64vw;

  ${Responsive.SM} {
    margin-inline-end: 6.6vw;
  }
`;

export const TextDataNumbers = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #737373;
  font-size: 1.11vw;
  line-height: 1.67vw;

  ${Responsive.SM} {
    font-size: 3vw;
    line-height: 4.17vw;
  }
`;

export const SubtitleFact = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  color: #1253c9;
  font-size: 0.9vw;
  line-height: 1.67vw;

  ${Responsive.SM} {
    font-size: 2.8vw;
    line-height: 4.17vw;
  }
`;

export const TextDataNumFact = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  color: #1253c9;
  font-size: 1.11vw;
  line-height: 1.67vw;

  ${Responsive.SM} {
    font-size: 3vw;
    line-height: 4.17vw;
  }
`;
