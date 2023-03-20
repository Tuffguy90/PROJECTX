const express = require("express")
const cors = require("cors")
const db = require("./models")
const app = express()
const routes = require("./routes/index")
const userRoutes = require("./controllers/userController")
const verifyToken = require("./middlewares/verifyToken")
const print = require("./common/debug");
require("dotenv").config()
var corsOptions = {
  origin: "http://localhost:8081",
}
const appPrefix = "/api/v1"

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to projectx application." })
})
app.post(appPrefix + "/login", userRoutes.login)

app.use(verifyToken)
app.use(appPrefix, routes)

// set port, listen for requests
const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
  // db.sequelize
  //   .sync()
  //   .then(() => {
  //     console.log("Synced db.")
  //   })
  //   .catch((err) => {
  //     console.log("Failed to sync db: " + err.message)
  //   })
  /**
   * List of all route path
   */
  app._router.stack.forEach(print.bind(null, []))
  console.log(`Server is running on port ${PORT}.`)
})
