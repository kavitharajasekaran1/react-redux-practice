import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import UsersContainer from './components/UsersContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <UsersContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  )
}

export default App
