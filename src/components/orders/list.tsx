import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const OrderList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="buyer_id" />
      <TextField source="vendor_id" />
      <TextField source="message" />
      <TextField source="status" />
      <TextField source="shop_id" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);
