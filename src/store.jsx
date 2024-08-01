
// import { configureStore, createSlice } from '@reduxjs/toolkit';


// const initialState = {
//     username: "Guest",
//     uid: Math.random().toString(36).substring(2, 12),  // 随机生成 UID
//     loggedIn: false,
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         logIn(state, action) {
//             state.loggedIn = true;
//             state.username = action.payload.username; // 保留相同的 UID
//         },
//         logOut(state) {
//             state.loggedIn = false;
//             state.username = "Guest"; // UID remains the same
//         },
//         updateUsername(state, action) {
//             state.username = action.payload.username; // 更新用户名
//         }
//     }
// });

// export const { logIn, logOut, updateUsername } = userSlice.actions;

// export default configureStore({
//     reducer: {
//         user: userSlice.reducer,
//     },
// });


import { configureStore, createSlice } from '@reduxjs/toolkit';
import i18n from './locales/i18n'; // 确保引入路径正确

// 用户信息管理
const initialState = {
    username: "Guest",
    uid: Math.random().toString(36).substring(2, 12), // 随机生成 UID
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn(state, action) {
            state.loggedIn = true;
            state.username = action.payload.username; // 更新用户名，保留 UID
        },
        logOut(state) {
            state.loggedIn = false;
            state.username = "Guest"; // 重置用户名为 Guest，UID 不变
        },
        updateUsername(state, action) {
            state.username = action.payload.username; // 更新用户名
        }
    }
});

// 语言管理
const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: 'en' // 默认语言为英文
    },
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
            i18n.changeLanguage(action.payload); // 切换语言
        }
    }
});

// 暴露 reducer 中的 actions
export const { logIn, logOut, updateUsername } = userSlice.actions;
export const { setLanguage } = languageSlice.actions;

// 配置 store
export default configureStore({
    reducer: {
        user: userSlice.reducer,
        language: languageSlice.reducer
    },
});


