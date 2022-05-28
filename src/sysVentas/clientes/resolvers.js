import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allClientes: (_) =>
			getRequest(`${URL}/${"list"}`, ''),
		clienteById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createCliente: (_, { cliente }) =>
			generalRequest(`${URL}/add`,'POST', cliente),
		updateCliente: (_, { cedula, cliente }) =>
			generalRequest(`${URL}/update?cedula=${cedula}`, 'PUT', cliente),
		disableCliente: (_, { cedula }) =>
			generalRequest(`${URL}/disable?cedula=${cedula}`, 'PUT')
	}
};

export default resolvers;