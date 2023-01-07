import { proxy } from "valtio";

interface CurrentUser {
  gender: string
  email: string
}

interface AppStore {
  users: any,
  isLoading: boolean,
  currentUser: CurrentUser | {}
  isAuth: boolean
}

export const appStore = proxy<AppStore>({
  users: [],
  isLoading: false,
  currentUser: {},
  isAuth: false
})
