// ADD
export function addSphere(properties = {}) {
  return {
    type: 'ADD_SPHERE',
    properties
  };
}

export function addBox(properties = {}) {
  return {
    type: 'ADD_BOX',
    properties
  };
}

// UPDATE
export function updateSphere(id, properties = {}) {
  return {
    type: 'UPDATE_SPHERE',
    properties
  };
}

export function updateBox(id, properties = {}) {
  return {
    type: 'UPDATE_BOX',
    id,
    properties
  };
}
