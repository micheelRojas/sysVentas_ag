export const categoryTypeDef = `
  type Category {
      id: Int!
      name: String!
      code: String!
      date: String!
  }
  type CategoryResponse {
   categories: [Category]! 
   result: Category! 
}
  input CategoryInput {
    name: String!
    code: String!
    date: String!
  }
  type GetCategoryResponse{
    result:CategoryResponse!
  }
  `;

export const categoryQueries = `
      allCategories:[Category]!
      categoryById(id: Int!): Category!
  `;

export const categoryMutations = `
    createCategory(category: CategoryInput!): CategoryResponse!
    updateCategory(category: CategoryInput!): CategoryResponse!
    disableCategory(category: CategoryInput!): CategoryResponse!
`;