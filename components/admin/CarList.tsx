import {CreateButton, Datagrid, List, TextField} from "react-admin"
import React from "react";

const Main = () => (
  <List title="List of car">
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="brand" />
      <TextField source="model" />
      <CreateButton label="Add Images" resource="images" />
    </ Datagrid>
  </ List>
)

export default Main;