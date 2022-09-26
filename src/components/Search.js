import { useState } from 'react';

const Search = ({ data, fields, setData }) => {
	const [origin, setOrigin] = useState([]);

	const filter = (value) => {
		if (origin.length === 0) setOrigin([...data]);
		if (value === '') {
			setData([...origin]);
		} else {
			const results = origin.filter((obj) => {
				for (let field of fields) {
					let idx = Array.isArray(field) ? field[0] : field;
					if (
						obj[idx]
							.toString()
							.toLowerCase()
							.includes(value.toLowerCase())
					)
						return true;
				}
				return false;
			});
			setData(results);
		}
	};

	return (
		<div className='w-48'>
			<input
				type='text'
				className='input-field'
				placeholder='Search'
				required
				onKeyUp={(e) => filter(e.target.value)}
			/>
		</div>
	);
};

export default Search;

