import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//
// Initial State...
//

const initialState = {
  favoriteAnimal: "duck",
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "setFavoriteAnimal": return { ...state, favoriteAnimal: action.value };
    default: return state;
  }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators...
//

const setFavoriteAnimal = (favoriteAnimal) => {
  return {
    type: "setFavoriteAnimal",
    value: favoriteAnimal,
  };
}

export { setFavoriteAnimal };
