import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import './Chart.scss';

export default function Chart({ title, data, dataKey, grid }) {
	return (
		<div className="chart">
			<h3 className="chart-title">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" stroke="gray" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
