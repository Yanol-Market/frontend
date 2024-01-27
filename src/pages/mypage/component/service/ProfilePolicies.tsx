import React from 'react';
import { Header } from '../../../../component/common/Header';

import { ServiceTextData } from '../../../../data/ServiceTextData';
import { profileServiceData } from '../../../../data/profileServiceData';

const ProfilePolicies = () => {
	const textlines = ServiceTextData.split('\n');
	return (
		<div>
			<Header title="개인정보 처리방침" />
			<div className="flex flex-col w-full h-screen overflow-scroll ">
				{profileServiceData &&
					profileServiceData.map((profile) => {
						return (
							<div key={profile.id}>
								<img src={profile.image} alt="개인정보 처리방침" />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ProfilePolicies;
