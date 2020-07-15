process.env.PROD = {
  payment_key: {
    public_key: '',
  },
  custom_parameters: {
    credential: 'PROD',
  },
  showItems: ['category/subcategoty', 'category/subcategoty', 'category/subcategoty'],
};

process.env.QA = {
  payment_key: {
    public_key: '',
  },
  custom_parameters: {
    credential: 'QA',
  },
  showItems: ['category/subcategoty', 'category/subcategoty', 'category/subcategoty'],
};

module.exports = CREDENTIALS;
