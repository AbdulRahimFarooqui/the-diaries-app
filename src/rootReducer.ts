import {combineReducers} from '@reduxjs/toolkit';
import authReducer from  './features/auth/authSlice';
import userReducer from  './features/auth/userSlice';
import diaryReducer from './features/diary/diariesSlice';
import entryReducer from './features/entry/entriesSlice';
import editorReducer from './features/entry/editorSlice';

const rootReducer = combineReducers({
    auth:authReducer,
    diaries:diaryReducer,
    user:userReducer,
    entries:entryReducer,
    editor:editorReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;