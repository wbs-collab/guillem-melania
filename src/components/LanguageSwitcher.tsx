import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "ENG" },
  { code: "es", name: "ES" },
  { code: "it", name: "IT" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="flex gap-2">
        {languages.map((lng) => (
          <Button
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            variant={i18n.language === lng.code ? "secondary" : "ghost"}
            size="sm"
            className="text-primary-foreground"
          >
            {lng.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
