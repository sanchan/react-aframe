export function addSphere(properties = {}) {
  console.log("addSphere");
  return {
    type: 'ADD_SPHERE',
    properties
  };
}

export function addBox(properties = {}) {
  console.log("addCube");
  return {
    type: 'ADD_BOX',
    properties
  };
}
