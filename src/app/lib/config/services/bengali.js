import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { bengali } from '@bbc/gel-foundations/scripts';
import { bengali as brandSVG } from '@bbc/psammead-assets/svgs';
import {
  F_SHONAR_BANGLA_BOLD,
  F_SHONAR_BANGLA_REGULAR,
} from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/Asia/Dhaka';
import '@bbc/psammead-locales/moment/bn';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `bn`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'আপডেট হয়েছে',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-bengali',
    atiAnalyticsProducerId: '31',
    chartbeatDomain: 'bengali.bbc.co.uk',
    brandName: 'BBC News বাংলা',
    product: 'BBC News',
    serviceLocalizedName: 'বাংলা',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/bengali.png',
    defaultImageAltText: 'BBC News বাংলা',
    dir: `ltr`,
    externalLinkText: ', বিবিসির বাইরের খবর',
    imageCaptionOffscreenText: 'ছবির ক্যাপশান, ',
    videoCaptionOffscreenText: 'ভিডিওর ক্যাপশান, ',
    audioCaptionOffscreenText: 'অডিওর ক্যাপশান, ',
    defaultCaptionOffscreenText: 'ক্যাপশান, ',
    imageCopyrightOffscreenText: 'ছবির উৎস, ',
    locale: `bn-BD`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'bn',
    datetimeLocale: `bn`,
    service: 'bengali',
    serviceName: 'Bengali',
    languageName: 'Bengali',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcbangla',
    twitterSite: '@bbcbangla',
    noBylinesPolicy:
      'https://www.bbc.com/bengali/institutional-50409861#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/bengali/institutional-50409861',
    isTrustProjectParticipant: true,
    script: bengali,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle:
      'খবর, সর্বশেষ খবর, ব্রেকিং নিউজ | News, latest news, breaking news',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'বিজ্ঞাপন',
      },
      seeAll: 'সবগুলো খবর দেখুন',
      home: 'মূলপাতা',
      currentPage: 'বর্তমান পেজ',
      skipLinkText: 'সরাসরি কনটেন্টে যান',
      relatedContent: 'এই খবর নিয়ে আরো তথ্য',
      navMenuText: 'সেকশন',
      mediaAssetPage: {
        mediaPlayer: 'মিডিয়া প্লেয়ার',
        audioPlayer: 'অডিও প্লেয়ার',
        videoPlayer: 'ভিডিও প্লেয়ার',
      },
      error: {
        404: {
          statusCode: '৪০৪',
          title: 'পেজ খুঁজে পাওয়া যায়নি।',
          message:
            'দু:খিত, যে পেজটি আপনি খুঁজছেন সেটি আমরা দেখাতে পারছি না। দয়া করে আবার চেষ্টা করুন।',
          solutions: [
            'ইউআরএল-টি আবার যাচাই করা হচ্ছে।',
            "আপনার ব্রাউজারে 'রিফ্রেশ' বাটনটিতে চাপ দেয়া হয়েছে।",
            'বিবিসি সার্চ বার ব্যবহার করে পেজটি খোঁজা হচ্ছে।',
          ],
          callToActionFirst: 'বিকল্প হিসাবে ',
          callToActionLinkText: 'BBC News বাংলা',
          callToActionLast: ' র হোমপেজ-এ যান।',
          callToActionLinkUrl: 'https://www.bbc.com/bengali',
        },
        500: {
          statusCode: '৫০০',
          title: 'ইন্টারনাল সার্ভারে ক্রুটি আছে।',
          message:
            'দুু:খিত, আপনি যে পেজটি খুঁজছেন, সেটি এই মুহূর্তে আমরা দেখাতে পারছি না। আবার চেষ্টা করুন।',
          solutions: [
            "আপনার ব্রাউজারে 'রিফ্রেশ' বাটনে চাপ দেয়া হয়েছে।",
            'পরে আবার ফেরত আসছি।',
          ],
          callToActionFirst: 'বিকল্প হিসাবে ',
          callToActionLinkText: 'BBC News বাংলা',
          callToActionLast: ' র হোমপেজ-এ যান।',
          callToActionLinkUrl: 'https://www.bbc.com/bengali',
        },
      },
      consentBanner: {
        privacy: {
          title: 'আমরা আমাদের প্রিভেসি এবং কুকি বিষয়ক নীতিমালা আপডেট করেছি।',
          description: {
            uk: {
              first:
                'আমাদের প্রিভেসি এবং কুকি নীতিমালায় আমরা কিছু গুরুত্বপূর্ণ পরিবর্তন এনেছি।  আপনার এবং আপনার ব্যবহৃত ডেটার জন্য এই পরিবর্তনের অর্থ কী সেটা আমরা আপনাকে জানাতে চাই।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'আমাদের প্রিভেসি এবং কুকি নীতিমালায় আমরা কিছু গুরুত্বপূর্ণ পরিবর্তন এনেছি।  আপনার এবং আপনার ব্যবহৃত ডেটার জন্য এই পরিবর্তনের অর্থ কী সেটা আমরা আপনাকে জানাতে চাই।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ঠিক আছে।',
          reject: 'কী পরিবর্তন হয়েছে দেখুন।',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'আপনি কুকিগুলো ব্যবহারের সম্মতি দিচ্ছেন সেটা আমাদের জানান।',
          description: {
            uk: {
              first: 'আমরা ',
              linkText: 'কুকি',
              last:
                ' ব্যবহার করি যাতে অনলাইনে আপনার বিচরণ স্বচ্ছন্দ হয়।সবগুলো কুকি ব্যবহারের জন্য আপনি সম্মতি দিচ্ছেন কিনা জানান।',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'আমরা ',
              linkText: 'কুকি',
              last:
                ' ব্যবহার করি যাতে অনলাইনে আপনার বিচরণ স্বচ্ছন্দ হয়।সবগুলো কুকি ব্যবহারের জন্য আপনি সম্মতি দিচ্ছেন কিনা জানান।',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'হ্যাঁ, আমি সম্মতি দিচ্ছি।',
          reject: 'না, আমাকে সেটিং-এ ফেরত নিয়ে যান।',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'আপনার ডিভাইস মিডিয়া প্লেব্যাক সমর্থন করে না',
        contentExpired: 'এই ফাইলটি আর পাওয়া যাবে না',
        contentNotYetAvailable: 'এই ফাইলটি এখনও বাজানোর জন্য তৈরি নয়',
        audio: 'অডিও',
        photogallery: 'ফটো গ্যালারি',
        video: 'ভিডিও',
        bbc_bangla_radio: {
          title: 'বিবিসি বাংলা',
          subtitle:
            'বাংলাদেশ, তার প্রতিবেশী এবং গোটা বিশ্বের সংবাদ পরিবেশন করে। সংবাদদাতার প্রতিবেদন ছাড়াও আছে সাক্ষাৎকার, সংবাদপত্র পর্যালোচনা এবং সরাসরি ফোন-ইন।',
        },
        listen: 'শুনুন',
        watch: 'দেখুন',
        liveLabel: 'লাইভ',
        nextLabel: 'পরবর্তী',
        previousRadioShow: 'পূর্ববর্তী রেডিও অনুষ্ঠান',
        nextRadioShow: 'পরবর্তী রেডিও অনুষ্ঠান',
        duration: 'স্থিতিকাল',
        recentEpisodes: 'পুরনো অনুষ্ঠান',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'ভিডিওর ক্যাপশান: ',
          text: 'সতর্কবাণী: তৃতীয়পক্ষের কন্টেন্টে বিজ্ঞাপন থাকতে পারে',
        },
        fallback: {
          text: 'ছবির কপিরাইট',
          linkText: '%provider_name% -এ আরো দেখুন',
          linkTextSuffixVisuallyHidden: ', বিবিসির বাইরের খবর',
          warningText:
            'বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ নয়।',
        },
        skipLink: {
          text: 'Skip %provider_name% post',
          endTextVisuallyHidden: 'End of %provider_name% post',
        },
      },
      include: {
        errorMessage:
          'Sorry, we can’t display this part of the story on this lightweight mobile page.',
        linkText: 'View the full version of the page to see all the content.',
      },
      topStoriesTitle: 'প্রধান খবর',
      featuresAnalysisTitle: 'চিঠিপত্র ও মতামত',
    },
    brandSVG,
    mostRead: {
      header: 'সর্বাধিক পঠিত',
      lastUpdated: 'সর্বশেষ আপডেট হয়েছে:',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'সবচেয়ে বেশি দেখা হয়েছে',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'রেডিও অনুষ্ঠান',
      durationLabel: 'স্থিতিকাল %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/bengali/institutional-50409861',
        text: 'বিবিসির ওপর কেন আপনি আস্থা রাখতে পারেন',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'বাইরের লিংক সম্পর্কে বিবিসির দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।',
      },
      links: [
        {
          href: 'https://www.bbc.com/bengali/institutional-37289190',
          text: 'ব্যবহারের শর্তাবলী',
        },
        {
          href: 'https://www.bbc.com/bengali/institutional-37289764',
          text: 'বিবিসি সম্পর্কে',
        },
        {
          href: 'https://www.bbc.com/bengali/institutional-37289766',
          text: 'প্রিভেসি নীতি',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'কুকিজ',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853247',
          text: 'বিবিসির সঙ্গে যোগাযোগ করুন',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ নয়।',
    },
    fonts: [F_SHONAR_BANGLA_BOLD, F_SHONAR_BANGLA_REGULAR],
    timezone: 'Asia/Dhaka',
    navigation: [
      {
        title: 'মূলপাতা',
        url: '/bengali',
      },
      {
        title: 'করোনাভাইরাস',
        url: '/bengali/news-51941294',
      },
      {
        title: 'ভিডিও',
        url: '/bengali/media/video',
      },
    ],
  },
};

export default withContext(service);
