import * as S from './Layout.styles';

const Layout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <S.Layout className="p-0">
      <S.Container>{children}</S.Container>
    </S.Layout>
  );
};

export default Layout;
