import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	clienteMutations,
	clienteQueries,
	clienteTypeDef
} from './sysVentas/clientes/typeDefs';

import clienteResolvers from './sysVentas/clientes/resolvers';
import {invoiceMutations, invoiceQueries, invoiceTypeDef} from "./sysVentas/facturacion/typeDefs";

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		clienteTypeDef,
		invoiceTypeDef
	],
	[
		clienteQueries,
		invoiceQueries
	],
	[
		clienteMutations,
		invoiceMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		clienteResolvers,
		invoiceMutations
	)
});
