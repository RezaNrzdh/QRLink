import styled, {css} from 'styled-components';
import { Color } from 'utils/color';
import { Typography } from 'utils/typography';

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
        <Container 
            as={as} 
            href={href} 
            onClick={click} 
            fullWidth={fullWidth}
            btnSize={size}
            colors={colors} 
            radius={radius}
        >
            { props.children }
        </Container>  
    );
}

const Colors = ({colors}) => {
    if(colors === 'dark'){
        return css`
            color: ${Color.text.main};
            &:hover{
                background-color: ${Color.action.hover};
            }
        `;
    }
}

const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    width: ${ p => p.fullWidth ? '100%' : null};
    height: 40px;
    border: none;
    border-radius: ${p => p.radius };
    background-color: none;
    font-family: VazirMatnFont;
    transition: all ease-in-out 0.3s;
    ${Colors};
    ${Typography.Body2}
    `;