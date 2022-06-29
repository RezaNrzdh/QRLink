import Link from 'next/link';
import styled from 'styled-components';
import { Color } from 'help/color';
import { Typography } from 'help/typography';

const Navigation = () => {
    return(
        <Unordered>
            <List><Link href=''><a>تعرفه</a></Link></List>
            <List><Link href=''><a>درباره</a></Link></List>
            <List><Link href=''><a>تماس</a></Link></List>
            <List><Link href=''><a>سوالات متداول</a></Link></List>
        </Unordered>
    );
}

export {Navigation};

const Unordered = styled.ul`
    display: flex;
`;

const List = styled.li`
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