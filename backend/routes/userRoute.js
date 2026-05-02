import express from "express";
import { geCurrentUser, loginUser, registerUser, UpdatePassword, UpdateProfile,} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";
import e from "express";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//protected Route

userRouter.get("/me",authMiddleware,geCurrentUser);
userRouter.put("/profile",authMiddleware,UpdateProfile);
userRouter.put("/password",authMiddleware,UpdatePassword);

export default userRouter;