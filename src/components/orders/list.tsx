import React from 'react';
import { List, Datagrid, TextField, DateField, FunctionField, ReferenceField } from 'react-admin';

import Users from 'types/datasource/users';

export const OrderList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="buyer_id" reference="users">
        <FunctionField label="Buyer" render={(user: Users) => `${user.last_name} ${user.first_name}`} />
      </ReferenceField>
      <ReferenceField source="vendor_id" reference="users">
        <FunctionField label="Vendor" render={(user: Users) => `${user.last_name} ${user.first_name}`} />
      </ReferenceField>
      <TextField source="message" />
      <TextField source="status" />
      <TextField source="shop_id" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);
