import React, { useEffect, useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';

import buildHasuraProvider from 'ra-data-hasura';

import 'dummy.scss';
import 'assets/stylesheets/application.scss';
import { UserList } from 'components/users/list';

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider>();

  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        clientOptions: { uri: 'http://nimble-hasura.herokuapp.com/v1/graphql' },
      });
      setDataProvider(() => dp);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  // <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} />
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
