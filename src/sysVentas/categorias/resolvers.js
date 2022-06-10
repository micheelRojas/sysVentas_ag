import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/api/${entryPoint}`;

const resolvers = {
	Query: {
		allCategories: (_) =>
			getRequest(`${URL}`, ''),
		categoryById: (_, { id }) =>
			generalRequest(`${URL}/${id}/product`, 'GET'),
	},
	Mutation: {
		createCategory: (_, { category }) =>
			generalRequest(`${URL}/`,'POST', category),
		updateCategory: (_, { category }) =>
			generalRequest(`${URL}/`, 'PUT', category),
		disableCategory: (_) =>
			generalRequest(`${URL}/inactive`, 'PUT')
	}
};

export default resolvers;