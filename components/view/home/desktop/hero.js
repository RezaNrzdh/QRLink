import { Button } from 'components/shared/buttons/button';
import { Icon } from 'constants/icon';
import * as S from './hero.styled';

const Hero = () => {
    return(
        <S.Hero>
            <S.Container>
                <S.RightSide>
                    <img src='/images/zigzagline.svg' />
                    <h3>حرفه ای شروع کنید</h3>
                    <label>کسب و کار خودتو بساز و در بایو اینستاگرام قرار بده!</label>
                    <Button colors={'primary'} fullWidth={false}>رایگان بسازید</Button>
                </S.RightSide>
                <S.LeftSide>
                    <img className='shapes' src='/images/shapes.svg' />
                </S.LeftSide>
                <S.Circle>
                    <div>
                        <Icon icon='icon-arrow-down-filled' size={32} />
                    </div>
                </S.Circle>
            </S.Container>
        </S.Hero>
    );
}

export default Hero;