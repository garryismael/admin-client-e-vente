import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faCog,
	faSignOutAlt,
	faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const HeaderView = () => {
	useEffect(() => {
		window.onclick = function (event) {
			if (
				!event.target.matches('.drop-button') &&
				!event.target.matches('.drop-search')
			) {
				var dropdowns = document.getElementsByClassName('dropdownlist');
				for (var i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (!openDropdown.classList.contains('invisible')) {
						openDropdown.classList.add('invisible');
					}
				}
			}
		};
	});
	function toggleDD() {
		document.getElementById('dropdown').classList.toggle('invisible');
	}
	return (
		<header>
			<nav
				aria-label='menu nav'
				class='bg-gray-800 pt-2 md:pt-1 px-1 mt-0 h-auto fixed w-full z-20 top-0'>
				<div className='flex flex-wrap items-center'>
					<div className='flex flex-shrink md:w-1/3 justify-center md:justify-start text-white'>
						<span
							href='#'
							aria-label='Home'>
							<span className='text-xl pl-2'>
								<i className='em em-grinning'></i>
							</span>
						</span>
					</div>

					<div className='flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2'>
						<span className='relative w-full'>
							<input
								aria-label='search'
								type='search'
								placeholder='Search'
								className='w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal'
							/>
							<div className='absolute search-icon top-4 left-3'>
								<svg
									className='fill-current pointer-events-none text-white w-4 h-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'></path>
								</svg>
							</div>
						</span>
					</div>

					<div className='flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end'>
						<ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
							<li className='flex-1 md:flex-none md:mr-3'>
								<span
									className='inline-block py-2 px-4 text-white no-underline'
									href='#'>
									Active
								</span>
							</li>
							<li className='flex-1 md:flex-none md:mr-3'>
								<span
									className='inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'
									href='#'>
									link
								</span>
							</li>
							<li className='flex-1 md:flex-none md:mr-3'>
								<div className='relative inline-block'>
									<button
										onClick={toggleDD}
										className='drop-button text-white py-2 px-2'>
										{' '}
										<span className='pr-2'>
											<FontAwesomeIcon
												icon={faUserAstronaut}
											/>
										</span>{' '}
										Hi, User{' '}
										<svg
											className='h-3 fill-current inline'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'>
											<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
										</svg>
									</button>
									<div
										id='dropdown'
										className='pa-10 dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible'>
										<span
											href='#'
											className='p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block'>
											<FontAwesomeIcon icon={faUser} />
											Profile
										</span>
										<span
											href='#'
											className='p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block'>
											<FontAwesomeIcon icon={faCog} />
											Settings
										</span>
										<div className='border border-gray-800'></div>
										<span
											href='#'
											className='p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block'>
											<FontAwesomeIcon
												icon={faSignOutAlt}
											/>
											Log Out
										</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default HeaderView;

