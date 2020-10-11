import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"

import Swal from 'sweetalert2'
import { noteLogout } from "./notes";

export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() )

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({user}) => {
            dispatch( login( user.uid, user.displayName ) )

            dispatch( finishLoading() )
        })
        .catch( e => {
            console.log(e)
            dispatch( finishLoading() )
            Swal.fire('error', e.message, 'error')
        })
    }
}

export const startRegisterLoginWithEmailPassword = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then ( async ({ user }) => {
                
                await user.updateProfile( { displayName: name } )

                //console.log(user)
                dispatch(
                    login( user.uid, user.displayName )
                )
            } )
            .catch( e => {
                //console.log(e)
                Swal.fire('error', e.message, 'error')
            })
    }
}

export const startGoogleLogin = () => {
    
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                //console.log(userCredential)
                dispatch(
                    login( user.uid, user.displayName )
                )
            } )
    }
}

export const startLoading = () => {
    return {
        type: types.uiStartLoading,
        payload: null
    }
}

export const finishLoading  = () => {
    return {
        type: types.uiFinishLoading,
        payload: null
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()

        dispatch(logout())

        dispatch( noteLogout() )
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}