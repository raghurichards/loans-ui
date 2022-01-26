export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  // BASE_URL: 'https://loanmanager-d860b.web.app:3000/',

  CUSTOMER_BASE_URL: 'http://localhost:3000/customers/',
  //CUSTOMER_BASE_URL: 'https://loanmanager-d860b.web.app:3000/customers/',

  CUSTOMER: {
    POST_CUSTOMER: 'add',
    GET_ALL_CUSTOMERS: 'list',
    GET_CUSTOMER: 'view',
    UPDATE_CUSTOMER: 'update',
    DELETE_CUSTOMER: 'delete',
    SEARCH_CUSTOMER: 'view',
  },
  LOAN: {
    GET_ALL_LOANS: 'list',
    GET_LOAN: 'view',
    UPDATE_LOAN: 'update',
    DELETE_LOAN: 'delete',
    SEARCH_LOAN: 'delete',
  },
};
