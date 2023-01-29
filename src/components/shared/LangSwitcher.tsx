import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  key: string;
  name: string;
  img: string;
}

const languages: Language[] = [
  { key: 'en', name: 'English', img: '/images/flags/united-kingdom.png' },
  { key: 'km', name: 'ខ្មែរ', img: '/images/flags/cambodia.png' },
];

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(
    i18n.language === 'en' ? languages[0] : languages[1]
  );

  function handleChangeLang(lng: Language) {
    i18n.changeLanguage(lng.key);
    setLang(lng);
  }

  return (
    <div
      onClick={() =>
        handleChangeLang(lang.key === 'en' ? languages[1] : languages[0])
      }
    >
      <img
        className="h-10 w-auto cursor-pointer"
        src={lang.key === 'en' ? languages[1].img : languages[0].img}
        alt={lang.name}
      />
    </div>
  );
};
