import gql from 'graphql-tag';


export const GET_CATEGORIES = gql`
query {
  categories {
    name
    id
  }
}
`;

export const MAIN_CATEGORIES = gql`
query {
  mainCategories {
    name
    id
  }
}
`;