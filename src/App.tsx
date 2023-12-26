import React from 'react';
import './App.css';
import tw from 'twin.macro';

function App() {
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
