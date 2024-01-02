/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			pre : ["pretendard"],
		},
		screens: {
			sm: '360px',
		},
		extend: {
			colors: {
				homeMain: '#FFEEC1',
				main: '#F2AE00',
				bgMain: '#FFF9EA',
				alarmRed: '#D9340F',
				alarmGreen: '#0FA254',
				black: '#222222',
				gray: '#bdbdbd',
				borderGray: '#E5E5E5',
				white: '#FFFFFF',
				red: '#D9340F',
				blue: '#2D05CD',
			},
			fontSize: {
				headline1: '24px',
				headline2: '20px',
				body: '16px',
				botton: '14px',
				m: '12px',
				sm: '10px',
			},
			backgroundImage: {
				checked: "url('pages/signUp/component/checked.svg')",
				unchecked: "url('pages/signUp/component/unchecked.svg')",
			},
		},
	},
	plugins: [],
};
