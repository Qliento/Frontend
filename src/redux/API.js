import Axios from "axios";

const http = Axios.create({
  baseURL: "https://qliento.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "ru",
  },
});

export default {
  url: () => "http://207.154.250.71",
  bePartner: (data) => http.post("/feedback/", data),
  blogData: () => http.get("/blog/"),
  clientPage: (token) =>
    http.get("/purchase/my-orders/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  blogCardData: (id) => http.get(`/blog/${id}`),
  interiorPage: (id) => http.get(`/researches/${id}`),
  searchMarketCerds: (category, subcaregory, author, country, text) =>
    http.get(
      `/researches/?country__name__icontains=${country}&category__name__iexact=${subcaregory}&hashtag__name__icontains=${text}&category=${category}&author__logo__icontains=${author}`
    ),
  orderResearch: (data) => http.post("/purchase/order-form/", data),
  getMainData: () => http.get("/main-page/"),
  createToken: (data) => http.post("auth/jwt-create/", data),
  pushBasket: (id, token) =>
    http.post(
      `/purchase/add-to-cart/`,
      {
        ordered_items: id,
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
    http.get(`/researches/?hashtag__name__icontains=${text}`),
  listResearchCategory: (category) =>
    http.get(`/researches/?&category=${category}`),
  searchCategoryText: (category, text) =>
    http.get(
      `/researches/?hashtag__name__icontains=${text}&category=${category}`
    ),
  dataFilter: () => http.get(`/filters/`),
  allListResearch: () => http.get(`/researches/`),
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
      admin_status: {
        name: data.name,
        surname: data.lastName,
        password: data.password,
        password_check: data.repeatPassword,
        email: data.email,
        phone_number: data.phone,
      },
    }),
};
