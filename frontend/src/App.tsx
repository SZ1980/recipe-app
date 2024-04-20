import { FormEvent, useState } from "react";
//  useEffect, useRef,
import * as api from "./api";
import { Recipe } from "./types";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(
  //   undefined
  // );
  // const [selectedTab, setSelectedTab] = useState<Tabs>("search");
  // const [favouriteRecipes, setFavouriteRecipes] = useState<Recipe[]>([]);
  // const pageNumber = useRef(1);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);

      // pageNumber.current = 1;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={(event) => handleSearchSubmit(event)}>
          <input
            type="text"
            required
            placeholder="Enter the search term..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">submit</button>
        </form>

        {recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe}
            // onClick={() => setSelectedRecipe(recipe)}
            // onFavouriteButtonClick={
            //   isFavourite ? removeFavouriteRecipe : addFavouriteRecipe
            // }
            // isFavourite={isFavourite}
          />
        ))}
      </div>
    </>
  );
}

export default App;
