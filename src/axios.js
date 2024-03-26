import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "cf016d8d";

const instance = axios.create({
    baseURL: "http://www.omdbapi.com/?s=" // Note the correct capitalization: "baseURL"
   
});
// console.log(baseURL);
// console.log(instance.defaults.baseURL);
export default instance;
