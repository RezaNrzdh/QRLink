import { UserAgent } from "lib/useragent";
import { DesktopLayout } from "./desktop/layout";
import { MobileLayout } from "./mobile/layout";

const Layout = () => {
    console.log(UserAgent());
    return UserAgent() === 'Mobile' 
        ? <MobileLayout /> 
        : <DesktopLayout />;
}

export default Layout;