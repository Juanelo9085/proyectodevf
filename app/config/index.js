const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {
  dev:{
    SECRET_KEY: "ABCDE12345",
    db:{
        url:"mongodb+srv://juanelo:juanelo9085@cluster0-ond1k.mongodb.net/proyecto?retryWrites=true",
    }
},
  test: {},
  production: {
    SECRET_KEY: process.env.SECRET_KEY,
    db: {
      url: process.env.MONGO_URL,
    }
  },
};

module.exports  = ENVS[NODE_ENV];
