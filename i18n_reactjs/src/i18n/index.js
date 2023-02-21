import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageCodeSupport } from "./options";

// Add more files into this array if you add more files into the `en` and `fr` folder
const fileNames = ["content", "example"];
let languageObject = {};

LanguageCodeSupport.forEach((language) => {
  languageObject[language] = { translation: {} };
});

LanguageCodeSupport.forEach((language) => {
  fileNames.forEach((fileName) => {
    languageObject[language]["translation"] = {
      ...languageObject[language]["translation"],
      [fileName]: require(`./${language}/${fileName}.json`),
    };
  });
});

// console.log(languageObject);

i18n.use(initReactI18next).init({
  resources: languageObject,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
