import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/RootState';

export type ReadingViewVerseState = {
  hoveredVerseKey: string | null;
  selectedVerseKey: string | null;
};

export const initialState: ReadingViewVerseState = {
  hoveredVerseKey: null,
  selectedVerseKey: null,
};

/**
 * This slice keep track of the current hovered and selected verses in the reading mode.
 *
 */
const readingViewVerse = createSlice({
  name: 'readingViewHoveredVerse',
  initialState,
  reducers: {
    setReadingViewHoveredVerseKey: (state, { payload }: PayloadAction<string | null>) => {
      return {
        ...state,
        hoveredVerseKey: payload,
      };
    },
    setReadingViewSelectedVerseKey: (state, { payload }: PayloadAction<string | null>) => {
      return {
        ...state,
        selectedVerseKey: payload,
      };
    },
  },
});

export const selectReadingViewHoveredVerseKey = (state: RootState) =>
  state.readingViewVerse.hoveredVerseKey;

export const selectReadingViewSelectedVerseKey = (state: RootState) =>
  state.readingViewVerse.selectedVerseKey;

export const { setReadingViewHoveredVerseKey, setReadingViewSelectedVerseKey } =
  readingViewVerse.actions;
export default readingViewVerse.reducer;
