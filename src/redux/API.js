import Axios from "axios";

const http = Axios.create({
  baseURL: "http://207.154.250.71",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "ru",
  },
});

export default {
  bePartner: (data) => http.post("/feedback/", data),
  blogData: () => http.get('/blog/'),
  blogCardData: (id) => http.get(`/blog/${id}`),
  interiorPage:(id)=>http.get(`/researches/${id}`),
  searchMarketCerds:(category,subcaregory,author,country,text)=>http.get(`//researches/?country__name__icontains=${country}&category__name__iexact=${subcaregory}&hashtag__name__icontains=${text}&category=${category}&author__logo__icontains=${author}`),
  orderResearch: (data) => http.post("/purchase/order-form/", data),
  getMainData: () => http.get("/main-page/"),
  createToken: (data) => http.post('/auth/jwt/create/', data),
  agreementData: () => http.get('/users/qliento-consent/'),
  recoveryPassword: (data) => http.post('users/send-email/', data),
  bePartnerData: () => http.get("/partnership"),
  orderResearchData: () => http.get('/purchase/short-descriptions/'),
  registrationClient: (data) =>
    http.post("/users/registration/clients/", {
      client_status: { ...data },
    }),
  resultSearchList: (category, text) =>
    http.get(
      `/researches/?category__name__iexact=${category}&hashtag__name__exact=${text}`
    ),
  listResearchCategory: (category) =>
    http.get(
      `http://207.154.250.71/researches/?category__name__iexact=${category}`
    ),
    dataFilter:()=>http.get(`http://207.154.250.71/filters/`),
    allListResearch:()=>http.get(`http://207.154.250.71/researches/`),
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
};
