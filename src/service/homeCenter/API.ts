const bookAPI = `/book`;


const API = {
  getQueryBookList: `${bookAPI}/book/query`,
  getBookList: `${bookAPI}/book/getPageList`,
  getSaveBook: `${bookAPI}/book/save`,
  getUploadBook: `${bookAPI}/upload/`,
};

export default API;
