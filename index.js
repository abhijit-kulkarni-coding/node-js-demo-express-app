import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("APK Node.js worked!!!")
})

app.listen(process.env.PORT || 5000)

export default app;