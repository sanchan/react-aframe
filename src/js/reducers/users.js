/*jshint esversion: 6 */
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
          ...state,
          {
            name: action.name,
            lastname: action.lastname,
            email: action.email
          }
      ]
    default:
        return state;
    }
};
