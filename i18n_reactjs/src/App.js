import { I18nextProvider } from "react-i18next";
import lang from "./i18n";
import MyComponent from "./MyComponent";
import Button from "./Button";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    lang.changeLanguage(language);
  }

  return (
    <I18nextProvider i18n={i18n}>
      <MyComponent />
      <Button
        onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
      >
        Toggle Language
      </Button>
    </I18nextProvider>
  );
}

export default App;
