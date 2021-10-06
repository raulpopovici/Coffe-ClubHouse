import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav` 
background:#ffb703;
height:60px;
justify-content:space-betweeen;
top:0;
left:0;
display:flex;
position:relative;
width:100%;
padding:auto;
margin:auto;
z-index:10;
`

export const Menu = styled.nav`
position:fixed;
right:0;
width:20%;
background:#000;
justify-content:space-between;
top:0;
height:50px;
margin:12px 100px 50px 50px

`

export const MenuLink = styled(Link)`


position:fixed;
display:flex;
align-items:center;
height:10px;
width:20px;
color:#fff;
border:2px solid red;

`

