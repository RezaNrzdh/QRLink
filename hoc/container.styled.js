import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${ props => props.column ? 'column' : null };
    justify-content: ${ props => props.center ? 'center' : null };
    justify-content: ${ props => props.between ? 'space-between' : null };
    align-items: ${ props => props.middle ? 'center' : null };
    position: relative;
    width: 1280px;
    height: ${ props => props.notheight ? null : 'inherit' };
    margin-left: auto;
    margin-right: auto;

    
    @media (max-width: 1280px) {
        width: 1194px;
    }
    @media (max-width: 1194px) {
        width: 1024px;
    }
    @media (max-width: 1024px) {
        width: 960px;
    }
`;