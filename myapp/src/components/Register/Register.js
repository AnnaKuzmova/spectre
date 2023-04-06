import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../store/actions/authActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Register.css';
//schema
const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName:yup.string().required(),
    password:yup.string().min(6).max(15).required(),
    email: yup.string().email().required()
});
function Register({setLoggedIn})  {
    const errorMsg = useSelector(state => state.auth.registerErrorMsg);
    const dispatch  = useDispatch();
    const {register,handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = (data) => {
        const user = data;
        dispatch(registerAction(user));
    }
        return (
            <div className="container">
                <form className="form col s12" onSubmit={handleSubmit(submitForm)}>
                    <h3>Register</h3>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" name="firstName" type="text" className="validate" {...register('firstName')} />
                            <label htmlFor="first_name">First Name</label>
                            <span className="error-message">{errors.firstName?.message}</span>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" name="lastName" type="text" className="validate" {...register('lastName')} />
                            <label htmlFor="last_name">Last Name</label>
                            <span className="error-message">{errors.lirstName?.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" name="password" type="password" className="validate" {...register('password')} />
                            <label htmlFor="password">Password</label>
                            <span className="error-message">{errors.password?.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" name="email" type="email" className="validate" {...register('email')} />
                            <label htmlFor="email">Email</label>
                            <span className="error-message">{errors.email?.message}</span>
                        </div>
                    </div>
                    {errorMsg && <p className="error-message">{errorMsg}</p>}
                    <input type="submit" value="register" className="btn deep-purple darken-2" />
                </form>
            </div>
        )
}

export default Register;