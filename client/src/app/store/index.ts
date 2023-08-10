// import { ActionReducerMap, createReducer, on } from "@ngrx/store";

// import { setData, getData } from "./action";

// export interface BoughtBooks {
//     collection: {};
// }

// const boughtBooksInitState: BoughtBooks = {
//     collection: []
// };

// const mainReducer = createReducer<BoughtBooks>(
//     boughtBooksInitState,
//     on(setData, (state, action) => {
//         const { collection } = action;

//         return { ...state, collection };
//     }),
//     on(getData, (state) => {
//         return state;
//     })
// );

// interface AppState {
//     boughtBooks: BoughtBooks
// }

// export const reducers: ActionReducerMap<AppState> = {
//     boughtBooks: mainReducer
// };