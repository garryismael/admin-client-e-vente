import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import PurchasePage from './pages/Purchase';
import UserPage from './pages/User';
import Guard from './views/auth/Guard';
import LoginView from './views/auth/Login';
import ProductAdd from './views/product/Add';
import ProductEdit from './views/product/Edit';
import ProductList from './views/product/List';
import ProductAuditList from './views/product/Audit';
import UserAddView from './views/user/Add';
import UserEditView from './views/user/Edit';
import UserList from './views/user/List';
import ProductDeletedList from './views/product/Deleted';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/admin/login'
					element={<LoginView />}
				/>
				<Route
					path='/'
					element={<Guard />}>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path='products'
						element={<ProductPage />}>
						<Route
							index
							element={<ProductList />}
						/>
						<Route
							path='audit'
							element={<ProductAuditList />}
						/>
						<Route
							path='deleted'
							element={<ProductDeletedList />}
						/>
						<Route
							path='add'
							element={<ProductAdd />}
						/>
						<Route
							path='edit/:id'
							element={<ProductEdit />}
						/>
					</Route>

					<Route
						path='purchases/'
						element={<PurchasePage />}
					/>
					<Route
						path='users'
						element={<UserPage />}>
						<Route
							index
							element={<UserList />}
						/>
						<Route
							path='add'
							element={<UserAddView />}
						/>
						<Route
							path='edit/:id'
							element={<UserEditView />}
						/>
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;

