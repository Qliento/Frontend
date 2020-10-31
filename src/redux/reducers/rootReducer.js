import { combineReducers } from "redux";
import {AboutUs}from "./about/about"
import {ListQuestion} from "./question/question"
import {ListNews} from "./listNews/listNews"
import {RegistrOrg} from"./registrOrg/registrOrg";
import {BePartnerData} from './bePartner/bePartnerData';
import {RegistrationClient} from './registrationClient/registrationClient';
import {authentication} from './authClient/authClient';
import {Agreement} from './agreement/agreement';

export const rootReducer = combineReducers({
    AboutUs,
    ListQuestion,
    ListNews,
    RegistrOrg,
    BePartnerData,
    RegistrationClient,
    authentication,
    Agreement
});