import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { tamil } from '@bbc/gel-foundations/scripts';
import { tamil as brandSVG } from '@bbc/psammead-assets/svgs';
import { F_LATHA_BOLD, F_LATHA_REGULAR } from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/ta';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `ta`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'புதுப்பிக்கப்பட்டது',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-tamil',
    atiAnalyticsProducerId: '87',
    chartbeatDomain: 'tamil.bbc.co.uk',
    brandName: 'BBC News தமிழ்',
    product: 'BBC News',
    serviceLocalizedName: 'தமிழ்',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/tamil.png',
    defaultImageAltText: 'BBC News தமிழ்',
    dir: `ltr`,
    externalLinkText: ', வெளி இணைப்பு',
    imageCaptionOffscreenText: 'படக்குறிப்பு, ',
    videoCaptionOffscreenText: 'காணொளிக் குறிப்பு, ',
    audioCaptionOffscreenText: 'கேட்பொலிக் குறிப்பு, ',
    defaultCaptionOffscreenText: 'குறிப்பு, ',
    imageCopyrightOffscreenText: 'பட மூலாதாரம், ',
    locale: `ta-IN`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ta',
    datetimeLocale: `ta`,
    service: 'tamil',
    serviceName: 'Tamil',
    languageName: 'Tamil',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbctamil',
    twitterSite: '@bbctamil',
    noBylinesPolicy:
      'https://www.bbc.com/tamil/institutional-50288575#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/tamil/institutional-50288575',
    isTrustProjectParticipant: true,
    script: tamil,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'முகப்பு',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'விளம்பரம்',
      },
      seeAll: 'அனைத்தும் பார்க்க',
      home: 'முகப்பு',
      currentPage: 'தற்போதுள்ள பக்கம்',
      skipLinkText: 'உள்ளடக்கத்துக்குத் தாண்டிச் செல்க',
      relatedContent: 'தொடர்புடைய உள்ளடக்கம்',
      navMenuText: 'பிரிவுகள்',
      mediaAssetPage: {
        mediaPlayer: 'ஊடக இயக்கி',
        audioPlayer: 'கேட்பொலி பிளேயர்',
        videoPlayer: 'காணொளி பிளேயர்',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'பக்கம் காணவில்லை',
          message:
            'மன்னிக்கவும். நீங்கள் தேடும் பக்கத்தை எடுத்துத் தர இயலவில்லை. தயவு செய்து முயலுங்கள்:',
          solutions: [
            'யு.ஆர்.எல்.ஐ இரு முறை சோதிக்கப்படுகிறது',
            "உங்கள் உலாவியில் 'புதுப்பி' பொத்தானை அழுத்துதல்",
            'பிபிசி தேடு பட்டை மூலம் இந்த பக்கத்தை தேடுதல்',
          ],
          callToActionFirst: 'மாற்றாக, ',
          callToActionLinkText: 'பிபிசி தமிழின் முகப்பு பக்கம்',
          callToActionLast: ' செல்லுங்கள்.',
          callToActionLinkUrl: 'https://www.bbc.com/tamil',
        },
        500: {
          statusCode: '500',
          title: 'உள்ளமை சேவையகப் பிழை',
          message:
            'மன்னிக்கவும். நீங்கள் தேடும் பக்கத்தை தற்போது எடுத்துத் தர இயலவில்லை. தயவு செய்து முயலுங்கள்:',
          solutions: [
            "உங்கள் உலாவியில் 'புதுப்பி' பொத்தானை அழுத்துதல்",
            'பிறகு மீண்டும் திரும்பி வருதல்',
          ],
          callToActionFirst: 'மாற்றாக, ',
          callToActionLinkText: 'பிபிசி தமிழின் முகப்பு பக்கம்',
          callToActionLast: ' செல்லுங்கள்.',
          callToActionLinkUrl: 'https://www.bbc.com/tamil',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'எமது தனியுரிமை மற்றும் குக்கி கொள்கைகளை நாங்கள் மேம்படுத்தியுள்ளோம்.',
          description: {
            uk: {
              first:
                'தனியுரிமை மற்றும் குக்கி கொள்கைகளில் சில முக்கிய மாற்றங்களை செய்துள்ளோம். இதனால் உங்களுக்கும், உங்கள் தரவுகளுக்கும் என்ன தாக்கம் ஏற்படும் என்று தெரிந்துகொள்ளுங்கள்.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'தனியுரிமை மற்றும் குக்கி கொள்கைகளில் சில முக்கிய மாற்றங்களை செய்துள்ளோம். இதனால் உங்களுக்கும், உங்கள் தரவுகளுக்கும் என்ன தாக்கம் ஏற்படும் என்று தெரிந்துகொள்ளுங்கள்.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'சரி',
          reject: 'என்ன மாறியுள்ளது என்பதைப் பாருங்கள்.',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'குக்கிகளை நீங்கள் ஏற்பதை எங்களுக்கு தெரிவியுங்கள்',
          description: {
            uk: {
              first: 'சிறந்த இணைய அனுபவத்தை உங்களுக்கு வழங்க நாங்கள் ',
              linkText: 'குக்கிகளை',
              last:
                ' பயன்படுத்துகிறோம். இந்த குக்கிகள் அனைத்தையும் நீங்கள் ஏற்கிறீர்களா என்பதை எங்களுக்குத் தெரியப்படுத்துங்கள். ',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'உங்களுக்கு ஏற்றவாறு விளம்பரங்களையும், உள்ளடக்கங்களையும் காட்டி உங்களுக்கு சிறந்த இணைய அனுபவத்தை வழங்க நாங்களும், எங்கள் கூட்டாளிகளும் ',
              linkText: 'குக்கிகள்',
              last:
                ' போன்ற தொழில் நுட்பங்களை பயன்படுத்துகிறோம்; உங்கள் உலாவல் (பிரௌசிங்) தரவுகளையும் திரட்டுகிறோம். இவற்றுக்கு நீங்கள்உடன்படுகிறீர்களா என்பதை எங்களுக்குத் தெரிவியுங்கள்.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'சரி. நான் ஏற்கிறேன்',
          reject: 'இல்லை. அமைப்புகள் பக்கத்துக்கு கொண்டு செல்',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'ஒலிபரப்பு மென்பொருள் உங்கள் கணினியில் இல்லை',
        contentExpired: 'இந்த நிகழ்ச்சி இனி கிடைக்காது.',
        contentNotYetAvailable:
          'இந்த நிகழ்ச்சி இன்னும் கேட்க தயாராக்கப்படவில்லை.',
        audio: 'ஒலி',
        photogallery: 'படத் தொகுப்பு',
        video: 'காணொளி',
        bbc_tamil_radio: {
          title: 'பிபிசி தமிழோசை',
          subtitle:
            'சர்வதேச, இந்திய, இலங்கை செய்திகள் மற்றும் நடப்புத் தகவல்களை வழங்கும் ஓர் நிகழ்ச்சி. அறிவியல், விளையாட்டு, கலை, கலாச்சாரம் மற்றும் பொழுதுபோக்கு தொடர்பான செய்திகளும் இதில் இடம்பெறும். சிற்றலை வானொலியிலும் பிபிசிதமிழ்.காம் இணையதளத்திலும் இதைக் கேட்கலாம்.',
        },
        bbc_tamil_tv: {
          title: 'கிளிக்',
          subtitle:
            'சமீபத்திய சர்வதேச மற்றும் இந்திய கண்டுபிடிப்புகள் குறித்த தொழில்நுட்ப நிகழ்ச்சி',
        },
        listen: 'கேட்க',
        watch: 'பார்க்க',
        liveLabel: 'நேரலை',
        nextLabel: 'NEXT',
        previousRadioShow: 'முந்தைய வானொலி நிகழ்ச்சி',
        nextRadioShow: 'அடுத்த வானொலி நிகழ்ச்சி',
        duration: 'கால அளவு',
        recentEpisodes: 'முந்தைய நிகழ்ச்சிகள்',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'காணொளிக் குறிப்பு ',
          text: 'எச்சரிக்கை: வெளியார் தகவல்களில் விளம்பரங்கள் இருக்கலாம்',
        },
        fallback: {
          text: 'தகவல் இல்லை',
          linkText: 'மேலதிக விவரங்களைக் காண %provider_name%',
          linkTextSuffixVisuallyHidden: ', வெளி இணைப்பு',
          warningText:
            'வெளியார் இணைய தளங்களின் உள்ளடக்கத்துக்கு பிபிசி பொறுப்பாகாது.',
        },
        skipLink: {
          text: '%provider_name% பதிவை கடந்து செல்ல',
          endTextVisuallyHidden: '%provider_name% பதிவின் முடிவு',
        },
      },
      include: {
        errorMessage:
          'மன்னிக்கவும், குறைந்த இணையத்தை பயன்படுத்தும் இந்த பக்கத்தில் கட்டுரையின் இந்த பகுதியை காணவியலாது. ',
        linkText:
          'முழு உள்ளடக்கத்தையும் காண இந்த பக்கத்தின் அசல் வடிவத்தை காணவும்.',
      },
      topStoriesTitle: 'முக்கிய செய்திகள்',
      featuresAnalysisTitle: 'சிறப்புச் செய்திகள்',
    },
    brandSVG,
    mostRead: {
      header: 'அதிகம் படிக்கப்பட்டது',
      lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது:',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'அதிகம் பார்க்கப்பட்டது',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/tamil/institutional-50288575',
        text: 'நீங்கள் ஏன் பிபிசி மீது நம்பிக்கை வைக்க முடியும்?',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text:
          'வெளியார் இணைப்புகள் தொடர்பான எங்கள் அணுகுமுறையைப் பற்றி படிக்கவும்.',
      },
      links: [
        {
          href: 'https://www.bbc.com/tamil/institutional-37286680',
          text: 'பயன்பாட்டு விதி',
        },
        {
          href: 'https://www.bbc.com/tamil/institutional-37286682',
          text: 'பிபிசி பற்றி',
        },
        {
          href: 'https://www.bbc.com/tamil/institutional-37286684',
          text: 'தனியுரிமை கொள்கை',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'குக்கிகள்',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853753',
          text: 'பிபிசி-யை தொடர்பு கொள்க',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'பிபிசி. வெளியார் இணைய தளங்களின் உள்ளடக்கத்துக்கு பிபிசி பொறுப்பாகாது.',
    },
    fonts: [F_LATHA_BOLD, F_LATHA_REGULAR],
    timezone: 'GMT',
    navigation: [
      {
        title: 'முகப்பு',
        url: '/tamil',
      },
      {
        title: 'உலகம்',
        url: '/tamil/topics/c40379e2n2zt',
      },
      {
        title: 'இந்தியா',
        url: '/tamil/topics/c2dwqdn01v5t',
      },
      {
        title: 'இலங்கை',
        url: '/tamil/topics/cz74k7p3qw7t',
      },
      {
        title: 'விளையாட்டு',
        url: '/tamil/topics/cdr56rv4qwdt',
      },
      {
        title: 'அறிவியல்',
        url: '/tamil/topics/c9wpm0exkdpt',
      },
      {
        title: 'சினிமா',
        url: '/tamil/topics/cyx5kxz4wkgt',
      },
      {
        title: 'வீடியோ',
        url: '/tamil/media/video',
      },
    ],
  },
};

export default withContext(service);
