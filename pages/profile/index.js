import {Layout} from "components/index";
import BodyComponent from "components/pages/profile/body";
import SideComponent from "components/pages/profile/side";
import Container from "hoc/container";

const Dashboard = () => {
    return(
        <Layout>
            <Container notheight>
                <SideComponent />
                <BodyComponent />
            </Container>
        </Layout>
    );
}

export default Dashboard;