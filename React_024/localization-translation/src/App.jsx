import "./App.css";
import { useLocalization } from "./components/localizationContext";

function App() {
  // eslint-disable-next-line no-unused-vars
  const { locale, setLocale, translate } = useLocalization();

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <div>
      <h1>{translate("greeting")}</h1>
      <h1>{translate("welcome")}</h1>
      <button onClick={() => handleLocaleChange("en")}>English</button>
      <button onClick={() => handleLocaleChange("es")}>Spanish</button>
    </div>
  );
}

export default App;
