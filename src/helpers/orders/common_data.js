const TrakingEnum = {
  PENDING: 1,
  PROCESS: 2,
  SHIPPING: 3,
  CLOSED: 4,
  CANCELLED: 5,
  UPDATE: 6,
  DELIVERED: 7,
  PROCESSING: 8,
  ON_TRANSIT: 9,
  properties: {
    1: { name: 'PENDING', value: 1, code: 'En Tienda' },
    2: { name: 'PROCESS', value: 2, code: 'En Tienda' },
    3: { name: 'SHIPPING', value: 3, code: 'En camino' },
    4: { name: 'CLOSED', value: 4, code: 'Entregado' },
    5: { name: 'CANCELLED', value: 5, code: 'Cancelado' },
    6: { name: 'UPDATE', value: 6, code: 'En Tienda' },
    7: { name: 'DELIVERED', value: 7, code: 'Recoger en tienda' },
    8: { name: 'PROCESSING', value: 8, code: 'En tienda' },
  },
};

const StatusEnum = {
  PENDING: 1,
  PROCESS: 2,
  SHIPPING: 3,
  CLOSED: 4,
  CANCELLED: 5,
  UPDATE: 6,
  DELIVERED: 7,
  PROCESSING: 8,
  properties: {
    1: { name: 'PENDING', value: 1, code: 'Pendiente' },
    2: { name: 'PROCESS', value: 2, code: 'En Tienda' },
    3: { name: 'SHIPPING', value: 3, code: 'En camino' },
    4: { name: 'CLOSED', value: 4, code: 'Entregado' },
    5: { name: 'CANCELLED', value: 5, code: 'Cancelado' },
    6: { name: 'UPDATE', value: 6, code: 'En Tienda' },
    7: { name: 'DELIVERED', value: 7, code: 'Recoger en tienda' },
    8: { name: 'PROCESSING', value: 8, code: 'En tienda' },
  },
};


export {
  TrakingEnum,
  StatusEnum,
};
