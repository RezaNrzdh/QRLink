import { Color } from 'help/color';
import { Typography } from 'help/typography';
import styled from 'styled-components';

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