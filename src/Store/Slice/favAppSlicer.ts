import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface IFavApp {
  name: string
  url: string
}

export interface IFavAppState {
  apps: IFavApp[]
}

const initialState: IFavAppState = {
  apps: []
}

const favAppSlicer = createSlice({
  name: "favApp",
  initialState,
  reducers: {
    addApp: (state, action: PayloadAction<IFavApp>) => {
      state.apps.push(action.payload)
    },
    removeApp: (state, action: PayloadAction<string>) => {
      state.apps = state.apps.filter((app) => app.url !== action.payload)
    }
  }
})

export const { addApp, removeApp } = favAppSlicer.actions
export default favAppSlicer.reducer
