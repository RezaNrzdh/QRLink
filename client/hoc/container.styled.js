import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 1280px;
    height: inherit;
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