import Container from "hoc/container";
import Link from "next/link";
import Axios from 'axios';

const CreateNewArticle = () => {

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const image = event.target.image.value;
        const summary = event.target.summary.value;
        const description = event.target.description.value;
        const author = event.target.author.value;

        try{
            await Axios.post('/api/article',{
                title: title,
                image: image,
                summary: summary,
                description: description,
                author: author
            });
        }
        catch(err){
            throw new err;
        }
    }

    return(
        <div style={{ direction: 'rtl'}}>
            <Container column>
                <br />
                <h3>Create New Article</h3>
                <Link href='/admin/article'><a>Back</a></Link>
                <br />
                <form onSubmit={onSubmitHandler}>
                    <label>عنوان مقاله</label>
                    <br />
                    <input id="title" name="title" />
                    <br />
                    <label>آدرس عکس</label>
                    <br />
                    <input id="image" name="image" />
                    <br />
                    <label>خلاصه متن</label>
                    <br />
                    <input id="summary" name="summary" />
                    <br />
                    <label>متن</label>
                    <br />
                    <textarea id="description" name="description"></textarea>
                    <br />
                    <label>نویسنده</label>
                    <br />
                    <input id="author" name="author"/>
                    <br /><br />
                    <button type="submit">ثبت مقاله</button>                                               
                </form>
            </Container>
        </div>
    )
}

export default CreateNewArticle;