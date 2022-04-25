import * as React from 'react';
import { Create, SimpleForm, TextInput, required, email, SelectInput, DateInput } from 'react-admin';

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="first_name" validate={[required()]} fullWidth />
      <TextInput source="last_name" validate={[required()]} fullWidth />
      <TextInput source="email" validate={[email()]} fullWidth />
      <TextInput source="phone_number" validate={[required()]} fullWidth />
      <TextInput source="line_id" validate={[required()]} fullWidth />
      <TextInput source="profile_picture" fullWidth />
      <SelectInput
        choices={[
          { id: 'buyer', name: '💳 Buyer' },
          { id: 'vendor', name: '🤑 Vendor' },
        ]}
        source="type"
      />
      <DateInput source="created_at" hidden value={Date.now()} />
      <DateInput source="updated_at" hidden value={Date.now()} />
    </SimpleForm>
  </Create>
);
