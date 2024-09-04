export interface IUserDocs {
    companySigDate: string
    companySignatureName: string
    documentName: string
    documentStatus: string
    documentType: string
    employeeNumber: string
    employeeSigDate: string
    employeeSignatureName: string
    id: string
}

export  interface IStateUserDocs  {
    docs: IUserDocs[]
}