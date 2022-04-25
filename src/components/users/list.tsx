import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="first_name" />
      <DateField source="last_name" />
      <TextField source="email" />
      <TextField source="phone_number" />
      <TextField source="line_id" />
    </Datagrid>
  </List>
);
