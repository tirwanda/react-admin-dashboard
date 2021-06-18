import React from 'react';
import './WidgetLg.scss';

export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={'widgetLg-button ' + type}>{type}</button>;
	};
	return (
		<div className="widgetLg">
			<div className="widgetLg-title">Latest Transaction</div>
			<table className="widgetLg-table">
				<tr className="widgetLg-tr">
					<th className="widgetLg-th">Custommer</th>
					<th className="widgetLg-th">Date</th>
					<th className="widgetLg-th">Amount</th>
					<th className="widgetLg-th">Status</th>
				</tr>

				<tr className="widgetLg-tr">
					<td className="widgetLg-user">
						<img
							src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLg-photo"
						/>
						<span className="widgetLg-name">Nguyen yen</span>
					</td>
					<td className="widgetLg-date">19 Jun 2021</td>
					<td className="widgetLg-amount">Rp 150,000</td>
					<td className="widgetLg-status">
						<Button type="Approve" />
					</td>
				</tr>

				<tr className="widgetLg-tr">
					<td className="widgetLg-user">
						<img
							src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLg-photo"
						/>
						<span className="widgetLg-name">Nguyen yen</span>
					</td>
					<td className="widgetLg-date">19 Jun 2021</td>
					<td className="widgetLg-amount">Rp 150,000</td>
					<td className="widgetLg-status">
						<Button type="Approve" />
					</td>
				</tr>

				<tr className="widgetLg-tr">
					<td className="widgetLg-user">
						<img
							src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLg-photo"
						/>
						<span className="widgetLg-name">Nguyen yen</span>
					</td>
					<td className="widgetLg-date">19 Jun 2021</td>
					<td className="widgetLg-amount">Rp 150,000</td>
					<td className="widgetLg-status">
						<Button type="Declined" />
					</td>
				</tr>

				<tr className="widgetLg-tr">
					<td className="widgetLg-user">
						<img
							src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
							className="widgetLg-photo"
						/>
						<span className="widgetLg-name">Nguyen yen</span>
					</td>
					<td className="widgetLg-date">19 Jun 2021</td>
					<td className="widgetLg-amount">Rp 150,000</td>
					<td className="widgetLg-status">
						<Button type="Pendding" />
					</td>
				</tr>
			</table>
		</div>
	);
}
