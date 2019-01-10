import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar>
			<NavItem href='/'>Principal</NavItem>
			<NavItem href='/mesa'>Mesa</NavItem>
			<NavItem href='/cuadros'>Cuadros</NavItem>
			<NavItem href='/contadores'>Contadores</NavItem>
		</Navbar>
	</div>
);

export default Header;