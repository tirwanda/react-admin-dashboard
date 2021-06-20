import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';

import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';

import './ProductList.scss';

export default function ProductList() {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'product',
			headerName: 'Product',
			width: 180,
			renderCell: (params) => {
				return (
					<div className="productList-img">
						<img src={params.row.img} alt="" />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: 'stock', headerName: 'Stock', width: 150 },
		{ field: 'status', headerName: 'Status', width: 130 },
		{ field: 'price', headerName: 'Price', width: 150 },
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<div className="productList-action">
						<Link to={'/product/' + params.row.id}>
							<button className="btn-edit">Edit</button>
						</Link>
						<DeleteOutline
							className="btn-delete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</div>
				);
			},
		},
	];

	return (
		<div className="productList">
			<h3 className="productList-title">Product</h3>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					columns={columns}
					rows={data}
					pageSize={5}
					checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</div>
	);
}
