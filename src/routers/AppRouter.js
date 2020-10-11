import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase-config";
import { 
    BrowserRouter as Router,
    Redirect,
    Switch 
} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { SplashScreen } from '../components/auth/SplashScreen';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checkingDBLogin, setCheckingDBLogin] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid){
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn(true)

                dispatch( startLoadingNotes(user.uid) )

            }else {
                setIsLoggedIn(false)
            }

            setCheckingDBLogin(false)
        } )
    }, [dispatch, setCheckingDBLogin])

    if(checkingDBLogin){
        return (
            <SplashScreen />
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter 
                        path='/auth'
                        isAuthenticated={isLoggedIn}
                        component={AuthRouter}
                    />

                    <PrivateRouter 
                        exact
                        path='/'
                        isAuthenticated={isLoggedIn}
                        component={JournalScreen}
                    />

                    <Redirect to='auth/login' />
                </Switch>
            </div>
        </Router>
    )
}