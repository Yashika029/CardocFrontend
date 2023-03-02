import { myAxios } from "./Helper";


export const signUp=(user)=>{
    return myAxios.post('/customer/customers',user).then((response)=>response.data)
}