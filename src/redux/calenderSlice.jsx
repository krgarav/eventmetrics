import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../data/sampleData';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    data: sampleData,
    selectedDate: null,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
