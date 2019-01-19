const devConfig = {};

const uatConfig = {};

const prodConfig = {};

const defaultConfig = {
  port: process.env.port || 3000,
  env: 'development',
  mongodbURL: 'mongodb://127.0.0.1:27017/myhr'
};

function envConfig (env) {
  switch (env) {
    case 'development':
      return defaultConfig;
  }
}

export default  {
  ...envConfig(process.env.NODE_ENV),

  setup () {
    console.log('hi');
  }
};
