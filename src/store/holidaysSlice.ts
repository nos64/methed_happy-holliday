import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from '../const/const';

type Holidays = {
  programmingday: 'string',
  newyear: 'string',
  birthdayWomen: 'string',
  birthdayMen: 'string',
  womenday: 'string',
  knowledgeday: 'string',
  teacherday: 'string',
}
export const fetchHolidays = createAsyncThunk<Holidays, void, {rejectValue: string}>(
  'holidays/fetchHolidays',
  async(_, { rejectWithValue }) => {
      const response = await fetch(URI_API);
      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }
      const data: Holidays = await response.json();
      console.log('data: ', data);

      return data;
    }
)

interface HolidaysState {
  holidays: Holidays | null;
  loading: boolean;
  error: string | null;
}
const initialState: HolidaysState = {
  holidays: null,
  loading: false,
  error: null,
}

export const holidaysSlice = createSlice({
  name: 'holidays',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })
      .addCase(fetchHolidays.rejected, (state) => {
        state.loading = false;
        state.holidays = null;
      })
  }
});

export default holidaysSlice.reducer;