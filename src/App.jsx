import Banner from "./pages/Banner";
import DonationsCategory from "./pages/DonationsCategory";

const App = () => {
  return (
    <div>
      <div className="w-full min-h-[50vh]  bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url('./assets/images/bg-img.png')]">
        <div className="lg:container mx-auto p-5">
          <Banner />
        </div>
      </div>
      <div className="lg:container mx-auto p-5">
        <DonationsCategory />
      </div>
    </div>
  );
};

export default App;
