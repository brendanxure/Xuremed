const express = require('express');
const app = express()
const mongoose = require('mongoose')
const {readdirSync} = require('fs')
require('dotenv').config()


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected')).catch(err => console.log("DB connection",err))

app.use(express.json())

readdirSync("./route").map((r) => app.use("/api", require(`./route/${r}`)));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

