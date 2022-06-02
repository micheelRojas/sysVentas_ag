import { generalRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allInvoices: (_) =>
			generalRequest(`${URL}`, 'GET'),
		invoiceById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createInvoice: (_, { invoice }) =>
			generalRequest(`${URL}`,'POST', invoice),
		cancelInvoice: (_, { idInvoice }) =>
			generalRequest(`${URL}/${idInvoice}/canceled`, 'PUT')
	}
};

export default resolvers;