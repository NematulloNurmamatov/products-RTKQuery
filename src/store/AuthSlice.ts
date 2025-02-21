import { createSlice } from "@reduxjs/toolkit"


const initialValue = {
    is_auth: true,
    personalData: {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com',
    }
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialValue,
    reducers: {
        setIsAuth (state, action) {
            console.log(action.payload);
            
            state.is_auth = action.payload
        },
        setPersonalData(state, action) {
            state.personalData = action.payload
        }
    }
})

export const { setIsAuth, setPersonalData } = AuthSlice.actions

export default AuthSlice.reducer