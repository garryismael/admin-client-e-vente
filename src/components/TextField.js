const TextField = (props) => {
	return (
		<>
			<label className='block mb-2 ml-3 text-sm font-bold text-gray-700'>{props.label}</label>
			<textarea
				className='input-field'
				value={props.value}
				onChange={(e) => props.setValue(e)}
			/>
		</>
	);
};

export default TextField;

