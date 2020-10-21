import { combineReducers } from "redux";
<<<<<<< HEAD
import {AboutUs}from "./about/about";
=======
import {AboutUs}from "./about/about"
import {ListQuestion} from "./question/question"
import {ListNews} from "./listNews/listNews"
import {RegistrOrg} from"./registrOrg/registrOrg"
>>>>>>> 6b38426db5b36fe0b8ba2874912a86aeae38e18d

export const rootReducer = combineReducers({
    AboutUs,
    ListQuestion,
    ListNews,
    RegistrOrg
});