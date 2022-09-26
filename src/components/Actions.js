import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Actions = (props) => {
	const onDelete = async () => {
		props.setMessage(`Would you delete ${props.item.name}`);
		props.setDisplay('flex');
		props.setSelected(props.item);
	};

	return (
		<td className='max-w-xs px-6 space-x-4 py-auto'>
			<Link to={props.editUrl}>
				<FontAwesomeIcon
					icon={faEdit}
					size='lg'
				/>
			</Link>
			<FontAwesomeIcon
				icon={faTrashAlt}
				color='tomato'
				size='lg'
				className='cursor-pointer'
				onClick={onDelete}
			/>
		</td>
	);
};

export default Actions;

