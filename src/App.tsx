import 'aos/dist/aos.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CallToAction } from './components/CallToAction';
import { VenueSection } from './components/VenueSection';
import { GallerySection } from './components/GallerySection';
import AOS from 'aos';

import { SuperSEO } from 'react-super-seo';

import './i18n';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <div>
      <SuperSEO
        title="បូរ៉ាទីន & ពេជ្រម៉ាលី - 03.03.23"
        description="ពិធីមង្គលការ លោក សំ បូរ៉ាទីន & កញ្ញា សំ ពេជ្រម៉ាលី"
        lang="km"
        openGraph={{
          ogImage: {
            ogImage: 'https://tin-and-maly.netlify.app/images/banner.jpg',
            ogImageAlt: 'បូរ៉ាទីន & ពេជ្រម៉ាលី',
            ogImageWidth: 1200,
            ogImageHeight: 1200,
            ogImageType: 'image/jpeg',
          },
        }}
      />

      <Header />
      <HeroSection />
      <VenueSection />
      <CallToAction />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
