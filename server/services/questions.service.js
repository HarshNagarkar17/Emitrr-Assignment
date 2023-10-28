const {Question} = require("../models");
const { CustomError } = require("../utils/customError");

module.exports = {

    addQuestion:(data) => {
        try {
            const {question,option1,option2, level,language,rightOption, ...rest} = data;
            let options = [];
            let details = [];
            details.push(level, language, rightOption)
            options.push(option1,option2)
            for (let key in rest) {         // adding rest of the optional options in the array
                if (rest.hasOwnProperty(key)) {
                options.push(rest[key]);
            }
        }
        return Question.create({title:question, options,details});
    } catch (error) {
        throw new CustomError(error.message,512);
    }
    }
}