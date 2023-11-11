import Search from "../components/header/Search";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div className="my-container mx-auto px-4">
      <div className="sm:hidden mt-8">
        <Search/>
      </div>
      <Main />
    </div>
  );
};

export default Home;
