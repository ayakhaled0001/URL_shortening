import { Provider } from "react-redux";
import AdvancedStatistics from "./components/AdvancedStatistics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Shorten from "./components/Shorten";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Hero />
      <Shorten />
      <AdvancedStatistics />
      <Header />
      <Footer />
    </Provider>
  );
}

export default App;
