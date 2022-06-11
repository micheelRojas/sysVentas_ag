import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allProductos: (_) =>
			getRequest(`${URL}/list`, ''),
		productoById: (_, { id }) =>
			generalRequest(`${URL}/?id=${id}`, 'GET'),
	},
	Mutation: {
		createProducto: (_, { producto }) =>
			generalRequest(`${URL}/add`,'POST', producto),
		updateProducto: (_, { id, producto }) =>
			generalRequest(`${URL}/update?id=${id}`, 'PUT', producto),
	}
};

export default resolvers;