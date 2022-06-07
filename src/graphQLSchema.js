import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	clienteMutations,
	clienteQueries,
	clienteTypeDef
} from './sysVentas/clientes/typeDefs';

import {
	productoMutations,
	productoQueries,
	productoTypeDef
} from './sysVentas/productos/typeDefs';

import clienteResolvers from './sysVentas/clientes/resolvers';
import productoResolvers from './sysVentas/productos/resolvers';
import {invoiceMutations, invoiceQueries, invoiceTypeDef} from "./sysVentas/facturacion/typeDefs";
import invoiceResolvers from "./sysVentas/facturacion/resolvers";



// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		clienteTypeDef,
		invoiceTypeDef,
		productoTypeDef
	],
	[
		clienteQueries,
		invoiceQueries,
		productoQueries
	],
	[
		clienteMutations,
		invoiceMutations,
		productoMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		clienteResolvers,
		invoiceResolvers,
		productoResolvers
	)
});
