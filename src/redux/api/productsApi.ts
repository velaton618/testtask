import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductResponse } from "../../types/IProductResponse";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductResponse, void>({
      query: () => "/products?limit=8&skip=0",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

