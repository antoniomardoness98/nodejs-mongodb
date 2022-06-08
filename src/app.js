import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";


const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get('views'), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//midlewares
app.use(morgan('dev')) //permite conocer las peticiones
app.use(express.urlencoded({ extended: false })); //permite usar los objetos de req.body

//Routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')))

export default app;
