import Link from 'next/link';
import * as S from './button.styled';

export const Button = ({
    click = null,
    fullWidth = false,
    size = 'normal',
    radius = '20px',
    colors,
    ...props
}) => {
    return(
        <S.Container 
            onClick={click} 
            fullWidth={fullWidth}
            btnSize={size}
            colors={colors} 
            radius={radius}
        >
            { props.children }
        </S.Container>  
    );
}