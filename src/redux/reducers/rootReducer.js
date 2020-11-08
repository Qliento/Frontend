import { combineReducers } from "redux";
import {AboutUs}from "./about/about"
import {ListQuestion} from "./question/question"
import {ListNews} from "./listNews/listNews"
import {RegistrOrg} from"./registrOrg/registrOrg";
import {BePartnerData} from './bePartner/bePartnerData';
import {RegistrationClient} from './registrationClient/registrationClient';
import {authentication} from './authClient/authClient';
import {Agreement} from './agreement/agreement';
import {mainGet} from "./main/main"
import {mainResultSearch} from "./mainResultSearch/mainResultSearch"
import {FilterMarket} from "./filterMarket/filterMarket"
import {orderResearchData} from './orderResearch/orderResearchData';
import { blogData } from './blog/blog';
import {detailDataResearch} from "./detailResearch/detailResearch";
import {blogCardData} from './blog/blogCard';

export const rootReducer = combineReducers({
    AboutUs,
    ListQuestion,
    ListNews,
    RegistrOrg,
    BePartnerData,
    RegistrationClient,
    authentication,
    Agreement,
    mainGet,
    mainResultSearch,
    FilterMarket,
    orderResearchData,
    blogData,
    detailDataResearch,
    blogCardData
});