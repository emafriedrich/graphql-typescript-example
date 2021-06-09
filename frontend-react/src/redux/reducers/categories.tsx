type Actions = 'FETCH_PRINCIPAL' | 'FETCH_ALL';

const categoriesReducer = (state = [], action: any) => {
  switch (action.type as Actions) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_PRINCIPAL':
      return action.payload;
    default:
      return state;
  }
}

export default categoriesReducer;