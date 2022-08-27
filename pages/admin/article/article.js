import Container from "hoc/container";
import Link from "next/link";
import axios from "axios";

const Article = ({articles}) => {
    return(
        <div style={{ direction: 'rtl'}}>
            <Container column>
                <br />
                <h3>Article List</h3>
                <Link href='./article/create'><a>New Article</a></Link>
                <br />
                <div>
                    {
                        articles.data.map((i) => {
                            return(
                                <>
                                    <div>
                                       <a>{i.title}</a> | <span>{i.summary}</span> | <span>{i.author}</span>
                                    </div>
                                    <br />                                
                                </>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const {data} = await axios.get(`${process.env.HOSTNAME}/api/article`);

    return{
        props: {
            articles: data
        }
    }
}

export default Article;