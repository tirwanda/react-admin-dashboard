import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

import {
	LineStyle,
	Timeline,
	TrendingUp,
	Group,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	DynamicFeed,
	QuestionAnswer,
	WorkOutline,
	Report,
} from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-wrapper">
				<div className="sidebar-menu">
					<h3 className="sidebar-title">Dashboard</h3>
					<ul className="sidebar-list">
						<Link to="/" className="link-tag">
							<li className="sidebar-list-item active">
								<LineStyle className="sidebar-icon" />
								Home
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<Timeline className="sidebar-icon" />
								Analytic
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<TrendingUp className="sidebar-icon" />
								Sales
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Quick Menu</h3>
					<ul className="sidebar-list">
						<Link to="/users" className="link-tag">
							<li className="sidebar-list-item">
								<Group className="sidebar-icon" />
								Users
							</li>
						</Link>
						<Link to="/products" className="link-tag">
							<li className="sidebar-list-item">
								<Storefront className="sidebar-icon" />
								Products
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<AttachMoney className="sidebar-icon" />
								Transactions
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<BarChart className="sidebar-icon" />
								Reports
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Notifications</h3>
					<ul className="sidebar-list">
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<MailOutline className="sidebar-icon" />
								Mail
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<DynamicFeed className="sidebar-icon" />
								Feedback
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<QuestionAnswer className="sidebar-icon" />
								Messages
							</li>
						</Link>
					</ul>
				</div>

				<div className="sidebar-menu">
					<h3 className="sidebar-title">Staff</h3>
					<ul className="sidebar-list">
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<WorkOutline className="sidebar-icon" />
								Manage
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<Timeline className="sidebar-icon" />
								Analytics
							</li>
						</Link>
						<Link to="#" className="link-tag">
							<li className="sidebar-list-item">
								<Report className="sidebar-icon" />
								Reports
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
