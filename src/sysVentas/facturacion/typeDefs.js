export const invoiceTypeDef = `
  type Invoice {
      id: Int!
      clientId: Int!
      date: Date!
      status: String!
      total: Float!
      details: [InvoiceDetail]!
  }
  type InvoiceDetail {
      productId: Int!
      quantity: Float!
      price: Float!
      total: Float!
  }
  type InvoiceResponse {
     message:String!
  }
  input InvoiceDetailInput {
      productId: Int!  
      quantity: Float!
      price: Float!
  }
  input InvoiceInput {
      clientId: Int!
      date: Date!
      details: [InvoiceDetailInput]!
  }
`;

export const invoiceQueries = `
      allInvoices: [Invoice]!
      invoiceById(id: Int!): Invoice!
  `;

export const invoiceMutations = `
    createInvoice(invoice: InvoiceInput!): InvoiceResponse!
    cancelInvoice(id: Int!): InvoiceResponse!
`;