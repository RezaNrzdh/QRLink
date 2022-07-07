import { Icon } from 'constants/icon';
import * as S from './card.styled';

const Card = ({logo, desc, author}) => {
    return(
        <S.Card>
            <S.Title>
                <div className='customerLogo'>
                    <img src={logo}/>
                </div>
                <Icon icon='icon-quote-up-filled' size={32} />
            </S.Title>
            <S.Desc>{desc}</S.Desc>
            <S.Author>{author}</S.Author>
        </S.Card>
    );
}

export default Card;