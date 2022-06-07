export const productoTypeDef = `
  type Producto {
      id: Int!
      nombre: String!
      descripcion: String!
      unidad: String!
      cantidad: Int!
      precio: Int!
      categoria: String!
  }
  type ProductoResponse {
   producto:Producto!
   result: String!
	 error:String!
   message:String!
}
  input ProductoInput {
    id: Int!
    nombre: String!
    descripcion: String!
    unidad: String!
    cantidad: Int!
    precio: Int!
    categoria: String!
  }`;

export const productoQueries = `
      allProductos: [Producto]!
      productoById(id: Int!): Producto!
  `;

export const productoMutations = `
    createProducto(producto: ProductoInput!): Producto!
    updateProducto(id: Int!, producto: ProductoInput!): Producto!
`;