export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const buyItem = item => {

    return { type: "ADD_FEATURE", payload:item }
}

export const removeFeature = feature => {
   return {type: 'REMOVE_FEATURE', payload:feature}
  };

  