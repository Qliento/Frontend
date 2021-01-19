import Axios from "axios";


let lang = localStorage.getItem('lang');
let http;

if(lang == 2){
  http = Axios.create({
    baseURL: "https://back.qliento.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });
}

else if(lang == 3){
  http = Axios.create({
    baseURL: "https://back.qliento.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": "ky",
    },
  });
}
else{
  http = Axios.create({
    baseURL: "https://back.qliento.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": "ru",
    },
  });
}

const httpUpadate = Axios.create({
  baseURL: "https://back.qliento.com",
  headers: {
    // Accept: "application/json",
    "Accept-Language": "ru",
  },
});



export default {
  url: () => "http://207.154.250.71",
  bePartner: (data) => http.post("/feedback/", data),
  blogData: () => http.get("/blog/"),
  authClient: (data) => http.post("/users/login/clients/", data),
  clientPage: (token) =>
    http.get("/purchase/my-orders/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  clientData: (token) =>
    http.get("/users/update/users/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  organData: (token) =>
    http.get(`/users/update/partners/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  blogCardData: (id) => http.get(`/blog/${id}`),
  interiorPage: (id) => http.get(`/researches/${id}`),
  searchMarketCerds: (category, subcaregory, author, country, text) =>
    http.get(
      `/researches/?country__name__icontains=${country}&category__name__iexact=${subcaregory}&hashtag__name__icontains=${text}&category=${category}&author__logo__icontains=${author}`
    )
   ,
  orderResearch: (data) => http.post("/purchase/order-form/", data),
  getMainData: () => http.get("/main-page/"),
  createToken: (data) => http.post("/users/jwt-create/", data),
  pushBasket: (id, token) =>
    http.post(
      `/purchase/add-to-cart/`,
      {
        ordered_item: id,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ),
  getBasket: (token) =>
    http.get(`/purchase/cart/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  deleteResearchBasket: (id, token) =>
    http.delete(`/purchase/delete-from-cart/${id}/`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  agreementData: () => http.get("/users/qliento-consent/"),
  recoveryPassword: (data) => http.post("users/send-email/", data),
  bePartnerData: () => http.get("/partnership"),
  orderResearchData: () => http.get("/purchase/short-descriptions/"),
  registrationClient: (data) =>
    http.post("/users/registration/clients/", {
      client_status: { ...data },
    }),
  resultSearchList: (text) =>
    http.get(`/researches/?name__icontains=${text}`),
  listResearchCategory: (category) =>
    http.get(`/researches/?&category=${category}`),
  searchCategoryText: (category, text) =>
    http.get(
      `/researches/?name_icontains=${text}&category=${category}`
    ),
  dataFilter: () => http.get(`/filters/`),
  allListResearch: () => http.get(`/research/`),
  aboutData: () => http.get("/about-us/"),
  ListNews: () => http.get("/news"),
  getQuestion: () => http.get("/faq"),
  sendQuestions: (data) =>
    http.post("/have-question/", {
      name: data.fio,
      name_of_organization: data.name,
      email: data.email,
      phone: data.phone,
      extra: data.question,
    }),
  registrOrg: (data) =>
    http.post(`/users/registration/researchers/`, {
      logo: data.name2,
      position: data.position && data.position,
      admin_status: {
        name: data.name,
        surname: data.lastName,
        password: data.password,
        password_check: data.repeatPassword,
        email: data.email,
        phone_number: data.phone,
      },
    }),
  changePassword: (data) => http.post("/users/password-update/", data),
  updateDataOrganization: (data, token) =>
  httpUpadate.patch(
      "/users/update/partners/",
     data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ),
  changePassword: (data, token) =>
    http.patch("/users/password-update/", data, {
      headers: { Authorization: "Bearer " + token },
    }),
  updateClient: (data, token) =>
      httpUpadate.put("/users/update/users", data, {
      headers: { Authorization: "Bearer " + token },
    }),
  getResearchListOrgn: (token) =>
    http.get(`/users/my-researches/`, {
      headers: { Authorization: "Bearer " + token },
    }),
  detailResearchOrg: (token, id) =>
    http.get(`/my-research/${id}/`, {
      headers: { Authorization: "Bearer " + token },
    }),
  UbdateResearch: (price, id,token) =>
    http.put(`/update-discount/${id}/`, price, {
      headers: { Authorization: "Bearer " + token },
    }),
  networkData: ()=> http.get('/social-networks/'),
    UploadResearch:(data,token)=>http.post(`/research-upload/`,data
    ,{
    headers: { Authorization: "Bearer " + token },
  }
    ),
  authSocial: (user, token) => http.post('/users/google/',{
    auth_token : token,
    user: user
  }),
  authSocialFace: (user, token) => http.post('/users/facebook/',{
    auth_token : token,
    user: user
  }),
  sendDemoVersionApi:(data,id)=>http.post(`purchase/send-demo/`,{
    desired_research:id ,
    name: data.name,
    phone_number: data.phone ,
    email: data.email
  }),
  staticResearchApi: (id,key,token)=>http.get(`/purchase/statistics/${id}/${key}/`,{
    headers: { Authorization: "Bearer " + token },
  }),
  payResearchApi: (data,token)=> http.post(`/purchase/orders/`,{
    items_ordered:data
  },{
    headers: { Authorization: "Bearer " + token }
  }),
  authSocialTwit: (user, token, secret) => http.post('/users/twitter/',{
    access_token_key : token,
    access_token_secret : secret,
    user: user
  }),
  refreshToken: (token) =>
    http.post(`/auth/jwt/refresh/`, {
      'refresh' : token,
    }),
    downLoadFilesAPI: (id,token)=>http.get(`/purchase/download/${id}/`,{
        headers: { Authorization: "Bearer " + token }
    })
};


