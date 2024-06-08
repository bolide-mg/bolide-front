"use client"

import authProvider from "@/Provider/authProvider";

import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  CreateBase,
} from "react-admin";
import jsonAdminProvider from "@/axios/jsonAdminProvider";

const AdminApp = () => (
  <Admin dataProvider={jsonAdminProvider}  authProvider={authProvider}>
    <Resource
       name="admin"
       list={ListGuesser}
       edit={EditGuesser}
       create={CreateBase}
    />
    <Resource
      name="car"
      list={ListGuesser}
      edit={EditGuesser}
      create={CreateBase}
    />
    <Resource
      name="appointment"
      list={ListGuesser}
      edit={EditGuesser}
      create={CreateBase}
    />
    <Resource
      name="images"
      list={ListGuesser}
      edit={EditGuesser}
      create={CreateBase}
    />
  </Admin>
);

export default AdminApp;
