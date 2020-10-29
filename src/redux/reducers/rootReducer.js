import { combineReducers } from "redux";
import {AboutUs}from "./about/about"
import {ListQuestion} from "./question/question"
import {ListNews} from "./listNews/listNews"
import {RegistrOrg} from"./registrOrg/registrOrg";
import {BePartnerData} from './bePartner/bePartnerData';
import {RegistrationClient} from './registrationClient/registrationClient'
import {mainGet} from "./main/main"
import {mainResultSearch} from "./mainResultSearch/mainResultSearch"

export const rootReducer = combineReducers({
    AboutUs,
    ListQuestion,
    ListNews,
    RegistrOrg,
    BePartnerData,
    RegistrationClient,
    mainGet,
    mainResultSearch
});