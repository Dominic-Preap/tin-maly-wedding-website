import { useTranslation } from 'react-i18next';

const data = [
  {
    url: 'https://link.payway.com.kh/aba?id=DC61B843CBD3&code=799003&acc=001712517',
    name: 'KHQR Tin',
    image: '/images/khqr-tin.jpg',
  },
  {
    url: 'https://link.payway.com.kh/aba?id=E80024D7AED2&code=020363&acc=000214060',
    name: 'KHQR Maly',
    image: '/images/khqr-maly.jpg',
  },
];

export const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative mx-4 my-8 min-h-[350px] overflow-hidden rounded-xl bg-cover bg-no-repeat md:m-16"
      style={{ backgroundImage: 'url("/images/cta-bg-2.jpg")' }}
    >
      <div className="absolute inset-0 bg-primary-900 opacity-40" />
      <div className="relative mx-auto h-full max-w-7xl p-8 opacity-100">
        <div className="flex flex-col items-center justify-evenly gap-8 lg:flex-row">
          <div data-aos="fade-up" className="text-center">
            <p className="pb-4 text-white md:text-xl lg:text-2xl">
              {t('cta.subtitle')}
            </p>
            <p
              className="text-3xl font-semibold text-white lg:text-4xl xl:text-5xl xl:leading-normal"
              dangerouslySetInnerHTML={{ __html: t('cta.title') }}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-8 md:flex-row"
          >
            {data.map(x => (
              <div key={x.name} className="overflow-hidden rounded-xl">
                <a href={x.url} target="_blank">
                  <img
                    className="mx-auto max-w-[15rem]"
                    decoding="async"
                    src={x.image}
                    alt={x.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
