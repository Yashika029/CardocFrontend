import { myAxios } from "./Helper";


export const signUp=(data)=>{
    return myAxios.post('/customer/customers',data).then((response)=>response.data)
}

export const signUpEmp=(data)=>{
    return myAxios.post('/employee/employees',data).then((response)=>response.data)
}

export const signIn=(login)=>{
 return myAxios.post('',login).then((response)=>response.data)
}

