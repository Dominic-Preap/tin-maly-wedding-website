import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative h-[100vh] bg-[url('/images/header-m.jpg')] bg-cover bg-bottom bg-no-repeat md:mb-16
      md:bg-[url('/images/header.jpg')]"
    >
      <div className="absolute inset-0 bg-primary-300 opacity-20" />
      <div className="relative z-10 flex h-screen items-center justify-center">
        <div data-aos="fade-up" className="text-center text-white">
          <p className="text-2xl font-semibold md:text-4xl">
            {t('hero.subtitle')}
          </p>
          <p className="py-4 font-serif text-4xl md:py-10 md:text-7xl">
            {t('hero.title')}
          </p>
          <p className="text-xl font-semibold md:text-2xl">03 . 03 . 23</p>
        </div>
      </div>
    </div>
  );
};
