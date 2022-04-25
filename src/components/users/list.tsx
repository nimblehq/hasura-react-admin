import React from 'react';
import { List, Datagrid, TextField, FunctionField } from 'react-admin';

import Users from 'types/datasource/users';

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="email" />
      <TextField source="phone_number" />
      <TextField source="line_id" />
      <FunctionField
        source="type"
        label="Type"
        render={(user: Users) => {
          if (user.type === 'buyer') {
            return '🤑 Vendor';
          }
          return '💳 Buyer';
        }}
      />
    </Datagrid>
  </List>
);
