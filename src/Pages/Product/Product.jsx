import React from 'react';
import { Link } from 'react-router-dom';

import Chart from '../../Components/Chart/Chart';
import { productData } from '../../dummyData';

import { CloudUpload } from '@material-ui/icons';

import './Product.scss';

export default function Product() {
	return (
		<div className="product">
			<div className="product-title-container">
				<h1 className="product-title">Edit Product</h1>
				<Link to="/new-product">
					<button className="product-btn-add">Create</button>
				</Link>
			</div>

			<div className="product-top">
				<div className="product-top-left">
					<Chart
						data={productData}
						title="Sales Analytics"
						dataKey="Sales"
					/>
				</div>
				<div className="product-top-right">
					<div className="product-detail-top">
						<img
							src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="product-detail-img"
						/>
						<span className="product-detail-title">
							MacBook Pro M1
						</span>
					</div>

					<div className="product-detail-bottom">
						<div className="product-detail-item">
							<span className="product-detail-key">id:</span>
							<span className="product-detail-value">123</span>
						</div>
						<div className="product-detail-item">
							<span className="product-detail-key">Sales:</span>
							<span className="product-detail-value">
								23,000,000
							</span>
						</div>
						<div className="product-detail-item">
							<span className="product-detail-key">Active:</span>
							<span className="product-detail-value">Yes</span>
						</div>
						<div className="product-detail-item">
							<span className="product-detail-key">
								In Stock:
							</span>
							<span className="product-detail-value">Yes</span>
						</div>
					</div>
				</div>
			</div>

			<div className="product-bottom">
				<form className="product-bottom-form">
					<div className="product-bottom-form-left">
						<label>Product Name</label>
						<input type="text" placeholder="Macbook Pro M1" />
						<label>In Stock</label>
						<select name="inStock" id="inStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="product-bottom-form-right">
						<div className="product-upload">
							<img
								src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt=""
								className="product-upload-img"
							/>
							<label for="file">
								<CloudUpload />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: 'none' }}
							/>
						</div>
						<button className="product-btn">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
