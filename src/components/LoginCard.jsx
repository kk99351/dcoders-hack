import React, { useContext, useEffect, useState } from 'react'
import google from '../assets/icons/google.svg'
import github from '../assets/icons/github.svg'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useGoogleLogin } from '@react-oauth/google';
import { UserContext } from '../contexts/user.context';
const cookies = new Cookies();

export default function LoginCard() {

    const [email,setEmail] = useState("");
    const [formStage, setFormStage] = useState(0);
    const [otp, setOTP] = useState("");
    const {setLoginHandler} = useContext(UserContext)

    const googleLogin = useGoogleLogin({
        onSuccess: async tokenResponse => {
            setLoginHandler()
        },
    });

    const emailHandler = async (e) => {
        e.preventDefault()
        if (email !== ''){
            const response = await axios.post("https://email-api-nine-chi.vercel.app/dcoders/otp?accessKey=35$v5'!DZ`]Z9L$V0VzpTxk(o0'.2", {
                email
            })
            console.log(response)
            setFormStage(1)
        }
    }

    const OTPHandler = (e) => {
        e.preventDefault()
        if (otp !== ''){
            setLoginHandler()
        }
    }

  return (
    <div className='loginCard'>
        <div className='loginCard-header hidden md:block'>
            Sign in with ...<br></br><br></br>
        </div>
        <div className='ThirdPartyLoginBT flex gap-3'>
            <button className='inline-flex justify-around w-1/2' onClick={googleLogin}>
                <span><img src={google} alt=""/></span>
                <span>Google</span>
            </button>
            <button className='inline-flex justify-around w-1/2' onClick={googleLogin}>
                <span><img src={github} alt=""/></span>
                <span>GitHub</span>
            </button>
        </div>
        <div className='LoginInputField'>
            {
                formStage === 0 &&
                (<>
                    <div className='inputGroup'>
                        Email Address<br></br>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='signInBt'
                        onClick={(e) => emailHandler(e)}
                    >
                        Send OTP to Email
                    </button>
                </>)
            }

            {
                formStage === 1 &&
                (<>
                    <div className='inputGroup'>
                        OTP<br></br>
                        <input 
                            type="Number" 
                            value={otp}
                            onChange={(e) => setOTP(e.target.value)}
                        />
                    </div>
                    <button className='signInBt'
                        onClick={(e) => OTPHandler(e)}
                    >
                        Submit OTP
                    </button>
                </>)
            }
        </div>
    </div>
  )
}
