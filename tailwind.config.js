/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			pre: ['pretendard'],
		},
		screens: {
			sm: '375px',
		},
		extend: {
			colors: {
				homeMain: '#FFF3C5',
				main: '#FFCC00',
				subBtn: '#004EAF',
				bgMain: '#FFFAEB',
				alarmRed: '#D9340F',
				alarmGreen: '#0FA254',
				black: '#222222',
				gray: '#bdbdbd',
				descGray: '#828282',
				borderGray: '#E5E5E5',
				lightGray: '#FAFAFA',
				white: '#FFFFFF',
				borderWhite: '#F5F5F5',
				red: '#D9340F',
				blue: '#2D05CD',
				dateBlue: '#004EAF',
				fontBlack: '#222222',
				yaLogo: '#FF3478',
			},
			fontSize: {
				headline1: '24px',
				headline2: '20px',
				headline3: '18px',
				body: '16px',
				lg: '14px',
				m: '12px',
				sm: '10px',
			},
			backgroundImage: {
				checked: "url('pages/signUp/component/checked.svg')",
				unchecked: "url('pages/signUp/component/unchecked.svg')",
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
