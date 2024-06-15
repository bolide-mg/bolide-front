import { Datagrid, EditButton, List, TextField, UrlField } from "react-admin";
import React from "react";

const Main = () => (
  <List title="List of car">
    <Datagrid>
      <TextField source="id" />
      <EditButton />
      <TextField source="car.name" />
      <UrlField source="url" />
    </Datagrid>
  </List>
);

export default Main;
