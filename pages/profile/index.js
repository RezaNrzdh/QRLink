import {Layout} from "components/index";
import SideComponent from "components/pages/profile/side";
import Container from "hoc/container";

const Dashboard = () => {
    return(
        <Layout>
            <Container>
                <SideComponent />
                <div>Content</div>
            </Container>
        </Layout>
    );
}

export default Dashboard;