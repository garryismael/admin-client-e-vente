import useLogin from '../../hooks/useLogin';

const LoginView = () => {
	const [setEmail, setPassword, error, loginUser] = useLogin();

	return (
		<div>
			<header className='max-w-lg mx-auto'>
				<span href='#'>
					<h1 className='text-4xl font-bold text-white text-center'>
						Startup
					</h1>
				</span>
			</header>

			<main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
				<section>
					<h3 className='font-bold text-2xl text-center'>
						Welcome to Nordics
					</h3>
					<p className='text-gray-600 pt-2 text-center'>
						Sign in to your account.
					</p>
				</section>
				<section
					className={`first-line:text-white rounded text-white bg-red-400 translate-y-4 text-center ${
						error === '' ? '' : 'py-3'
					}`}>
					<div>{error}</div>
				</section>
				<section className='mt-10'>
					<div className='flex flex-col'>
						<div className='mb-6 pt-3 rounded bg-gray-200'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 ml-3'
								htmlFor='email'>
								Email
							</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								type='text'
								id='email'
								className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
							/>
						</div>
						<div className='mb-6 pt-3 rounded bg-gray-200'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 ml-3'
								htmlFor='password'>
								Password
							</label>
							<input
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								id='password'
								className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
							/>
						</div>
						<div className='flex justify-end'>
							<span
								href='#'
								className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>
								Forgot your password?
							</span>
						</div>
						<button
							className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
							type='button'
							onClick={loginUser}>
							Sign In
						</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default LoginView;

