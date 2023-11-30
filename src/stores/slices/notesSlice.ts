import { createSlice } from "@reduxjs/toolkit";

type Note = {
  title: string;
  content: string;
  createdAt: string;
  isOpen: boolean;
};

type notesState = {
  notes: Note[];
  loading: boolean;
  error: null | string;
};

const initialState: notesState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesSlice = createSlice({
  initialState,
  name: "notesSlice",
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(
        (note) => note.createdAt !== action.payload
      );
    },
    toggleNote: (state, action) => {
      const note = state.notes.find(
        (note) => note.createdAt === action.payload
      );
      if (note) {
        note.isOpen = !note.isOpen;
      }
    },
  },
});

export const { addNote, removeNote, toggleNote } = notesSlice.actions;
