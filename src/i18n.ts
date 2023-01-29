import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      hero: {
        subtitle: 'We’re Getting Married!',
        title: 'Boratin & PichMaly',
      },
      gallery: {
        title: 'Photography',
        subtitle: 'Wedding Ceremony',
      },
      cta: {
        title: "Let's Celebrate Our Love",
        subtitle: 'Just choose to scan KHQR',
      },
      venue: {
        location: 'See Location',
        phone: 'Phone',

        'ceremony.title': 'Wedding Ceremony',
        'ceremony.subtitle': '03 March 2023',
        'ceremony.time': '6:00 AM - 11:00 AM',
        'ceremony.phone': '069565331',
        'ceremony.address':
          '#A11, St 32, Sankat Chak Angre Krom,<br/> Khan Meanchey, Phnom Penh.',

        'reception.title': 'Reception',
        'reception.subtitle': '03 March 2023',
        'reception.time': '5:00 PM - 10:00 PM',
        'reception.phone': '069565331',
        'reception.address': 'Modern Center 2,<br/>National Road 2, Phnom Penh.',
      },
    },
  },
  km: {
    translation: {
      hero: {
        subtitle: 'ពិធីមង្គលការ',
        title: 'បូរ៉ាទីន & ពេជ្រម៉ាលី',
      },
      gallery: {
        title: 'រូបថតមង្គលការ',
        subtitle: 'ពិធីមង្គលការ',
      },
      cta: {
        title: 'សូមចូលរួមក្នុងពិធីរៀប<br/>អាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ',
        subtitle: 'គ្រាន់តែជ្រើសរើសស្កេន KHQR',
      },
      venue: {
        location: 'មើលទីតាំង',
        phone: 'ទូរស័ព្ទ',

        'ceremony.title': 'ពិធីមង្គលការ (ព្រឹក)',
        'ceremony.subtitle': '០៣ មីនា, ២០២៣',
        'ceremony.time': '6:00 ព្រឹក - 11:00 ថ្ងៃ',
        'ceremony.phone': '069565331',
        'ceremony.address':
          'ផ្ទះលេខ #A11, ផ្លូវ 32 សង្កាត់ចាក់អង្រែក្រោម, <br/>ខណ្ឌមានជ័យ, រាជធានីភ្នំពេញ',

        'reception.title': 'ពិធីពិសារភោជនាអាហារ​ (ល្ងាច)',
        'reception.subtitle': '០៣ មីនា, ២០២៣',
        'reception.time': '5:00 រសៀល - 10:00 យប់',
        'reception.phone': '069565331',
        'reception.address':
          'មជ្ឍមណ្ឌល ម៉ូឌែន ២,<br/> ផ្លូវជាតិលេខ ២, រាជធានីភ្នំពេញ',
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'km',
    fallbackLng: 'km',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
