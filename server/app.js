const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("", {}, () => {});
};

const app = express();

const start = async () => {};
