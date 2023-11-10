import Header from "./pages/Header";

const App = () => {
  return (
    <div className="w-full min-h-screen  bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('./assets/images/bg-img.png')]">
      <div className="container mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default App;
