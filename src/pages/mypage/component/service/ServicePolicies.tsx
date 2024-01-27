import React from 'react';
import { Header } from '../../../../component/common/Header';

import { ServiceTextData } from '../../../../data/ServiceTextData';

const ServicePolicies = () => {
	const textlines = ServiceTextData.split('\n');
	return (
		<div>
			<Header title="서비스 이용약관" />
			<div className="flex flex-col w-full h-screen overflow-scroll ">
				<div className="text-start ml-4 mt-2 items-start text-sm">
					본 약관은 2024.01.29 부터 적용합니다
				</div>
				<div className="text-m ml-2">
					{textlines.map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicePolicies;
