import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("content.greeting")}</h1>
      <p>{t("content.message")}</p>
    </div>
  );
}

export default MyComponent;
