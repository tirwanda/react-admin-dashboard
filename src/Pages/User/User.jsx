import React from 'react';
import { Link } from 'react-router-dom';
import {
	PermIdentity,
	CalendarToday,
	PhoneIphone,
	MailOutline,
	LocationOn,
	CloudUpload,
} from '@material-ui/icons';
import './User.scss';

export default function User() {
	return (
		<div className="user">
			<div className="user-title-container">
				<h1 className="user-title">Edit User</h1>
				<Link to="/new-user">
					<button className="user-btn-add">Create</button>
				</Link>
			</div>

			<div className="user-show-container">
				<div className="user-show">
					<div className="user-show-top">
						<img
							src="https://images.pexels.com/photos/4186329/pexels-photo-4186329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt="avatar"
							className="user-show-top-img"
						/>
						<div className="user-show-top-title">
							<span className="user-show-username">
								Edho Dwi Tirwanda
							</span>
							<span className="user-show-job">
								Software Engineer
							</span>
						</div>
					</div>

					<div className="user-show-bottom">
						<span className="user-show-bottom-title">
							Account Detail
						</span>
						<div className="user-show-bottom-info">
							<PermIdentity className="user-show-bottom-info-icon" />
							<span className="user-show-bottom-info-title">
								Edho Dwi
							</span>
						</div>

						<div className="user-show-bottom-info">
							<CalendarToday className="user-show-bottom-info-icon" />
							<span className="user-show-bottom-info-title">
								08 June 1997
							</span>
						</div>

						<span className="user-show-bottom-title">
							Contact Detail
						</span>
						<div className="user-show-bottom-info">
							<PhoneIphone className="user-show-bottom-info-icon" />
							<span className="user-show-bottom-info-title">
								+62 1234 1234 123
							</span>
						</div>

						<div className="user-show-bottom-info">
							<MailOutline className="user-show-bottom-info-icon" />
							<span className="user-show-bottom-info-title">
								edhodwitirwanda@gmail.com
							</span>
						</div>

						<div className="user-show-bottom-info">
							<LocationOn className="user-show-bottom-info-icon" />
							<span className="user-show-bottom-info-title">
								Jakarta | Indonesia
							</span>
						</div>
					</div>
				</div>
				<div className="user-update">
					<span className="user-update-title">Edit</span>
					<form className="user-update-form">
						<div className="user-update-form-left">
							<div className="user-update-form-left-item">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Edho Dwi Trwanda"
									className="user-update-input"
								/>
							</div>

							<div className="user-update-form-left-item">
								<label>Username</label>
								<input
									type="text"
									placeholder="Edho Dwi"
									className="user-update-input"
								/>
							</div>

							<div className="user-update-form-left-item">
								<label>email</label>
								<input
									type="text"
									placeholder="edhodwitirwanda@gmail.com"
									className="user-update-input"
								/>
							</div>

							<div className="user-update-form-left-item">
								<label>Phone Number</label>
								<input
									type="text"
									placeholder="+62 1234 1234 123"
									className="user-update-input"
								/>
							</div>

							<div className="user-update-form-left-item">
								<label>Address</label>
								<input
									type="text"
									placeholder="Edho Dwi"
									className="user-update-input"
								/>
							</div>

							<div className="user-update-form-left-item">
								<label>Date of Birth</label>
								<input
									type="text"
									placeholder="08 June 1997"
									className="user-update-input"
								/>
							</div>
						</div>
						<div className="user-update-form-right">
							<div className="user-update-form-right-upload">
								<img
									className="user-update-avatar"
									src="https://images.pexels.com/photos/4186329/pexels-photo-4186329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt=""
								/>
								<label htmlFor="file">
									<CloudUpload className="upload-icon" />
								</label>
								<input
									type="file"
									id=""
									file
									style={{ display: 'none' }}
								/>
							</div>
							<button className="user-update-btn">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
