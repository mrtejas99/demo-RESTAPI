import { combineReducers } from "redux";
import user from './user_reducer'
import chats from './chat_reducer'

const chatReducer = combineReducers({
    user,chats
})

export default chatReducer