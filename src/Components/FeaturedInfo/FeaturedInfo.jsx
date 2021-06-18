import React from 'react';
import './FeaturedInfo.scss';

import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

export default function FeaturedInfo() {
	return (
		<div className="featured">
			<div className="featured-item">
				<span className="featured-title">Reveanu</span>
				<div className="featured-money-container">
					<span className="featured-money">Rp 20,000,000</span>
					<span className="featured-money-rate">
						-5.5{' '}
						<ArrowDropDown className="featured-icon negative" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Sales</span>
				<div className="featured-money-container">
					<span className="featured-money">Rp 15,000,000</span>
					<span className="featured-money-rate">
						-3.5{' '}
						<ArrowDropDown className="featured-icon negative" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Cost</span>
				<div className="featured-money-container">
					<span className="featured-money">Rp 8,000,000</span>
					<span className="featured-money-rate">
						+2.5 <ArrowDropUp className="featured-icon" />
					</span>
				</div>
				<span className="featured-sub">Compare to last month</span>
			</div>
		</div>
	);
}
