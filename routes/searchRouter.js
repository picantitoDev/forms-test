const { Router } = require("express")
const searchRouter = Router()
const searchController = require("../controllers/searchController")

searchRouter.get("/", searchController.searchGet)

searchRouter.get("/result", searchController.searchResultGet)

module.exports = searchRouter
