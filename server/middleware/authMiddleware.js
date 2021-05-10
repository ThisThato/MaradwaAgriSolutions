import jwt from "jsonwebtoken";
import asynchandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asynchandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");

      //console.log(req.user._id);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorised, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorised, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorised as an admin");
  }
};

export { protect, admin };
