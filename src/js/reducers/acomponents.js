/*jshint esversion: 6 */
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_SPHERE':
      console.log("ADD_SPHERE", action.properties);
      return [
          ...state,
          {
            name: 'a-sphere',
            properties: action.properties
          }
      ];
    case 'ADD_BOX':
      console.log("ADD_BOX");
      return [
          ...state,
          {
            name: 'a-box',
            properties: action.properties
          }
      ];
    default:
        return state;
    }
}
