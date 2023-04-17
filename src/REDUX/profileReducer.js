import {API} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 16, dislikeCounter: 3},
        {id: 2, message: "It's my firs post", likeCounter: 30, dislikeCounter: 4}
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 3,
                    message: action.newPost,
                    likeCounter: 0,
                    dislikeCounter: 0,
                }],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postID)
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postID) => ({type: DELETE_POST, postID})

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await API.getUserProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await API.getUserStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await API.updateUserStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer
