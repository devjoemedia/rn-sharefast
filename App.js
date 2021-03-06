import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/redux/store";
import RootStack from "./RootStack";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
}
