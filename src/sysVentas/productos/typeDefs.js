export const productoTypeDef = `
  type Producto {
      id: Int!
      name: String!
      code: String!
      amount: Int!
      price: Int!
      categoryId: Int!
      category: Category!
      status: String!
      createdAt: String!
      date: String!
  }
  type ProductoResponse {
    message: String!
 }
  type Category {
    name: String!
    code: String!
    date: String!
  }
  input ProductoInput {
    name: String!
    code: String!
    date: String!
    amount: Int!
    price: Int!
    categoryId: Int!
  }`;

export const productoQueries = `
      allProductos: [Producto]!
      productoById(id: Int!): Producto!
  `;

export const productoMutations = `
    createProducto(producto: ProductoInput!): ProductoResponse!
    updateProducto(id: Int!, producto: ProductoInput!): ProductoResponse!
`;