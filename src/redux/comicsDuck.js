//Constantes

const initialData = {
  comics: [],
  data: {},
};

//TYPES
const ADD_COMIC = "ADD_COMIC";
const GET_RANDOM = "GET_RANDOM";

export default function comicsReducer(state = initialData, action) {
  switch (action.type) {
    case GET_RANDOM:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_COMIC:
      return {
        ...state,
        comics: action.payload,
      };
    default:
      return state;
  }
}

export const addComic = (rating, description, comic) => (
  dispatch,
  getState
) => {
  const state = getState().comics.comics;
  const { year, img, title } = comic;
  dispatch({
    type: ADD_COMIC,
    payload: [...state, { rating, description, year, img, title }],
  });
};

export const getComic = () => (dispatch, getState) => {
  const randomNumber = Math.floor(Math.random() * 2000);

  fetch(
    `https://thingproxy.freeboard.io/fetch/https://xkcd.com/${randomNumber}/info.0.json`
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_RANDOM,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};
