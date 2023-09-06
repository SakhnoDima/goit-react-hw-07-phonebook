import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64f719609d775408495316fb.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
