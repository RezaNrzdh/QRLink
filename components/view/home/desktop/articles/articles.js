import Container from 'hoc/container';
import Card from './card';
import * as S from './article.styled';

const Articles = () => {
    return(
        <S.Article>
            <Container column>
                <S.Title>
                    <label>جدیدترین مطالب</label>
                    <h3>مقالات و آموزش ها</h3>                    
                </S.Title>
                <S.CardsContainer>
                    {
                        [0,0,0,0].map(() => {
                            return <Card />
                        })
                    }
                </S.CardsContainer>
            </Container>
        </S.Article>
    );
}

export default Articles;