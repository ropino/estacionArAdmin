import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Main from "./containers/Main";

//importo el Provider
 import { Provider } from "react-redux";
// //importo el Store
 import store from "./redux/store";

export default function App() {
  return (
     <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
     </Provider>
  );
}
