import Link from 'next/link';
import * as S from './textButton.Styled';

export const TextButton = ({
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
        <Link href={`${href}`}>
            <S.Container 
                as={as} 
                onClick={click} 
                fullWidth={fullWidth}
                btnSize={size}
                colors={colors} 
                radius={radius}
            >
                { props.children }
            </S.Container>        
        </Link>  
    );
}