const usersStorage = require("../storages/usersStorage")

const usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  })
}

const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  })
}

const usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body
  usersStorage.addUser({ firstName, lastName })
  res.redirect("/")
}

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
}
