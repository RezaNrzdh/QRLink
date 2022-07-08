import Container from "hoc/container";
import Axios from 'axios';

const Customer = () => {

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const logo = event.target.logo.value;
        const desc = event.target.desc.value;
        const author = event.target.author.value;

        await Axios.post('/api/customer', {
            logo: logo,
            desc: desc,
            author: author
        });
    }

    return(
        <div style={{direction: 'rtl'}}>
            <Container column>
                <br />
                <h3>Create New Customer</h3><br />
                <form onSubmit={onSubmitHandler}>
                    <label>Logo</label>
                    <br />
                    <input type={"text"} id='logo' name="logo" />
                    <br />
                    <label>Description</label>
                    <br />
                    <textarea id="desc" name="desc"></textarea>
                    <br />
                    <label>Author</label>
                    <br />
                    <input type={"text"} id="author" name="author" />
                    <br /><br />               
                    <button type="submit">SUBMIT</button>
                </form>
            </Container>
        </div>

    );
}

export default Customer;