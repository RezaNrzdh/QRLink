import {Layout} from "components/index";
import Container from "hoc/container";

const Dashboard = () => {
    return(
        <Layout>
            <Container column>
                <br />
                <h1>داشبورد</h1>
                <br />
                <label>انتخاب نام صفحه</label>
                <input type='text' placeholder="hefdah.ir/rezanrzdh" style={{width: '250px', height: '36px'}}/>
                <br />
                <button type='submit' style={{width: '250px', height: '36px'}}>ساخت QRCode</button>
                <br />
            </Container>
        </Layout>
    );
}

export default Dashboard;