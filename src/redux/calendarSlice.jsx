import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEvent: null,
  modalOpen: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.selectedEvent = action.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.selectedEvent = null;
    },
  },
});

export const { openModal, closeModal } = calendarSlice.actions;
export default calendarSlice.reducer;
