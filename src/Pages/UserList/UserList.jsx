import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './UserList.scss';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';

export default function UserList() {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'user',
			headerName: 'User',
			width: 150,
			renderCell: (params) => {
				return (
					<div className="userList-avatar">
						<img src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'status', headerName: 'Status', width: 130 },
		{ field: 'transaction', headerName: 'Transaction', width: 150 },
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<div className="userList-action">
						<Link to={'/user/' + params.row.id}>
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
		<div className="userList">
			<h3 className="userList-title">User Data</h3>
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
