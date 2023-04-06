import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../store/actions/authActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
//schema
const schema = yup.object().shape({
    password:yup.string().required(),
    email: yup.string().email().required()
});

function Login({setLoggedIn}) {
   const errorMsg = useSelector(state => state.auth.loginErrorMsg);
   const dispatch = useDispatch();  
   const {register,handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
    });
   const submitForm = async(data) => {
        const user = data;
        dispatch(loginAction(user,setLoggedIn));
   }
        return (
            <div className="container">
                <form className="form col s12" onSubmit={handleSubmit(submitForm)}>
                <h3>Login</h3>
                <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" type="email" className="validate" name="email" {...register('email')}/>
                            <label htmlFor="email">Email</label>
                            <span className="error-message">{errors.email?.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" type="password" className="validate" name="password" {...register('password')} />
                            <label htmlFor="password">Password</label>
                            <span className="error-message">{errors.password?.message}</span>
                        </div>
                    </div>
                    {errorMsg && <p className="error-message">{errorMsg}</p>}
                    <input type="submit" className="btn indigo lighten-1" value="login" />
                </form>
            </div>
        );
}

export default Login;