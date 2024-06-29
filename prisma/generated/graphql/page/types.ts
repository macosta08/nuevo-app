import { gql } from 'apollo-server-micro';

const PageTypes = gql`
  type Page {
    id: ID!
    name: String!
    route: String!
    isPublic: Boolean!
    imageLink: String
    customizable: Boolean!
    roles: [Role]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pages: [Page]
    page(id: String!): Page
  }

  input PageCreateInput {
    name: String!
    route: String!
    isPublic: Boolean!
    imageLink: String
    customizable: Boolean!
  }

  input PageWhereUniqueInput {
    id: String!
  }

  input PageUpdateInput {
    name: StringInput
    route: StringInput
    isPublic: BooleanInput
    imageLink: StringInput
    customizable: BooleanInput
  }

  type Mutation {
    createPage(data: PageCreateInput): Page

    updatePage(where: PageWhereUniqueInput!, data: PageUpdateInput): Page

    deletePage(where: PageWhereUniqueInput!): Page
  }
`;
export { PageTypes };
