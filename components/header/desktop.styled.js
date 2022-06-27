import styled from 'styled-components';
import {Elevation} from 'components/index';
import { Color } from 'help/color';

export const Header = styled.header`
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    box-shadow: ${Elevation.header};
    z-index: 999;
    .logo{
        display: flex;
        width: 160px;
        height: 30px;
        cursor: pointer;
        svg{
            fill: ${Color.primary.main}
        }
    }
`;

export const Auth = styled.div`
    display: flex;
    margin-right: auto;
    a:first-child{
        margin-left: 16px;
    }
`;