import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading'
const SignUP = () => {
    const [userInfo, setUserInfo] = useState({
        email:'',
        password: '',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({
        email: '',
        password:'',
        confirmPassword:''
    })
    // firebase hook authentication 
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    
    const navigate = useNavigate()

    useEffect(()=>{
      if(error){
        toast(error?.message)
      }
    },[error])
    if(loading){
      return <Loading></Loading>
    }
    if(user){
     
      return navigate('/')
    }
    const handleEmail = e =>{
       const  emailRegex = /\S+@\S+\.\S+/
       const validEmail = emailRegex.test(e.target.value)
       if(validEmail){
           setUserInfo({...userInfo, email:e.target.value})
           setErrors({...errors, email:''})
       }else{
           setErrors({...errors, email:'invalid email'})
           setUserInfo({...userInfo, email:''})
       }
       
    }
    const handlePassword = e =>{
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(e.target.value)
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setErrors({...errors, password:''})
        }else{
            setErrors({...errors, password:'minimum 6 character'})
            setUserInfo({...userInfo, password:''})
        }

    }
    const confirmPassword = e =>{
     if(userInfo.password ===e.target.value){
       setUserInfo({...userInfo, confirmPassword:e.target.value})
       setErrors({...errors, password:''})
     }else{
       setErrors({...errors, password:"password non't match"})
       setUserInfo({...userInfo, confirmPassword:''})
     }

    }
    const handleSignUp = e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.confirmPassword)
        if(user){
          toast('verify your email')
        }
        
    }
  
    return (
        <div className='signup-page'>
        <div className='form-container'>  
        <h3>signup</h3>
            <form onSubmit={handleSignUp}>
                <input type='email' name='email' placeholder='enter email' onChange={handleEmail}/>
                {errors && <p>{errors?.email}</p>}
                <input type='password'name='password' placeholder='enter password' onChange={handlePassword}/>
                {errors && <p>{errors?.password}</p>}
                <input type='password'name='confirmPassword' placeholder='confirm password' onChange={confirmPassword}/>
                <button className='form-btn' type='submit'>signup</button>
                {/* {error && <p> {error.message} </p>} */}
            </form>
        </div>
        <ToastContainer
        position='top-center'
        ></ToastContainer>
    </div>
    );
};

export default SignUP;
