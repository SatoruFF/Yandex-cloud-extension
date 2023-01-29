import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/MyNavbar";
import { setupStore } from "./store/store";

function App() {
  const store = setupStore();

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MyNavbar></MyNavbar>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
