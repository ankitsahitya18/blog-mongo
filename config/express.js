const path = require("path");
const app = require(path.resolve("config/app"))

app.listen(process.env.PORT, () => {
    require('./swaggerConfig')(app);
    console.log(`Server started on PORT ${process.env.PORT}!`);
})