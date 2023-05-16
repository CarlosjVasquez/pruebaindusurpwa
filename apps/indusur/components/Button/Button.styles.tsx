import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const ButtonContinue = styled.button`
  width: 100%;
  min-height: 3.33vw;
  justify-content: center;
  align-items: center;
  border: none;
  background: #1253c9;
  border-radius: 0.28vw;

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  //text
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  font-size: 1.11vw;
  line-height: 1.67vw;
  padding-left: 2vw;
  padding-right: 2vw;

  ${Responsive.SM} {
    min-height: 8.33vw;
    border-radius: 0.69vw;

    //text
    font-weight: 300;
    font-size: 2.5vw;
    line-height: 4.17vw;
    padding-top: 2vw;
    padding-bottom: 3vw;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  min-height: 3.33vw;
  justify-content: center;
  align-items: center;
  border: none;
  background: #f2f6fd;
  border-radius: 0.28vw;

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  //text
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  color: #1253c9;
  font-size: 1.11vw;
  line-height: 1.67vw;
  padding-left: 2vw;
  padding-right: 2vw;

  ${Responsive.SM} {
    min-height: 8.33vw;
    border-radius: 0.69vw;

    //text
    font-size: 2.5vw;
    line-height: 4.17vw;
    padding-top: 2vw;
    padding-bottom: 3vw;
  }
`;

export const ButtonInfo = styled.button`
  width: 100%;
  min-height: 3.33vw;
  justify-content: center;
  align-items: center;
  border: none;
  background: #eff3f8;
  border-radius: 0.28vw;

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  //text
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  color: #1253c9;
  font-size: 1.11vw;
  line-height: 1.67vw;
  padding-left: 2vw;
  padding-right: 2vw;

  ${Responsive.SM} {
    min-height: 8.33vw;
    border-radius: 0.69vw;

    //text
    font-size: 2.5vw;
    line-height: 4.17vw;
    padding-top: 2vw;
    padding-bottom: 3vw;
  }
`;

export const StyleSpinner = styled.div`
  color: white;
`;

export const StyleSpinnerCancel = styled.div`
  color: #1253c9;
`;
