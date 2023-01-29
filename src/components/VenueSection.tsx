import { useTranslation } from 'react-i18next';
import { Heading } from './shared/Heading';

interface Props {
  title: string;
  subtitle: string;
  time: string;
  address: string;
  phone: string;
  location: string;
}

const Venue: React.FC<Props> = props => {
  const { address, location, phone, subtitle, time, title } = props;
  const { t } = useTranslation();
  return (
    <>
      {/* <div className="hidden md:block"> */}
      <Heading title={title} subtitle={subtitle} />
      {/* </div> */}

      <div className="text-primary-700">
        <div className="py-6 text-2xl  md:text-4xl">{time}</div>

        <address
          className="pb-8 text-xl not-italic leading-relaxed  md:text-2xl"
          dangerouslySetInnerHTML={{ __html: address }}
        />

        <div className="text-2xl">
          {t('venue.phone')}: <a href={`tel://${phone}`}>{phone}</a>
        </div>

        <div className="pt-8">
          <a
            className="text-2xl font-semibold underline"
            target="_blank"
            href={location}
          >
            {t('venue.location')}
          </a>
        </div>
      </div>
    </>
  );
};
export const VenueSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-8 rounded-xl bg-primary-100 py-4 md:mx-16 md:py-24">
      <div className="container max-w-7xl md:mb-12">
        {/* <div className="block md:hidden">
          <Heading
            title={t('venue.ceremony.title')}
            subtitle={t('venue.ceremony.subtitle')}
          />
          <br />
        </div> */}

        <div className="grid grid-cols-1 items-center gap-x-8 lg:grid-cols-12">
          <div
            data-aos="fade-up"
            className="order-2 md:order-1 md:col-span-5 md:col-start-2"
          >
            <div className="mx-auto p-4 md:max-w-lg md:p-0">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
                <img
                  className="inset-0 h-full w-full object-cover"
                  src="/images/km-1.jpg"
                  alt="ceremony"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="order-1 text-center md:order-2 md:col-span-6 md:col-start-7"
          >
            <Venue
              title={t('venue.ceremony.title')}
              subtitle={t('venue.ceremony.subtitle')}
              address={t('venue.ceremony.address')}
              time={t('venue.ceremony.time')}
              phone={t('venue.ceremony.phone')}
              location="https://maps.app.goo.gl/42EMy7zWwLzoQMJv7?g_st=it"
            />
          </div>
        </div>
      </div>

      <div className="container max-w-7xl">
        {/* <div className="block md:hidden">
          <Heading
            title={t('venue.reception.title')}
            subtitle={t('venue.reception.subtitle')}
          />
          <br />
        </div> */}

        <div className="grid grid-cols-1 items-center gap-x-8 md:grid-cols-12">
          <div data-aos="fade-up" className="text-center md:col-span-6">
            <Venue
              title={t('venue.reception.title')}
              subtitle={t('venue.reception.subtitle')}
              address={t('venue.reception.address')}
              time={t('venue.reception.time')}
              phone={t('venue.reception.phone')}
              location="https://goo.gl/maps/nAXdybuPYoKLTLfp7"
            />
          </div>

          <div data-aos="fade-up" className="md:col-span-5 md:col-start-7">
            <div className="mx-auto p-4 md:max-w-lg md:p-0">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
                <img
                  className="inset-0 h-full w-full object-cover"
                  src="/images/km-2.jpg"
                  alt="Reception"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
