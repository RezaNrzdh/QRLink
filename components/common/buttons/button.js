import * as S from './button.styled';

export const Button = ({
    as = 'a',
    click = null,
    fullWidth = false,
    size = 'normal',
    radius = '20px',
    href,
    colors,
    ...props
}) => {
    return(
        <S.Container 
            as={as} 
            href={href} 
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