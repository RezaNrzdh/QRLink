import Container from "hoc/container";
import Link from "next/link";
import Axios from 'axios';

const Article = () => {
    return(
        <div style={{ direction: 'rtl'}}>
            <Container column>
                <br />
                <h3>Article List</h3>
                <Link href='./article/create'><a>New Article</a></Link>
                <br />
            </Container>
        </div>
    )
}

export default Article;