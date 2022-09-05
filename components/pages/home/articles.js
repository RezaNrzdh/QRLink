import Container from 'hoc/container';
import Card from './articleCard';
import * as S from './article.styled';

const Articles = ({articles}) => {
    return(
        <S.Article>
            <Container column>
                <S.Title>
                    <label>جدیدترین مطالب</label>
                    <h3>مقالات و آموزش ها</h3>                    
                </S.Title>
                <S.CardsContainer>
                    {
                        articles.map((i, index) => {
                            return <Card
                                        key={index}
                                        title={i.title}
                                        image={i.image}
                                        summary={i.summary}
                                        author={i.author}
                                    />
                        })
                    }
                </S.CardsContainer>
            </Container>
        </S.Article>
    );
}

export default Articles;