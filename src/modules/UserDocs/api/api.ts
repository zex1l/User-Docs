import { axi } from "../../../config/axios"
import { DELETE_USER_DOC_BY_ID, GET_ALL_DOCS, UPDATE_USER_DOC_BY_ID } from "../../../config/consts"
import { getAuthToken } from "../../../helpers/token"
import { IUserDocs } from "../../../types/IUserDocs"


export const getUserDocsData = async () => {
    const token = getAuthToken()

    const result = await axi.get(GET_ALL_DOCS, {
        headers: {
            'x-auth': token
        }
    })

    return result.data
}

export const getUserDocsById = async(id:string) => {
    const token = getAuthToken()

    const result = await axi.get(GET_ALL_DOCS, {
        headers: {
            'x-auth': token
        }
    })

    if(result.data.error_code === 0) {
        const currentDocumnet = result.data.data.filter((doc:IUserDocs) => doc.id === id)[0]
        return currentDocumnet
    }
    return result.data.error_code
}


export const updateUserDoc = async(document: IUserDocs) => {
    const token = getAuthToken()

    const result = await axi.post(UPDATE_USER_DOC_BY_ID + document.id, document,  { 
        headers: {
            'x-auth': token
        }
    })

    return result.data
}

export const deleteCurrentUserDoc = async(id:string) => {
    const token = getAuthToken()
    const response = await axi.post(DELETE_USER_DOC_BY_ID + id, id, {
        headers: {
            'x-auth': token
        }
    })

    return response.data
}
