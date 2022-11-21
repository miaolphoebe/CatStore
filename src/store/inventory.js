import axios from "axios";

const GET_INVENTORY = "GET_INVENTORY";
const CREATE_INVENTORY = "CREATE_INVENTORY";
const DELETE_INVENTORY = "DELETE_INVENTORY";
const EDIT_INVENTORY = "EDIT_INVENTORY";
const TOKEN = "token";

export const _getInventory = (inventory) => {
  return {
    type: GET_INVENTORY,
    inventory,
  };
};

export const _createInventory = (inventory) => {
  return {
    type: CREATE_INVENTORY,
    inventory,
  };
};

const _deleteInventory = (inventory) => {
  return {
    type: DELETE_INVENTORY,
    inventory,
  };
};
const _editInventory = (inventory) => {
  return {
    type: EDIT_INVENTORY,
    inventory,
  };
};

export const getInventory = () => {
  return async (dispatch) => {
    try {
      const inventory = [
        {
          id: 1,
          name: "Cute Cat Condo",
          imageUrl:
            "https://image.chewy.com/is/image/catalog/289340_MAIN._AC_SL1200_V1633012080_.jpg",
          price: "56.99",
          quantity: 654,
          desc: "The Frisco Animal Series Cat Condos are the perfect hideout and hangout spots for kitties. They have everything a kitty loves, including a scratching post, a private condo and a perch at the top where they can survey their whole kingdom.",
          createdAt: "2022-11-18T23:45:25.257Z",
          updatedAt: "2022-11-18T23:45:25.257Z",
        },
        {
          id: 2,
          name: "Wooden Cat Tree",
          imageUrl:
            "https://image.chewy.com/is/image/catalog/211714_MAIN._AC_SS600_V1588616259_.jpg",
          price: "299.00",
          quantity: 710,
          desc: "Designed for the meow-dern pet parent with a clean, minimalistic design that complements any decor scheme",
          createdAt: "2022-11-18T23:45:25.256Z",
          updatedAt: "2022-11-18T23:45:25.256Z",
        },
        {
          id: 3,
          name: "Automatic Feeder",
          imageUrl:
            "https://image.chewy.com/is/image/catalog/364527_PT1._AC_SL600_V1646701655_.jpg",
          price: "79.99",
          quantity: 568,
          desc: "Feed your pet up to four meals each day with up to nine customizable portions per meal.",
          createdAt: "2022-11-18T23:45:25.257Z",
          updatedAt: "2022-11-18T23:45:25.257Z",
        },
        {
          id: 4,
          name: "Cardboard Cat House",
          imageUrl:
            "https://image.chewy.com/is/image/catalog/317733_PT3._AC_SL1200_V1642099365_.jpg",
          price: "19.98",
          quantity: 330,
          desc: "Cardboard cat house provides your kitty with a private hideaway to scratch, nap and chill. Two levels, each with a scratch pad, for double the fun and scratching satisfaction.",
          createdAt: "2022-11-18T23:45:25.257Z",
          updatedAt: "2022-11-18T23:45:25.257Z",
        },
        {
          id: 5,
          name: "Ceramic Water Fountain",
          imageUrl:
            "https://image.chewy.com/is/image/catalog/297220_MAIN._AC_SL1800_V1633549636_.jpg",
          price: "57.17",
          quantity: 207,
          desc: "Circulates up to 64 ounces of water to encourage your pet to stay hydrated and enjoy drinking more water.",
          createdAt: "2022-11-18T23:45:25.257Z",
          updatedAt: "2022-11-18T23:45:25.257Z",
        },
      ];
      dispatch(_getInventory(inventory));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export const createInventory = (inventory) => {
  return async (dispatch) => {
    dispatch(_createInventory(inventory));
  };
};

export const deleteInventory = (id) => {
  return async (dispatch) => {
    dispatch(_deleteInventory({ id }));
  };
};

export const editInventory = (inventory) => {
  return async (dispatch) => {
    dispatch(_editInventory(inventory));
  };
};

const initialState = [];

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INVENTORY:
      return action.inventory;
    case CREATE_INVENTORY:
      return [...state, action.inventory];
    case DELETE_INVENTORY:
      return state.filter((product) => product.id !== action.inventory.id);
    case EDIT_INVENTORY:
      return [
        ...state.map((inventory) => {
          if (inventory.id === action.inventory.id) {
            return action.inventory;
          } else {
            return inventory;
          }
        }),
      ];

    default:
      return state;
  }
}
