import app from "./src/app";
import "./src/model/connection";

function startServer() {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`✅ Server has started at port ${port}`);
  });
}

startServer();
