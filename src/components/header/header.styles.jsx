import styled, { css } from 'styled-components';
import { Navbar, NavDropdown } from 'react-bootstrap'

export const HeaderNav = styled(Navbar)`
    background: #45484d;
    background: -moz-linear-gradient(top,  #45484d 0%, #000000 23%); 
    background: -webkit-linear-gradient(top,  #45484d 0%,#000000 23%);
    background: linear-gradient(to bottom,  #45484d 0%,#000000 23%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
    z-index: 20;
`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
`;

const languageStyle = css`
    margin-right: 20px;
`;

const MenuToggleStyle = css`
    margin-left: 10px;
`;

const getDropDownStyles = ({...props}) => {
    return props.islanguage ? languageStyle : MenuToggleStyle;
}

export const NavDropdownMenuToggle = styled(NavDropdown)`
    ${getDropDownStyles}
`;