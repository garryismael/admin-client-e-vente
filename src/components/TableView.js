import * as React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const TableView = (props) => {
	const img = (obj, title) => {
		return `${process.env.REACT_APP_BASE_URL}/${props.url}/images/${obj[title]}`;
	};

	const [display, setDisplay] = useState('hidden');
	const [message, setMessage] = useState('');
	const [selected, setSelected] = useState(null);

	const Display = ({ obj, title }) => {
		return (
			<div className='flex items-center gap-3'>
				<img
					src={img(obj, title[1])}
					alt={obj[title[1]]}
					className='w-8 rounded-2xl'
				/>
				<span>{obj[title[0]]}</span>
			</div>
		);
	};

	const DisplayObject = ({ obj, title }) => {
		const idx = Object.keys(title).at(0);
		const data = obj[idx];
		const imageUrl = (data, title) => {
			const url = Object.values(title).shift().at(2);
			const value = data[Object.values(title).shift().at(1)];
			return `${process.env.REACT_APP_BASE_URL}/${url}/images/${value}`;
		};

		return (
			<div className='flex items-center gap-3'>
				<img
					src={imageUrl(data, title)}
					alt={data[Object.values(title).at(1)]}
					className='w-8 rounded-2xl'
				/>
				<span>{data[Object.values(title).shift().at(0)]}</span>
			</div>
		);
	};

	const ActionTitle = () => {
		return props.actions ? (
			<th className='px-6 py-4 text-left'>actions</th>
		) : (
			<></>
		);
	};

	const onDeleteItem = async () => {
		return await props.onDelete(selected.id);
	};

	return (
		<>
			<table className='container table-auto'>
				<thead>
					<tr className='text-sm leading-normal text-gray-600 uppercase bg-gray-200'>
						{props.titles.map((title) => {
							return (
								<th
									key={
										Array.isArray(title)
											? title[0]
											: title instanceof Object
											? Object.keys(title)[0]
											: title
									}
									className='px-6 py-4 text-left'>
									{Array.isArray(title)
										? title[0].replace('_', ' ')
										: title instanceof Object
										? Object.keys(title)[0]
										: title.replace('_', ' ')}
								</th>
							);
						})}
						<ActionTitle />
					</tr>
				</thead>
				<tbody className='text-sm font-light text-gray-600'>
					{props.data.map((obj, index) => {
						return (
							<tr
								key={index}
								className='px-3 py-4 text-sm break-all border-b border-gray-200 hover:bg-gray-100'>
								{props.titles.map((title, index) => {
									return (
										<td
											key={index}
											className='max-w-xs px-6 py-2 break-all py-auto'>
											{Array.isArray(title) ? (
												<Display
													obj={obj}
													title={title}
												/>
											) : title instanceof Object ? (
												<DisplayObject
													obj={obj}
													title={title}
												/>
											) : (
												obj[title]
											)}
										</td>
									);
								})}
								{props.actions && (
									<props.actions
										key={obj.id}
										editUrl={`${props.editUrl}/${obj.id}`}
										setDisplay={setDisplay}
										setMessage={setMessage}
										item={obj}
										setSelected={setSelected}
									/>
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Modal
				message={message}
				type='warning'
				btnLabel='Delete'
				display={display}
				setDisplay={setDisplay}
				onAccept={onDeleteItem}
			/>
		</>
	);
};

export default TableView;

