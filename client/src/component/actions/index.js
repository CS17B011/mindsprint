//action craetors
import axios from 'axios';
import {REGISTER,ERROR,GOOGLE_OAUTH,FACEBOOK_OAUTH, EMAIL_VERIFICATION,LOCAL_LOGIN,LOGOUT,UNAUTHORIZED,REMOVE_MESSAGE} from './types';
export const register = (data)=>{
    /*
    Step1->make an http request and store all data in database
    Step2->give JWT token to user after email has been verified
    Step3->finally user has been registered
    Step4->store jwttoken in localSTorage
    */ 
    return async (dispatch)=>{
        try{
            console.log('data',data);
            const response = await axios.post('http://localhost:5000/api/students/register',data);
            console.log('response',response);
            dispatch({
                type:REGISTER,
                error:response.data.error,
                success:response.data.success
            });
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            })
            console.log('err',err.message);
        }
    }
}

export const login = (data)=>{
    /*
    Step1->make an http request and store all data in database
    Step2->give JWT token to user after email has been verified
    Step3->finally user has been registered
    Step4->store jwttoken in localSTorage
    */ 
    return async (dispatch)=>{
        try{
            console.log('data',data);
            const response = await axios.post('http://localhost:5000/api/students/login',data);
            console.log('response',response);
            dispatch({
                type:LOCAL_LOGIN,
                error:response.data.error,
                success:response.data.success,
                payload:response.data.token,
                emailId:response.data.emailId
            });
            if (response.data.token!==null){
                localStorage.setItem('jwtToken',response.data.token);
                return "Yes";
            }
            return "No";
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            })
            return "No";
        }
    }
}


export const googleoAuth = (data)=>{
    return async (dispatch)=>{
        console.log('welocme to google oauth',data);
        try{
            const response = await axios.post('http://localhost:5000/oauth/google',{access_token:data.accessToken});
            console.log('inside googleoauth\'s response',response);
            // const access_token = data.tokenObj.access_token;
            dispatch({
                type:GOOGLE_OAUTH,
                payload:response.data.token,
                error:response.data.error,
                emailId:response.data.emailId,
                success:response.data.success
            });
            if (response.data.token !== null){
                localStorage.setItem('jwtToken',response.data.token);
                return "Yes";
            }
            return "No";

        }catch(err){
            dispatch({
                type:ERROR,
                payload:"Unauthorized"
            });
            return 'No';
        }
    }
}

export const facebookOAuth = (data)=>{
    return async (dispatch)=>{
        console.log('welocme to google oauth',data);

            
            try{
                const response  = await axios.post('http://localhost:5000/oauth/facebook',{access_token:data.accessToken});
                
                    console.log('inside facebookoauth\'s response',response);
                    dispatch({
                        type:FACEBOOK_OAUTH,
                        payload:response.data.token,
                        error:response.data.error,
                        emailId:response.data.emailId,
                        success:response.data.success
                    });
                    if (response.data.token !== null){
                        localStorage.setItem('jwtToken',response.data.token);
                        return "Yes";
                    }
                    return "No";
            }catch(err){
                dispatch({
                    type:ERROR,
                    payload:"Unauthorized"
                });
                return "No";
                
            }

            
            // const access_token = data.tokenObj.access_token;
            // dispatch({
            //     type:GOOGLE_OAUTH,
            //     payload:access_token
            // });



    }
}

export const verificationResult = (data)=>{
    /*
    Step1->make an http request and store all data in database
    Step2->give JWT token to user after email has been verified
    Step3->finally user has been registered
    Step4->store jwttoken in localSTorage
    */ 
    return async (dispatch)=>{
        console.log('data inside verificationResult is',data);
        try{
            const response = await axios.post('http://localhost:5000/getVerificationResult',{
                secretToken:data.secretToken
            });
            console.log('response inside verification result is (after axios)',response);
            dispatch({
                type:EMAIL_VERIFICATION,
                payload:response.data.token,
                success:response.data.success,
                error:response.data.error
            });
            localStorage.setItem('jwtToken',response.data.token);
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            })
        }
    }
}


export const logout = (data)=>{
    /*
    Step1->make an http request and store all data in database
    Step2->give JWT token to user after email has been verified
    Step3->finally user has been registered
    Step4->store jwttoken in localSTorage
    */ 
    return async (dispatch)=>{
        try{
            console.log('data',data);
            const response = await axios.get('http://localhost:5000/api/students/logout');
            console.log('response inside logout',response);
            dispatch({
                type:LOGOUT,
                error:response.data.error,
                success:response.data.success
            });
            localStorage.removeItem('jwtToken');
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            })
            console.log('err',err.message);
        }
    }
}

export const Unauthorized = ()=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:UNAUTHORIZED,
                error:"You are Unauthorized"
            });
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            })
        }
    }
}

export const removeMessage = ()=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:REMOVE_MESSAGE,
                error:"",
                success:""
            });
        }catch(err){
            dispatch({
                type:ERROR,
                payload:err.message
            });
        }
    }
}