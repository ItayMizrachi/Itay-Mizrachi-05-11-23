import useLocalStorage from "../../hooks/useLocalStorage";
import CityCard from "../components/favs/CityCard";

const Favs = () => {
  const [savedCities, setSavedCities] = useLocalStorage("cities", []);

  const removeFromFavorites = (cityKey) => {
    const newSavedCities = savedCities.filter((city) => city.Key !== cityKey);
    setSavedCities(newSavedCities);
  };

  return (
    <div className="my-container mx-auto my-8 md:min-h-[50vh] min-h-[70vh]">
      <h1 className="font-semibold text-3xl my-4 ml-6 md:ml-16 ">
        Favorite Cities
      </h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center">
        {savedCities.length === 0 ? (
          <p className=" md:ml-14 text-center w-full">
            You haven't saved any cities yet.
          </p>
        ) : (
          savedCities.map((city) => (
            <CityCard city={city} removeFromFavorites={removeFromFavorites} />
          ))
        )}
      </main>
    </div>
  );
};

export default Favs;