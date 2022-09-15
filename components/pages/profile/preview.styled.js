import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-right: auto;
    width: 375px;
    .emptyContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        img {
            width: 96px;
        };
        label{
            margin-top: 16px;
            ${Typography.Subtitle1};
            color: ${Color.text.main};
        };
        span{
            margin-top: 8px;
            ${Typography.Body2};
            color: ${Color.text.main};
        }
    }
`;