import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";
import CardBG from '../img/card-bg.jpg';

export const fetchImage = createAsyncThunk(
  'image/fetchImage',
  async(holiday) => {
    const res = await fetch(`${URI_API}/image/${holiday}`);
    const data = await res.json();
    return data;
  }
);

export const fetchImageId = createAsyncThunk(
  'image/fetchImageId',
  async(Id) => {
    const res = await fetch(`${URI_API}/image/${Id}`);
    const data = await res.json();
    return data;
  }
);

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    urlImg: CardBG,
    idImg: '',
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: state => {
      state.loading = 'loading';
      state.urlImg = CardBG;
      state.idImg = '';
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImage.rejected]: (state, action) => {
      state.loading = 'failed';
      state.urlImg = CardBG;
      state.idImg = '';
    },

    [fetchImageId.pending]: state => {
      state.loading = 'loading';
      state.urlImg = CardBG;
      state.idImg = '';
    },
    [fetchImageId.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImageId.rejected]: (state) => {
      state.loading = 'failed';
      state.urlImg = CardBG;
      state.idImg = '';
    }
  }
})

export default imageSlice.reducer;