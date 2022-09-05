import * as S from './articleCard.styled';

const Card = ({title, image, summary, author}) => {
    return(
        <S.Card>
            <S.ImageContainer>
                <S.Image src={image} />
            </S.ImageContainer>
            <S.Title>{title}</S.Title>
            <S.Desc>{summary}</S.Desc>
            <S.Author>{author}</S.Author>
        </S.Card>
    );
}

export default Card;