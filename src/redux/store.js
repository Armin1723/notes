import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme/themeSlice'
import choiceReducer from './choice/choiceSlice'

export default configureStore({
  reducer: {
    theme : themeReducer,
    choice: choiceReducer,
  },
})