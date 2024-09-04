import { axi } from "../../../config/axios"
import {  SIGN_IN } from '../../../config/consts'
import { IAuthData } from "../types/types"
import { setAuthToken } from "../../../helpers/token"

export const authorization = async (data : IAuthData) => {
    const result  = await axi.post(SIGN_IN, data)

    if(result.data.error_code === 0)  {
        setAuthToken(result.data.data.token)
        return 200
    }
    
    return 404

}