import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { nepali as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Kathmandu';
import '@bbc/psammead-locales/moment/ne';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `ne`,
    articleAuthor: `http://www.facebook.com/bbcnews`,
    articleTimestampPrefix: '',
    articleTimestampSuffix: 'अद्यावधिक',
    atiAnalyticsAppName: 'news-nepali',
    atiAnalyticsProducerId: '63',
    chartbeatDomain: 'nepali.bbc.co.uk',
    brandName: 'BBC News नेपाली',
    product: 'BBC News',
    serviceLocalizedName: 'नेपाली',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/nepali.png',
    defaultImageAltText: 'BBC News नेपाली',
    dir: `ltr`,
    externalLinkText: ', बाह्य सामग्री',
    imageCaptionOffscreenText: 'तस्बिरको क्याप्शन, ',
    videoCaptionOffscreenText: 'भिडिओ क्याप्शन सुरु हुँदैछ, ',
    audioCaptionOffscreenText: 'अडिओ क्याप्शन सुरु हुँदैछ, ',
    defaultCaptionOffscreenText: 'क्याप्शन, ',
    imageCopyrightOffscreenText: 'तस्बिर स्रोत, ',
    locale: `ne-NP`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ne',
    datetimeLocale: `ne`,
    service: 'nepali',
    serviceName: 'Nepali',
    languageName: 'Nepali',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnepali',
    twitterSite: '@bbcnepali',
    noBylinesPolicy:
      'https://www.bbc.com/nepali/institutional-50318130#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/nepali/institutional-50318130',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'मुख पृष्ठ',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'विज्ञापन',
      },
      seeAll: 'सबै हेर्नुहोस्',
      home: 'होमपेज',
      currentPage: 'अहिलेको पृष्ठ',
      skipLinkText: 'सामग्रीमा जानुहोस्',
      relatedContent: 'सम्बन्धित सामग्री',
      navMenuText: 'सूची',
      mediaAssetPage: {
        mediaPlayer: 'मिडिया प्लेअर',
        audioPlayer: 'अडिओ प्लेअर',
        videoPlayer: 'भिडिओ प्लेअर',
      },
      error: {
        404: {
          statusCode: '४०४',
          title: 'सामग्री फेला परेन।',
          message:
            'माफ गर्नुहोस्। तपाईँले खोज्नुभएको सामग्री हामीले भेट्टाउन सकेनौँ। यी उपायहरू गर्नुहोस्:',
          solutions: [
            'URL सही छ कि छैन जाँच्नुहोस्',
            'ब्राउजरमा रिफ्रेश थिच्नुहोस्',
            'बीबीसी सर्चमा खोज्नुहोस्',
          ],
          callToActionFirst: 'अथवा ',
          callToActionLinkText: 'BBC News नेपाली',
          callToActionLast: 'को होमपेजमा जानुहोस्',
          callToActionLinkUrl: 'https://www.bbc.com/nepali',
        },
        500: {
          statusCode: '५००',
          title: 'सर्भरमा समस्या देखियो।',
          message:
            'माफ गर्नुहोस्। तपाईँले खोज्नुभएको सामग्री हामीले देखाउन सकेनौँ। निम्न उपायहरू गर्नुहोस्:',
          solutions: [
            'Refresh थिच्नुहोस्',
            'केही समयपछि पुन: प्रयास गर्नुहोस्।',
          ],
          callToActionFirst: 'अथवा ',
          callToActionLinkText: 'BBC News नेपाली',
          callToActionLast: 'को होमपेजमा जानुहोस्।',
          callToActionLinkUrl: 'https://www.bbc.com/nepali',
        },
      },
      consentBanner: {
        privacy: {
          title: 'हामीले गोपनीयता र कुकीजसम्बन्धी नीतिहरू परिमार्जन गरेका छौँ।',
          description: {
            uk: {
              first:
                'हामीले गोपनीयता र कुकीजसम्बन्धी नीतिहरूमा महत्त्वपूर्ण परिमार्जन गरेका कारण यसबाट तपाईँ र तपाईँको डेटालाई पार्न सक्ने प्रभावबारे पढ्नुहोस्।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'हामीले गोपनीयता र कुकीजसम्बन्धी नीतिहरूमा महत्त्वपूर्ण परिमार्जन गरेका कारण यसबाट तपाईँ र तपाईँको डेटालाई पार्न सक्ने प्रभावबारे पढ्नुहोस्।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'मान्य छ।',
          reject: 'परिमार्जित कुरा हेर्नुहोस्।',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'कुकीजसम्बन्धी नीति मान्य छ भन्ने हामीलाई जानकारी दिनुहोस्।',
          description: {
            uk: {
              first: 'हामी तपाईँको अनलाइन अनुभव अझ उपयोगी होओस् भनेर ',
              linkText: 'कुकीज',
              last:
                ' प्रयोग गर्छौँ। कृपया तपाईँलाई कुकीज मान्य छ भने हामीलाई जानकारी दिनुहोस्।',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'हामी र हाम्रा साझेदारहरू तपाईँको अनलाइन अनुभव अझ उपयोगी होओस्, तपाईँलाई प्रासंगिक सामग्री र विज्ञापन देखाउन ',
              linkText: 'कुकीज',
              last:
                'जस्ता प्रविधि प्रयोग गरेर तपाईँले हाम्रो साइटमा गरेका क्रियाकलापका जानकारी सङ्ग्रह गर्छौँ। कृपया तपाईँलाई यो कुरा मान्य छ भने हामीलाई जानकारी दिनुहोस्।',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'मलाई मान्य छ।',
          reject: 'मलाई मान्य छैन, सेटिङ्समा जान चाहन्छु।',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'तपाईंको उपकरणमा मिडिया प्लेब्याक सपोर्ट छैन',
        contentExpired: 'यो सामग्री अब उपलब्ध छैन',
        contentNotYetAvailable: 'यो सामाग्री प्ले गर्नलाई उपलब्ध भइसकेको छैन।',
        audio: 'अडिओ',
        photogallery: 'तस्बिर सङ्ग्रह',
        video: 'भिडिओ',
        bbc_nepali_radio: {
          title: 'बीबीसी नेपाली रेडियो',
          subtitle:
            'नेपाली भाषामा बीबीसी विश्व सेवाको राष्ट्रिय तथा अन्तर्राष्ट्रिय समाचार तथा समसामयिक चर्चा, राष्ट्रिय तथा अन्तर्राष्ट्रिय समाचार विश्लेषण, समाचारमा रहेका व्यक्तित्वहरुसंगको अन्तर्वार्ता, साप्ताहिक बहस तथा छलफल, विज्ञान, स्वास्थ्य.',
        },
        listen: 'सुन्नुहोस्',
        watch: 'हेर्नुहोस्',
        liveLabel: 'प्रत्यक्ष प्रसारण',
        nextLabel: 'अर्को',
        previousRadioShow: 'पछिल्लो रेडिओ कार्यक्रम',
        nextRadioShow: 'अघिल्लो रेडिओ कार्यक्रम',
        duration: 'समयावधि',
        recentEpisodes: 'पहिलेका कार्यक्रमहरु',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'भिडिओ क्याप्शन सुरु हुँदैछ, ',
          text: 'चेतावनी: तेस्रो पक्षको सामग्रीमा विज्ञापन हुनसक्छ',
        },
        fallback: {
          text: 'सामग्री उपलब्ध छैन',
          linkText: 'थप %provider_name% मा हेर्नुहोस्',
          linkTextSuffixVisuallyHidden: ', बाह्य सामग्री',
          warningText: 'अन्य वेबसाइटका सामग्रीहरूका लागि बीबीसी जिम्मेवार छैन।',
        },
        skipLink: {
          text: 'यो %provider_name% पोस्ट छोड्नुहोस्',
          endTextVisuallyHidden: '%provider_name% पोस्ट समाप्त',
        },
      },
      include: {
        errorMessage: 'मोबाइलपेजमा सामग्रीको यो भाग देखाउन हामी असमर्थ छौँ।',
        linkText: 'पूरा सामग्री हेर्न यो पेजको पूर्ण संस्करण हेर्नुहोस्।',
      },
      topStoriesTitle: 'मुख्य समाचार',
      featuresAnalysisTitle: 'अन‌ि यो पनि',
    },
    brandSVG,
    mostRead: {
      header: 'धेरै पढिएको',
      lastUpdated: 'मा अन्तिम चोटि अद्यावधिक',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'धेरै हेरिएको',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'पछिल्लो कार्यक्रम सुन्नुहोस्',
      durationLabel: 'अवधि %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/nepali/institutional-50318130',
        text: 'बीबीसीको विश्वसनीयता',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'बाह्य वेबसाइटको लिङ्क प्रयोग सम्बन्धमा हाम्रो नीति पढ्नुहोस्।',
      },
      links: [
        {
          href: 'https://www.bbc.com/nepali/institutional-38157764',
          text: 'प्रयोगका सर्तहरू',
        },
        {
          href: 'https://www.bbc.com/nepali/institutional-38157766',
          text: 'बीबीसीको बारेमा',
        },
        {
          href: 'https://www.bbc.com/nepali/institutional-38157767',
          text: 'गोपनीयता नीति',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'कुकीज',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853511',
          text: 'बीबीसीलाई सम्पर्क गर्नुहोस्',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'बीबीसी। अन्य वेबसाइटका सामग्रीहरूका लागि बीबीसी जिम्मेवार छैन।',
    },
    fonts: [],
    timezone: 'Asia/Kathmandu',
    navigation: [
      {
        title: 'मुख पृष्ठ',
        url: '/nepali',
      },
      {
        title: 'कोरोनाभाइरस',
        url: '/nepali/news-51941128',
      },
      {
        title: 'पछिल्लो कार्यक्रम',
        url: '/nepali/media-54029171',
      },
      {
        title: 'भिडियो',
        url: '/nepali/media/video',
      },
    ],
  },
};

export default withContext(service);
