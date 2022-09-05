import styled from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';


export const Unordered = styled.ul`
    display: flex;
`;

export const List = styled.li`
    display: flex;
    align-items: center;
    list-style: none;
    height: 40px;
    padding: 0 16px;
    ${Typography.Body2}
    a {
        color: ${Color.text.main}
    }
`;