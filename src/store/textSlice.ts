import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

interface IText {
  text: string;
  idText: string;
}

export const fetchText = createAsyncThunk<IText, string, {rejectValue: string}>(
  'text/fetchText',
  async(holiday, { rejectWithValue }) => {
    const response = await fetch(`${URI_API}/text/${holiday}`);
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data: IText = await response.json();
    return data;
  }
);



export const fetchTextId = createAsyncThunk<IText, string, {rejectValue: string}>(
  'text/fetchTextId',
  async(id, { rejectWithValue }) => {
    const response = await fetch(`${URI_API}/text/${id}`);
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data: IText = await response.json();
    return data;
  }
);

interface ITextState {
  text: string;
  idText: string;
  loading: boolean;
  error: string | null;
}

const initialState: ITextState = {
  text: '',
  idText: '',
  loading: false,
  error: null,
}
const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchText.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.text = '';
          state.idText = '';
        })
        .addCase(fetchText.fulfilled, (state, action) => {
          state.loading = false;
          state.text = action.payload.text;
          state.idText = action.payload.idText;
        })
        .addCase(fetchText.rejected, (state) => {
          state.loading = false;
          state.text = '';
          state.idText = '';
        })
      builder
        .addCase(fetchTextId.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.text = '';
          state.idText = '';
        })
        .addCase(fetchTextId.fulfilled, (state, action) => {
          state.loading = false;
          state.text = action.payload.text;
          state.idText = action.payload.idText;
        })
        .addCase(fetchTextId.rejected, (state) => {
          state.loading = false;
          state.text = '';
          state.idText = '';
        })
    }
})

export default textSlice.reducer;
