import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Press from "./Components/Press/Press";
import UserReview from "./Components/User Review/UserReview";
import DemoComponent from "./DemoComponent";

function App() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Header />
      <Hero />
      <UserReview />
      <Press />
      <Footer />
    </div>
  );
}

export default App;
