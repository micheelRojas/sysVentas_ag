import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/api`;

const authResolvers = {
	Mutation: {
		generateToken: (_, { credentials }) =>
			generalRequest(`${URL}/token`,'POST', credentials),
	}
};

export default authResolvers;