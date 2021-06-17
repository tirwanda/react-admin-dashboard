import React from 'react';
import './Navbar.scss';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-wrapper">
				<div className="nav-left">
					<span className="logo">Myadmin</span>
				</div>
				<div className="nav-right">
					<div className="nav-icon-container">
						<NotificationsNoneIcon />
						<span className="nav-icon-badge">2</span>
					</div>

					<div className="nav-icon-container">
						<LanguageIcon />
					</div>

					<div className="nav-icon-container">
						<SettingsIcon />
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
