import Container from 'hoc/container';
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
                    
                </S.CardsContainer>
            </Container>
        </S.Article>
    );
}

export default Articles;