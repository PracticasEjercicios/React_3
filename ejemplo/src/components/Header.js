import React from 'react';
// import { Link } from 'react-router-dom';

const Header = (props) =>
(
	<div>
		<a href='/'>
			Principal
		</a>
		<br />
		<a href='/saludar'>
			Saludar
		</a>
		<br />
		<a href='/saludar/bedu'>
			Bedu
		</a>
	</div>
);

export default Header;