
import { persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./src/components/ui/Loading";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/store/store";


const root = () => {
    return <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

}

export default root;

