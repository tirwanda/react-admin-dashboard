import React from 'react';
import Chart from '../../Components/Chart/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import './Home.scss';

import { userData } from '../../dummyData';
import WidgetSm from '../../Components/WidgetSm/WidgetSm';
import WidgetLg from '../../Components/WidgetLg/WidgetLg';

export default function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userData}
				title="User Analytics"
				dataKey="active user"
			/>
			<div className="home-widget">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
