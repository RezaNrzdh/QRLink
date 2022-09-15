import { AuthLayout, Layout } from "components";
import WelcomeComponent from "components/pages/welcome";

const WelcomePage = () => {
    return(
        <AuthLayout>
            <WelcomeComponent />
        </AuthLayout>
    );
}

export default WelcomePage;