"use client"; // remove this line if you choose Pages Router

import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  CreateBase,
} from "react-admin";
import jsonAdminProvider from "@/axios/jsonAdminProvider";

const AdminApp = () => (
  <Admin dataProvider={jsonAdminProvider}>
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
  </Admin>
);

export default AdminApp;
