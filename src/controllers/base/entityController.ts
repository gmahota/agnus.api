import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Entity } from "../../models/base/entityModel.ts";

let entities: Entity[] = [
  {
    id: "1",
    name: "",
    desc: "",
    Contact: [{
      id: "2",
      city: "Maputo",
      address: "",
      zone: "",
      district: "",
      mobile: "+258849535156",
      telphone: "",
      otherContact: "",
      email: "",
      other: "",
      createdby: "gmahota",
      source: "Email",
    }],
    author: "gmahota",
    createdAt: new Date(),
    avatar: "",
    status: "",
    email: "",
    other: "",
    createdby: "gmahota",
  },
  {
    id: "2",
    name: "",
    desc: "",
    Contact: [],
    author: "gmahota",
    createdAt: new Date(),
    avatar: "",
    status: "",
    email: "",
    other: "",
    createdby: "gmahota",
  },
  {
    id: "3",
    name: "",
    desc: "",
    Contact: [],
    author: "gmahota",
    createdAt: new Date(),
    avatar: "",
    status: "",
    email: "",
    other: "",
    createdby: "gmahota",
  },
];

export const get_all_entities = (ctx: Context) => {
  return ctx.json(entities, 200);
};

export const get_entity = (ctx: Context) => {
  const { id } = ctx.params;
  const entity = entities.find((b: Entity) => b.id === id);
  if (entity) {
    return ctx.json(entity, 200);
  }
  return ctx.string("no entity with that id", 404);
};

export const create_entity = async (ctx: Context) => {
  const {
    name,
    desc,
    Contact,
    author,
    createdAt,
    avatar,
    status,
    email,
    other,
    createdby,
  } = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const entity = {
    id,
    name,
    desc,
    Contact,
    author,
    createdAt,
    avatar,
    status,
    email,
    other,
    createdby,
  };
  entities.push(entity);

  return ctx.json(entity, 201);
};

export const delete_entity = (ctx: Context) => {
  const { id } = ctx.params;
  const entity = entities.find((b: Entity) => b.id === id);

  if (entity) {
    entities = entities.filter((b: Entity) => b.id !== id);
    return ctx.json(entity, 200);
  }
  return ctx.string("no entity with that id", 404);
};
