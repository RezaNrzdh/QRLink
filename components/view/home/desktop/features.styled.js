import styled from "styled-components";
import {Color} from 'constants/color';
import { Typography } from 'constants/typography';

export const Features = styled.div`
    margin-top: 65px;
    margin-bottom: 56px;
`;

export const Feature = styled.div`
    display: flex;
    height: 500px;
`;

export const Image = styled.div`
    display: flex;
    width: 50%;
    img{
        padding: 32px;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    h2{
        color: ${Color.text.main};
        ${Typography.Headline4};
    }
    p{
        color: ${Color.text.main};
        ${Typography.Body2};
    }
`;

