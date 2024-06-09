import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FavoriteList } from "./favorite/FavoriteList";
import { FavoriteCreate } from "./favorite/FavoriteCreate";
import { FavoriteEdit } from "./favorite/FavoriteEdit";
import { FavoriteShow } from "./favorite/FavoriteShow";
import { NewArrivalList } from "./newArrival/NewArrivalList";
import { NewArrivalCreate } from "./newArrival/NewArrivalCreate";
import { NewArrivalEdit } from "./newArrival/NewArrivalEdit";
import { NewArrivalShow } from "./newArrival/NewArrivalShow";
import { SneakerList } from "./sneaker/SneakerList";
import { SneakerCreate } from "./sneaker/SneakerCreate";
import { SneakerEdit } from "./sneaker/SneakerEdit";
import { SneakerShow } from "./sneaker/SneakerShow";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"The Sole Stash"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Favorite"
          list={FavoriteList}
          edit={FavoriteEdit}
          create={FavoriteCreate}
          show={FavoriteShow}
        />
        <Resource
          name="NewArrival"
          list={NewArrivalList}
          edit={NewArrivalEdit}
          create={NewArrivalCreate}
          show={NewArrivalShow}
        />
        <Resource
          name="Sneaker"
          list={SneakerList}
          edit={SneakerEdit}
          create={SneakerCreate}
          show={SneakerShow}
        />
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
