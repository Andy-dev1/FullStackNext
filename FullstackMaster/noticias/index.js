const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const User = require("./models/user");
const Noticia = require("./models/noticia")
const noticias = require("./routes/noticias");
const restrito = require("./routes/restrito");
const admin = require("./routes/admin");
const auth = require("./routes/auth");
const pages = require("./routes/pages");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongo = process.env.MONGODB || "mongodb://localhost/noticias";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "fullstack" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", auth);
app.use("/", pages);



app.use("/restrito", restrito);
app.use("/noticias", noticias);
app.use("/admin", admin);


const createInitialUser = async () => {
  const total = await User.countDocuments({  });
  if (total == 0) {
    const user = new User({
      username: "jazz1",
      password: "123456",
      role: ['restrito','admin']
    });
    await user.save();
    const user2 = new User({
      username: "jazz2",
      password: "123456",
      role: ['restrito']
    });
    await user2.save();
    console.log("User created");
  } else {
    console.log("User created Skipped");
  }

  // const noticia = new Noticia({
  //   title: "Noticia publica "+ new Date().getTime(),
  //   content: "Content",
  //   category: "public"
  // })
  // await noticia.save()
  // const noticia2 = new Noticia({
  //   title: "Noticia privada "+ new Date().getTime(),
  //   content: "Content",
  //   category: "private"
  // })
  // await noticia2.save()

};

mongoose
  .connect(mongo)
  .then(() => {
    createInitialUser();
    app.listen(port, () => console.log("Listening..."));
  })
  .catch((e) => console.log(e));
