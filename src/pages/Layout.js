import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<nav className='bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 '>
				<div className='container flex flex-wrap items-center justify-between mx-auto'>
					<Link
						to='/'
						className='flex items-center space-x-2'>
						<FontAwesomeIcon icon={faBagShopping}/>
						<span className='self-center text-xl font-semibold whitespace-nowrap '>
							Nordics
						</span>
					</Link>
					<div className='flex md:order-2'>
						<button
							type='button'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 '>
							Get started
						</button>
						<button
							data-collapse-toggle='navbar-sticky'
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
							aria-controls='navbar-sticky'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'></path>
							</svg>
						</button>
					</div>
					<div
						className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
						id='navbar-sticky'>
						<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white '>
							<li>
								<NavLink
									to='products'
									className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
									aria-current='page'>
									Products
								</NavLink>
							</li>
							<li>
								<NavLink
									to='purchases'
									className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '>
									Purchases
								</NavLink>
							</li>
							<li>
								<NavLink
									to='users'
									className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '>
									Users
								</NavLink>
							</li>
							<li>
								<NavLink
									to='users'
									className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 '>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container mx-auto mt-24'>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
