/****************************IMPORT INSTALLED MODULES****************************/
require("dotenv").config();


/****************************EXPORTS****************************/
// module.export = {
//   mongoDbUrl:
//     "mongodb+srv://MeanFluff:1111@meanfluff.l3h8th1.mongodb.net/?retryWrites=true&w=majority",
//   secret: "fluff",
//   PORT: process.env.PORT || 3000,
// };


module.exports = {
  DB: process.env.APP_DB,
  PORT: process.env.APP_PORT,
  SECRET: process.env.APP_SECRET,
  SUPERADMIN_SECRET: process.env.SUPERADMIN_SECRET,
};
