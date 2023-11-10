import Header from "./pages/Header";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div>
      <div className="w-full min-h-screen  bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('./assets/images/bg-img.png')]">
        <div className="lg:container mx-auto p-5">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
