/*jshint esversion: 6 */
let nextComponentId = 0;

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_SPHERE':
      return [
          ...state,
          {
            id: nextComponentId++,
            name: 'a-sphere',
            properties: action.properties
          }
      ];
    case 'ADD_BOX':
      return [
          ...state,
          {
            id: nextComponentId++,
            name: 'a-box',
            properties: action.properties
          }
      ];
    case 'UPDATE_SPHERE':
      return state.map((component, index) => {
        if(component.id === action.id) {
          return action.properties
        }
        return component
      });
    case 'UPDATE_BOX':
      return state.map((component, index) => {
        if(component.id === action.id) {
          return {
            id: action.id,
            name: component.name,
            properties: action.properties
          }
        }
        return component
      });
    default:
        return state;
    }
}
