import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "ENG", href: "/guillem-melania/" },
  { code: "es", name: "ES", href: "/guillem-melania/es.html" },
  { code: "it", name: "IT", href: "/guillem-melania/it.html" },
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
            <a href={lng.href}>{lng.name}</a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
