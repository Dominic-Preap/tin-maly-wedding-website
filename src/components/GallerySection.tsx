import 'photoswipe/style.css';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from './shared/Heading';

const images = [
  { src: '/images/k-1.jpg', width: 480, height: 480, className: '' },
  { src: '/images/k-5.jpg', width: 480, height: 960, className: 'row-span-2' },
  { src: '/images/k-3.jpg', width: 480, height: 480, className: '' },
  { src: '/images/k-6.jpg', width: 480, height: 480, className: '' },
  { src: '/images/k-4.jpg', width: 480, height: 480, className: '' },
  { src: '/images/k-2.jpg', width: 960, height: 450, className: 'col-span-2' },
];

interface Props {
  galleryId: string;
}

const SimpleGallery: React.FC<Props> = ({ galleryId }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div
      className="pswp-gallery grid grid-cols-2 gap-4 p-4 md:grid-cols-4"
      id={galleryId}
    >
      {images.map((x, idx) => (
        <div key={x.src} className={x.className}>
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-white shadow-xl">
            <a
              href={x.src}
              data-pswp-width={x.width}
              data-pswp-height={x.height}
              key={galleryId + '-' + idx}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inset-0 h-full w-full object-cover transition hover:scale-105 hover:cursor-pointer"
                src={x.src}
                alt={x.src}
                decoding="async"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-2 md:p-8">
      <div data-aos="fade-up" data-aos-offset={300}>
        <Heading title={t('gallery.title')} subtitle={t('gallery.subtitle')} />
      </div>
      <br />

      <div data-aos="fade-up" data-aos-offset={300}>
        <SimpleGallery galleryId="my-gallery" />
      </div>
    </div>
  );
};
