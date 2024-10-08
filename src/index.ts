import express from "express";
import { userRouter } from "./routes/user";
import { landingpage } from "./routes";
import { postRouter } from "./routes/post";
import { errorHandler, appErrorCathing } from "./middleware/errorCatching";
import { specRouter } from "./routes/spec";
import { checkAuthRoutes } from "./routes/testRoutesCheckAuthorization";
import { loginRouter } from "./routes/login";

import "./authStrategies/local-strategy";

const app = express();
app.use(express.json());
app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", landingpage);
app.use("/", specRouter);
app.use("/", checkAuthRoutes); // test
app.use("/", loginRouter); // test login
app.use(errorHandler);
// app.use(appErrorCathing);

const SERVER_PORT = process.env.SERVER_PORT || 1337;

app.listen(SERVER_PORT, () => {
  console.log("Server started on: " + SERVER_PORT);
});
