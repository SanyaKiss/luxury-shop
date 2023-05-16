import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { shuffle } from '../../utils/shuffle';
import { Product, ProductsSliceState, Status } from './types';

type FetchParams = {
  args: string;
  shuffled: boolean | undefined;
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: FetchParams) => {
    const { data } = await axios.get<Product[]>(
      `https://637374ac348e9472990cef38.mockapi.io/products${params.args}`
    );

    if (params.shuffled) return shuffle([...data]);
    else return data;
  }
);

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
