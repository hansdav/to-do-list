import './Notes.css';
import { useState } from 'react';

export default function Notes() {
	const [descriptionInput, setDescriptionInput] = useState('');
	const [typeInput, setTypeInput] = useState('');

	const [notes, setNotes] = useState([
		{
			id: 1,
			description: 'Today I am going to go grocery shopping and walk my dog',
			type: 'personal',
		},
		{
			id: 2,
			description: 'OMG There was a sale on avocados AOOOOOGAA!!',
			type: 'personal',
		},
		{
			id: 3,
			description: 'boss called me, he said i am fired lmaoooo',
			type: 'work',
		},
	]);

	function deleteNote(selectedNoteID) {
		setNotes(notes.filter((note) => selectedNoteID !== note.id));
	}

	function addNote() {
		setNotes([
			...notes,
			{
				id: Math.floor(Math.random() * 100),
				description: descriptionInput,
				type: typeInput,
			},
		]);
	}

	function changeColor(event) {
		event.target.className = 'red';
	}

	return (
		<>
			<div className='notes-header'>
				<span id='header-title'>My Notes UwU</span>
				<textarea
					id='text-input'
					placeholder='type something!'
					onChange={(event) => setDescriptionInput(event.target.value)}
				></textarea>
			</div>
			<div className='header-toggles'>
				<select
					name='input-type'
					id='input-type'
					onChange={(event) => setTypeInput(event.target.value)}
				>
					<option value='personal'>personal</option>
					<option value='work'>work</option>
				</select>
				<button id='add-button' onClick={addNote}>
					Add note
				</button>
			</div>
			<div className='container'>
				{notes.map((note) => (
					<div className='note-text'>
						{note.description}
						<div />
						<div className='note-toggle'>
							<select name='note-type' id='note-type'>
								<option value='personal'>personal</option>
								<option value='work'>work</option>
							</select>
							<button
								className='delete-button'
								onClick={() => deleteNote(note.id)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
