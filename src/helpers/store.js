import cartReducer from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    cartReducer
  }
}
)
export default store