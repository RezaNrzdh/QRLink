import { Button } from 'components/ui/buttons/button';
import { Icon } from 'constants/icon';
import * as S from './hero.styled';

const Hero = () => {
    return(
        <S.Hero>
            <img src='https://dkstatics-public.digikala.com/digikala-adservice-banners/44a9f47cfb07aa1f1487c10cd807026f0e922db2_1662384097.jpg?x-oss-process=image/quality,q_95' />
        </S.Hero>
    );
}

export default Hero;