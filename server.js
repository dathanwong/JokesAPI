const express = require("express");
const app = express();

require("./server/Config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

const AllRoutes = require("./Server/Routes/jokes.routes");
AllRoutes(app);

app.listen(8000, () => console.log("Server is listening on port 8000"));