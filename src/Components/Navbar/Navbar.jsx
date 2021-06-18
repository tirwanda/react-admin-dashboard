import React from 'react';
import './Navbar.scss';

import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-wrapper">
				<div className="nav-left">
					<span className="logo">Myadmin</span>
				</div>
				<div className="nav-right">
					<div className="nav-icon-container">
						<NotificationsNone />
						<span className="nav-icon-badge">2</span>
					</div>

					<div className="nav-icon-container">
						<Language />
					</div>

					<div className="nav-icon-container">
						<Settings />
					</div>

					<img
						src="https://images.pexels.com/photos/5943108/pexels-photo-5943108.jpeg?cs=srgb&dl=pexels-nathan-j-hilton-5943108.jpg&fm=jpg"
						alt=""
						className="avatar"
					/>
				</div>
			</div>
		</div>
	);
}
