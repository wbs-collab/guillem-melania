import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const languages = [
  { code: "en", name: "ENG", to: "/" },
  { code: "es", name: "ES", to: "/es" },
  { code: "it", name: "IT", to: "/it" },
];

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="flex gap-2">
        {languages.map((lng) => (
          <Button
            key={lng.code}
            variant={currentLang === lng.code ? "secondary" : "ghost"}
            size="sm"
            className="text-primary-foreground"
            asChild
          >
            <Link to={lng.to}>{lng.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
