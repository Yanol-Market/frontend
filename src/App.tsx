import React, { useEffect } from 'react';
import './App.css';
import tw from 'twin.macro';

function App() {
	useEffect(() => {
		fetch('/api/test')
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);
	return (
		<div className="App">
			<div className="text-yellow-500 p-8">Golden Ticket</div>
			<TestDiv>Golden Ticket</TestDiv>
		</div>
	);
}

export default App;

const TestDiv = tw.div`
bg-pink-400 
p-10 
`;
