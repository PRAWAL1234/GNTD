import { addApp, removeApp, type IFavApp } from "../Slice/favAppSlicer"
import { useAppDispatch, useAppSelector } from "../store"

export const useFavApp = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state?.FavApps?.apps)

  const addFavApp = (app: IFavApp) => {
    dispatch(addApp(app))
  }

  const removeFavApp = (url: string) => {
    dispatch(removeApp(url))
  }

  return {
    state,
    addFavApp,
    removeFavApp
  }
}
