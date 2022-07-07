import * as S from './outlinedButton.styled';

export const OutlinedButton = ({
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