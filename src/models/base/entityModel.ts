import { Contact } from "../crm/contactModel.ts"

export interface Entity{
    id:string,
    name:string,
    desc:string,
    Contact:Contact [],
    author:string,
    createdAt:Date,
    avatar:string,
    status:string,
    email:string,
    other:string,
    createdby:string
};