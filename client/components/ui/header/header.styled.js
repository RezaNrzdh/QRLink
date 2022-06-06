import styled from 'styled-components';
import {Elevation} from 'components/index';
import { Color } from 'components/utils/color';

export const DesktopHeader = styled.header`
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    box-shadow: ${Elevation.huge};
    z-index: 999;
    svg{
        width: 150px;
        height: 30px;
        fill: ${Color.primary.main}
    }
`;

export const Auth = styled.div`
    
`;