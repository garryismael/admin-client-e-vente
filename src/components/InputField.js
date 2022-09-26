const InputField = (props) => {
	const value = props.type !== 'file' ? { value: props.value } : {};
	return (
		<>
			<label className='block mb-2 ml-3 text-sm font-bold text-gray-700'>
				{props.label}
			</label>
			<input
				className='input-field'
				onChange={(e) => props.setValue(e)}
				{...value}
				type={props.type}
			/>
		</>
	);
};

export default InputField;

