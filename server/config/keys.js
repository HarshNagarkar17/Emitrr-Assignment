require("dotenv").config({path: "../.env"});

module.exports = {
    keys:{
        uri: process.env.URI,
        port: process.env.PORT,
        secret: process.env.SECRET,
        emailId: process.env.EMAIL_ID,
        emailPassword: process.env.EMAIL_PASSWORD   
    },
    qType :{
        BEGINNER:"beginner",
        INTERMEDIATE:"intermediate",
        EXPERIENCED:"experienced",

    }
};