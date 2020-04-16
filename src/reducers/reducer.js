import {ADD_FEATURE,REMOVE_FEATURE} from "../actions";


export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_FEATURE:
      return { 
          //add feature to features list
          ...state, 
          car: {...state.car, features: [...state.car.features, action.payload]},
          // add cost to feature to additionalPrice 
            additionalPrice: state.additionalPrice + action.payload.price
      }
    case REMOVE_FEATURE:
      return {
        // remove feature from features list
        ...state, 
        car:{...state.car, features:[...state.car.features.filter(feature => feature.id !==action.payload.id)]},
        // remove the price of feature from additionalPrice
        additionalPrice: state.additionalPrice - action.payload.price
      }
    default:
      return state;
  }
};
