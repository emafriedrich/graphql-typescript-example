import { client } from '../../api/graphqlClient';
import { GET_CATEGORIES } from '../../api/queries';

export const fetCategories = () => async (dispatch: any, getState: any) => {
  const { loading, error, data } = await client.query({ query: GET_CATEGORIES });
};