import React from 'react';
import google from '../../../images/social/google-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import github from '../../../images/social/github-logo.png';
import './SocialLogin.css'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (googleError || githubError) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
            </div>
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto social-login-button'>
                    <img style={{ width: "32px" }} src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>

                <button className='btn btn-primary d-block mx-auto my-3 social-login-button'>
                    <img style={{ width: "32px" }} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign in</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-primary d-block mx-auto social-login-button'>
                    <img style={{ width: "32px" }} src={github} alt="" />
                    <span className='px-2'>Github sign in</span>
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;