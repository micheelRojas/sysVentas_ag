export const clienteTypeDef = `
  type Cliente {
      id: Int!
      cedula: String!
      primerNombre: String!
      segundoNombre: String!
      primerApellido: String!
      segundoApellido: String!
      correo: String!
      telefono: String!
      direccion: String!
  }
  type ClienteResponse {
   cliente:Cliente!
   result: String!
	 error:String!
   message:String!
}
  input ClienteInput {
     cedula: String!
     primerNombre: String!
     segundoNombre: String!
     primerApellido: String!
     segundoApellido: String!
     correo: String!
     telefono: String!
     direccion: String!
  }`;

export const clienteQueries = `
      allClientes: [Cliente]!
      clienteById(id: Int!): Cliente!
  `;

export const clienteMutations = `
    createCliente(cliente: ClienteInput!): ClienteResponse!
    updateCliente(cedula: String!, cliente: ClienteInput!): ClienteResponse!
    disableCliente(cedula: String!): ClienteResponse!
`;