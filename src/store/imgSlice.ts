import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";
import CardBG from '../img/card-bg.jpg';

interface IImg {
  urlImg: string;
  idImg: string;
}

export const fetchImage = createAsyncThunk<IImg, string, {rejectValue: string}>(
  'image/fetchImage',
  async(holiday, { rejectWithValue }) => {
    const response = await fetch(`${URI_API}/image/${holiday}`);
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data: IImg = await response.json();
    return data;
  }
);

export const fetchImageId = createAsyncThunk<IImg, string, {rejectValue: string}>(
  'image/fetchImageId',
  async(Id, { rejectWithValue }) => {
    const response = await fetch(`${URI_API}/image/${Id}`);
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data: IImg = await response.json();
    return data;
  }
);

interface ImageState {
  urlImg: string;
  idImg: string;
  loading: boolean;
  error: string | null;
}

const initialState: ImageState = {
  urlImg: CardBG,
  idImg: '',
  loading: false,
  error: null,
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchImage.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.urlImg = CardBG;
      state.idImg = '';
    })
    .addCase(fetchImage.fulfilled, (state, action) => {
      state.loading = false;
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    })
    .addCase(fetchImage.rejected, (state) => {
      state.loading = false;
      state.urlImg = CardBG;
      state.idImg = '';
    })
  builder
    .addCase(fetchImageId.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.urlImg = CardBG;
      state.idImg = '';
    })
    .addCase(fetchImageId.fulfilled, (state, action) => {
      state.loading = false;
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    })
    .addCase(fetchImageId.rejected, (state) => {
      state.loading = false;
      state.urlImg = CardBG;
      state.idImg = '';
    })
  }
})

export default imageSlice.reducer;