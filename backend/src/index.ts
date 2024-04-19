import express from 'express'
import cors from 'cors'
import "dotenv/config";
import * as RecipeAPI from './recipe-api'


const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/recipes/search", async (req, res) => {
  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);

  return res.json(results);
  // res.json({message: 'success!'})
})

app.listen(5000, () => {
    console.log('App is running on port 5000!')
})