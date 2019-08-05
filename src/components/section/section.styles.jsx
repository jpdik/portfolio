import styled, { css } from 'styled-components';
import { Row } from 'react-bootstrap'

export const RowMargin = styled(Row)`
    margin-bottom: 4em;
`;

const greyStyle = css`
    background-color: #ebebeb;
`;

const darkStyle = css`
    background-color: #0c0c0c;
    color: white;
`;

const whiteStyle = css`
    background-color: white;
`;

const getBackgroundColor = props => {

    switch (props.bgStyle) {
        case 'grey':
            return greyStyle;
        case 'dark':
            return darkStyle;
        default:
            return whiteStyle;
    }
}

export const SectionBackGround = styled.section`
    padding: 6em 0;
    ${getBackgroundColor}
`;

export const Title = styled.h5`
    font-size: 1.7rem;
    line-height: 1.875;
    margin-bottom: 1.5rem;
    letter-spacing: .1rem;
    ${getBackgroundColor}
`;

export const Description = styled.h1`
    font-size: 1.3rem;
    ${getBackgroundColor}
`;