import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Contact } from "../../models/crm/contactModel.ts";

let contacts: Contact[] = [
  {
    id:"1",
    city:"Maputo",
    address:"",
    zone:"",
    district:"",
    mobile:"+258849535156",
    telphone:"",
    otherContact:"",
    email:"",
    other:"",
    createdby:"gmahota",
    source:"facebook"
  },
  {
    id:"2",
    city:"Maputo",
    address:"",
    zone:"",
    district:"",
    mobile:"+258849535156",
    telphone:"",
    otherContact:"",
    email:"",
    other:"",
    createdby:"gmahota",
    source:"Email"
  },
  { 
    id:"3",
    city:"Maputo",
    address:"",
    zone:"",
    district:"",
    mobile:"+258849535156",
    telphone:"",
    otherContact:"",
    email:"",
    other:"",
    createdby:"gmahota",
    source:"email"
  },
];

export const get_all_contacts = (ctx: Context) => {
  return ctx.json(contacts, 200);
};

export const get_contact = (ctx: Context) => {
  const { id } = ctx.params;
  const contact = contacts.find((b: Contact) => b.id === id);
  if (contact) {
    return ctx.json(contact, 200);
  }
  return ctx.string("no contact with that id", 404);
};

export const create_contact = async(ctx: Context) => {
  const { 
    city,
    address,
    zone,
    district,
    mobile,
    telphone,
    otherContact,
    email,
    other,
    createdby,
    source 
} = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const contact = { id, city,
    address,
    zone,
    district,
    mobile,
    telphone,
    otherContact,
    email,
    other,
    createdby,
    source  };
  contacts.push(contact);

  return ctx.json(contact, 201);
};

export const delete_contact = (ctx: Context) => {
    const { id } = ctx.params;
  const contact = contacts.find((b: Contact) => b.id === id);
  
  if (contact) {
    contacts = contacts.filter((b: Contact) => b.id !== id);
    return ctx.json(contact, 200);
  }
  return ctx.string('no contact with that id', 404);
};
