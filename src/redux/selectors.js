import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter.value;

export const getLoadState = createSelector(
  [getIsLoading, getError],
  (isLoading, error) => {
    if (isLoading && !error) {
      return true;
    } else return false;
  }
);

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (items, value) => {
    const normalizeFilter = value.toLowerCase();
    return items.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  }
);
