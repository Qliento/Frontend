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
import {ListBasket} from "./basketListResearch/basketListResearch";
import {clientPage} from './clientPage/clientPage';
import {clientData} from './clientPage/clientData';
import {orderResearchReducer} from './orderResearch/orderResearch';
import {bePartnerReducer} from './bePartner/bePartner';
import {changePassword} from './clientPage/changePassword';
import {updateClient} from './clientPage/updateClient';
<<<<<<< HEAD
import {ResearchList} from "./organizationPage/researchList"
=======
import {langReducer} from './lang/lang';
>>>>>>> 52099b65836e66b0fd9e7ec0a661f4353dd593d6

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
    blogCardData,
    ListBasket,
    clientPage,
    clientData,
    orderResearchReducer,
    bePartnerReducer,
    changePassword,
    updateClient,
<<<<<<< HEAD
    ResearchList
=======
    langReducer
>>>>>>> 52099b65836e66b0fd9e7ec0a661f4353dd593d6
});