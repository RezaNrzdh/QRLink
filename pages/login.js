import { AuthLayout } from "components";
import LoginComponent from "components/pages/login";

const LoginPage = () => {
    return(
        <AuthLayout>
            <LoginComponent />
        </AuthLayout>
    );
}

export default LoginPage;