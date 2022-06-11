import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allProductos: (_) =>
			getRequest(`${URL}/all-products`, ''),
		// productoById: (_, { id }) =>
		// 	generalRequest(`${URL}/?id=${id}`, 'GET'),
	},
	Mutation: {
		createProducto: (_, { producto }) =>
			generalRequest(`${URL}`,'POST', producto),
		updateProducto: (_, { id, producto }) =>
			generalRequest(`${URL}`, 'PUT', producto),
	}
};

export default resolvers;