export type AlertRes = {
	alertId: number;
	content: string;
	viewed: boolean;
	createdAt: string;
};

export type AlertListRes = {
	status: string;
	message: string;
	data: {
		alertResponses: AlertRes[];
	};
};

export type CheckNewAlertRes = {
	status: string;
	message: string;
	data: {
		existsNewAlert: boolean;
	};
};
