import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = {modalIsOpen: false}


const modalOpener = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state) {
      state.modalIsOpen = !state.modalIsOpen;
    },
  }
});

export const modalOpenerActions = modalOpener.actions;

const store = configureStore({
  reducer:modalOpener.reducer
})

export default store;