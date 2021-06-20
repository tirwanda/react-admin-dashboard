import React from 'react';
import './NewUser.scss';

export default function NewUser() {
	return (
		<div className="newUser">
			<h1 className="newUser-title">New User</h1>

			<form className="newUser-form">
				<div className="newUser-form-item">
					<label>Username</label>
					<input type="text" placeholder="Username" />
				</div>

				<div className="newUser-form-item">
					<label>Full Name</label>
					<input type="text" placeholder="Your Full Name" />
				</div>

				<div className="newUser-form-item">
					<label>Email</label>
					<input type="text" placeholder="Your Email" />
				</div>

				<div className="newUser-form-item">
					<label>Phone Number</label>
					<input type="text" placeholder="Your Phone Number (+62)" />
				</div>

				<div className="newUser-form-item">
					<label>Address</label>
					<input type="text" placeholder="Your Address" />
				</div>

				<div className="newUser-form-item">
					<label>Password</label>
					<input type="Password" placeholder="password" />
				</div>

				<div className="newUser-form-item">
					<label>Gender</label>
					<div className="newUser-gender">
						<input
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<label for="male">Male</label>
						<input
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<label for="female">Female</label>
						<input
							type="radio"
							name="gender"
							id="other"
							value="other"
						/>
						<label for="other">Other</label>
					</div>
				</div>

				<div className="newUser-form-item">
					<label>Active</label>
					<select
						className="newUser-select"
						name="active"
						id="active"
					>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="newUser-btn">Create</button>
			</form>
		</div>
	);
}
