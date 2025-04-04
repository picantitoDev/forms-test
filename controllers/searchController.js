const usersStorage = require("../storages/usersStorage.js")

const searchGet = (req, res) => {
  console.log(res.locals)
  res.render("searchUser", { title: "Search User" })
}

const searchResultGet = (req, res) => {
  const { name, email } = req.query
  const users = usersStorage.storage

  let foundUser = null
  Object.values(users).forEach((user) => {
    if (user.firstName === name && user.email === email) {
      foundUser.firstName = user.firstName
      foundUser.lastName = user.lastName
      foundUser.email = user.email
      foundUser.age = user.age
      foundUser.bio = user.bio
    }
  })

  if (!foundUser) {
    return res.render("404")
  }
  res.render("searchResult", { title: "User Found!", user: foundUser })
}

module.exports = {
  searchGet,
  searchResultGet,
}
