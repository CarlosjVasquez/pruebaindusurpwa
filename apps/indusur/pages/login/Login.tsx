import BannerLogin from '../../components/BannerLogin';
import FormLogin from '../../components/FormLogin/FormLogin';

export const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-between bg-white">
        <FormLogin />
        <BannerLogin />
      </div>
    </>
  );
};
export default Login;
