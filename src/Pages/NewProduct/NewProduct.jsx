import React from 'react';
import './NewProduct.scss';

export default function NewProduct() {
	return (
		<div className="newProduct">
			<h1 className="newProduct-title">New Product</h1>
			<form className="newProduct-form">
				<div className="newProduct-form-item">
					<label>Image</label>
					<input type="file" id="file" />
				</div>
				<div className="newProduct-form-item">
					<label>Name</label>
					<input type="text" placeholder="Apple Airpods" />
				</div>
				<div className="newProduct-form-item">
					<label>Stock</label>
					<input type="text" placeholder="123" />
				</div>
				<div className="newProduct-form-item">
					<label>Active</label>
					<select name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<button className="newProduct-form-btn">Create</button>
			</form>
		</div>
	);
}
