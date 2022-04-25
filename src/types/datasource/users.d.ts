import { string } from 'prop-types';

type Users = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  line_id: string;
  type: 'vendor' | 'buyer';
};

export default Users;
