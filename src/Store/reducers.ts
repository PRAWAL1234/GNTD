import { combineReducers } from "@reduxjs/toolkit"

import favAppSlicer from "./Slice/favAppSlicer"
import settingSlicer from "./Slice/settingSlicer"

export const reducers = combineReducers({
  FavApps: favAppSlicer,
  Settings: settingSlicer
})
