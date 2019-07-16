import {REGISTER,ERROR,GOOGLE_OAUTH,FACEBOOK_OAUTH, EMAIL_VERIFICATION,LOCAL_LOGIN,LOGOUT,UNAUTHORIZED,REMOVE_MESSAGE} from '../actions/types';
const DEFAULT_STATE = {
    isAuthenticated:false,
    error:'',
    token:'',
    success:''
};

export default (state = DEFAULT_STATE,action)=>{
    if (action.type === REGISTER){
        return {...DEFAULT_STATE,isAuthenticated:false,error:action.error,success:action.success};
    }else if (action.type === ERROR){
        return {...DEFAULT_STATE,error:action.payload,isAuthenticated:false,token:""};
    }
    else if (action.type === GOOGLE_OAUTH){
        if (action.payload!==null){
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:true,error:action.error,success:action.success};
        }
        else{
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:false,error:action.error,success:action.success};
        }
    }else if (action.type === FACEBOOK_OAUTH){
        if (action.payload!==null){
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:true,error:action.error,success:action.success};
        }
        else{
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:false,error:action.error,success:action.success};
        }
    }else if (action.type === LOCAL_LOGIN){
        if (action.payload!==null){
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:true,error:action.error,success:action.success};
        }
        else{
            return {...DEFAULT_STATE,token:action.payload,isAuthenticated:false,error:action.error,success:action.success};
        }
    }else if (action.type === EMAIL_VERIFICATION){
        return {...DEFAULT_STATE,token:action.payload,error:action.error,success:action.success,isAuthenticated:false};
    }else if (action.type === LOGOUT){
        return {...DEFAULT_STATE,token:null,error:action.error,success:action.success,isAuthenticated:false};
    }else if (action.type === UNAUTHORIZED){
        return {...DEFAULT_STATE,token:null,isAuthenticated:false,error:action.error};
    }else if(action.type === REMOVE_MESSAGE){
        return {...DEFAULT_STATE,error:"",success:""};
    }
    return state;
}