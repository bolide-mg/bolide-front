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
import CarList from "@/components/admin/CarList";
import ImageList from "@/components/admin/ImageList";
import CreateImages from "@/components/admin/CreateImages";

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
      list={CarList}
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
      list={ImageList}
      edit={EditGuesser}
      create={CreateImages}
    />
  </Admin>
);

export default AdminApp;
