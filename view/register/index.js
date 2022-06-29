import RegisterViewDesktop from './desktop';
import RegisterViewMobile from './mobile';

const RegisterView = ({isMobile, ...props}) => {
    return isMobile === true
    ? <RegisterViewMobile />
    : <RegisterViewDesktop click={props.submitHandler} />;
}

export default RegisterView;