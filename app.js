// Express App

const express = require("express")
const app = express()
const usersRouter = require("./routes/usersRouter")
const searchRouter = require("./routes/searchRouter")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use("/", usersRouter)
app.use("/search", searchRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})
