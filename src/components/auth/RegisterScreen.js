import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui';
import { startRegisterLoginWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

    const [ formValue, handleInputChange ] = useForm({
        userName: 'Alex',
        userEmail:'alex@correo.com',
        userPassword: '1234567',
        userPasswordConfirm: '1234567'
    })

    const {
        userName,
        userEmail,
        userPassword,
        userPasswordConfirm
    } = formValue

    const handleRegister = (e) => {
        e.preventDefault()

        if ( isFormValid() ){
            dispatch( startRegisterLoginWithEmailPassword( userName, userEmail, userPassword ) )
        }
    }

    const isFormValid = () => {
        
        if( userName.trim().length === 0 ){
            console.log("Invalid name")
            return false;

        } else if( !validator.isEmail(userEmail) ){
            dispatch( setError( "Invalid email" ) )
            return false;
        }else if(userPassword.length < 5){
            dispatch( setError( "Invalid password: the password is too short" ) )
            return false;
        }else if(userPassword !== userPasswordConfirm ){
            dispatch( setError( "Passwords aren´t equal" ) )
            return false;
        }

        dispatch( removeError() )
        return true;
    }

    return (
        <>
            <h3 className='auth__title'> Register </h3>

            <form 
                onSubmit={handleRegister}
                className='animate__animated animate__fadeIn animate__faster'
            >
                {
                    // Si msgError existe, entonces hace eso
                    msgError && 
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input 
                    type='text'
                    placeholder='Name'
                    name='userName'
                    className='auth__input'
                    autoComplete='off'
                    value={ userName }
                    onChange={ handleInputChange }
                />

                <input 
                    type='text'
                    placeholder='Email'
                    name='userEmail'
                    className='auth__input'
                    autoComplete='off'
                    value={ userEmail }
                    onChange={ handleInputChange }
                />

                <input 
                    type='password'
                    placeholder='Password'
                    name='userPassword'
                    className='auth__input'
                    value={ userPassword }
                    onChange={ handleInputChange }
                />

                <input 
                    type='password'
                    placeholder='Confirm password'
                    name='userPasswordConfirm'
                    className='auth__input'
                    value={ userPasswordConfirm }
                    onChange={ handleInputChange }
                />  

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                >
                    Register
                </button>

                <Link 
                    to='/auth/login'
                    className='link'
                >
                    Alredy registered?
                </Link>
                
            </form>
        </>
    )
}
