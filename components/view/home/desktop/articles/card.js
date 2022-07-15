import * as S from './card.styled';

const Card = () => {
    return(
        <S.Card>
            <S.ImageContainer>
                <S.Image src='/images/img.jpg' />
            </S.ImageContainer>
            <S.Title>جدیدترین مطالب سایت</S.Title>
            <S.Desc>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</S.Desc>
            <S.Author>ادمین</S.Author>
        </S.Card>
    );
}

export default Card;