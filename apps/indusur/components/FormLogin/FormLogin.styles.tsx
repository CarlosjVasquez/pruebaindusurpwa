import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconLogin from '../../public/bannerLoginImage.jpg';

export const ContainerIcon = styled.div`
  margin-top: 2.78vw;
  margin-inline-start: 2.78vw;

  ${Responsive.SM} {
    margin-top: 6vw;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const ImgBanner = styled.div`
  ${Responsive.SM} {
    background: linear-gradient(
      to bottom,
      rgb(48, 78, 138) 0%,
      rgb(131, 172, 211) 100%
    );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100%;
    padding-bottom: 50%;
  }
`;

export const ImgBannerApp = styled.div`
  ${Responsive.SM} {
    background: url(${iconLogin.src});
    background-position: center -20vw;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 40vw;
    margin-top: 5vw;
  }
`;

export const ContainerText = styled.div`
  margin-top: 6.44vw; //14.44
  margin-inline-start: 10.42vw;

  ${Responsive.SM} {
    margin-top: 2.5vw;
    margin-inline-start: 2.94vw;
  }
`;

export const ContainerCard = styled.div`
  ${Responsive.SM} {
    margin-top: 12vw;
    margin-inline-start: 3.94vw;
    margin-inline-end: 3.94vw;
    min-height: 100%;
  }
`;

export const TextTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1253c9;
  font-size: 2.5vw;
  line-height: 3.06vw;

  ${Responsive.SM} {
    font-size: 6.25vw;
    line-height: 7.64vw;
  }
`;

export const TextSubtitle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  color: #1c2533;
  font-size: 1.11vw;
  line-height: 1.32vw;
  padding-inline-end: 10.45vw;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 3.3vw;
  }
`;

export const ContainerInputs = styled.div`
  margin-top: 2.15vw;
  margin-inline-start: 10.42vw;

  ${Responsive.SM} {
    margin-top: 5.38vw;
    margin-inline-start: 2.94vw;
  }
`;

export const ContainerInputText = styled.div`
  margin-top: 1.32vw;
  margin-inline-end: 10.45vw;

  ${Responsive.SM} {
    margin-top: 3.3vw;
    margin-inline-end: 3.45vw;
  }
`;

export const ContainerPsw = styled.div`
  margin-top: 1.11vw;
  margin-inline-end: 10.45vw;
  align-items: flex-end;
  justify-content: end;
  text-align: end;

  ${Responsive.SM} {
    margin-top: 2.78vw;
  }
`;

export const TextLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #1253c9;
  text-decoration: none;
  font-size: 0.9vw;
  line-height: 1.11vw;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 2.78vw;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 3.33vw;
  margin-inline-end: 10.45vw;

  ${Responsive.SM} {
    margin-top: 6.33vw;
    margin-bottom: 8.33vw;
    margin-inline-end: 3.45vw;
  }
`;

export const ContainerInfo = styled.div`
  margin-top: 12.29vw;
  margin-inline-start: 2.78vw;
  align-items: center;

  ${Responsive.SM} {
    margin-top: 15vw;
    margin-inline-start: 6.94vw;
  }
`;

export const TextInfo = styled.h5`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  padding-inline-start: 10px;
  letter-spacing: 0.025vw;
  font-size: 0.97vw;
  line-height: 1.18vw;

  ${Responsive.SM} {
    letter-spacing: 0.063vw;
    font-size: 2.43vw;
    line-height: 2.95vw;
  }
`;

export const ContainerImg = styled.img`
  width: 1.92vw;
  min-height: 1.92vw;

  ${Responsive.SM} {
    width: 4.65vw;
    min-height: 4.65vw;
  }
`;

export const ContainerDivImg = styled.div`
  background: white;
  min-height: 4.44vw;
  margin-top: 1.2vw;
  border-bottom: 1px solid #e2e8f0;

  ${Responsive.SM} {
    min-height: 11.3vw;
    margin-top: 2.8vw;
  }
`;
