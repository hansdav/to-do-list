import React, { useState } from 'react';
import './App.css';
import Notes from './Notes';

export default function App() {
	const [noteColor, setNoteColor] = useState('');
	return (
		<div className='App'>
			<Notes />
		</div>
	);
}
