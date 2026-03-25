import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ISettingState {
	backgroundImage: string | null;
}

const initialState: ISettingState = {
	backgroundImage: null,
};

const settingSlicer = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setBackgroundImage: (state, action: PayloadAction<string | null>) => {
			state.backgroundImage = action.payload;
		},
		resetBackgroundImage: (state) => {
			state.backgroundImage = initialState.backgroundImage;
		},
	},
});

export const { setBackgroundImage, resetBackgroundImage } =
	settingSlicer.actions;
export default settingSlicer.reducer;
