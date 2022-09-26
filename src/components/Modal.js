export default function Modal(props) {
	const hide = async ({ ok = false }) => {
		props.setDisplay('hidden');
		if (ok) {
			await props.onAccept();
		}
	};

	const messageCls = () => {
		switch (props.type) {
			case 'info':
				return 'text-blue-600 bg-blue-100';
			case 'warning':
				return 'text-red-600 bg-red-100';
			default:
				return 'text-green-600 bg-green-100';
		}
	};

	const btnCls = () => {
		switch (props.type) {
			case 'info':
				return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300';
			case 'warning':
				return 'bg-red-500 hover:bg-red-600 focus:ring-red-300';
			default:
				return 'bg-green-500 hover:bg-green-600 focus:ring-green-300';
		}
	};

	return (
		<div
			className={`fixed left-0 flex items-center justify-center w-full h-full overflow-y-visible bg-gray-600 bg-opacity-50 top-2 ${props.display}`}>
			<div className='relative p-5 mx-auto -translate-y-20 bg-white border rounded-md shadow-lg top-20 w-96'>
				<div className='flex flex-col mt-3 text-center'>
					<button
						type='button'
						onClick={hide}
						className='py-1 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '>
						<svg
							aria-hidden='true'
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'></path>
						</svg>
						<span className='sr-only'>Close modal</span>
					</button>
					<div
						className={
							'flex p-4 my-4 text-sm rounded-lg ' + messageCls()
						}
						role='alert'>
						<svg
							aria-hidden='true'
							className='flex-shrink-0 inline w-5 h-5 mr-3'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
								clipRule='evenodd'></path>
						</svg>
						<span className='sr-only'>Info</span>
						<div>{props.message}</div>
					</div>
					<div className='flex items-center gap-3 py-3'>
						<button
							onClick={hide}
							className='w-full px-4 py-2 font-semibold bg-transparent border border-gray-200 rounded hover:bg-gray-100 hover:border-transparent'>
							Cancel
						</button>
						<button
							onClick={() => hide({ ok: true })}
							className={
								'w-full px-4 py-2 text-base font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 ' +
								btnCls()
							}>
							{props.btnLabel}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

