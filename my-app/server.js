const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000

// Serve static files from the React app in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

