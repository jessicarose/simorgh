import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { punjabi as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/psammead-locales/moment/pa-in';
import '@bbc/moment-timezone-include/tz/Asia/Kolkata';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `pa`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'ਅਪਡੇਟ',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-punjabi',
    atiAnalyticsProducerId: '73',
    chartbeatDomain: 'punjabi.bbc.co.uk',
    brandName: 'BBC News ਪੰਜਾਬੀ',
    product: 'BBC News',
    serviceLocalizedName: 'ਪੰਜਾਬੀ',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/punjabi.png',
    defaultImageAltText: 'BBC News ਪੰਜਾਬੀ',
    dir: `ltr`,
    externalLinkText: ', ਬਾਹਰੀ',
    imageCaptionOffscreenText: 'ਤਸਵੀਰ ਕੈਪਸ਼ਨ, ',
    videoCaptionOffscreenText: 'ਵੀਡੀਓ ਕੈਪਸ਼ਨ, ',
    audioCaptionOffscreenText: 'ਆਡੀਓ ਕੈਪਸ਼ਨ, ',
    defaultCaptionOffscreenText: 'ਕੈਪਸ਼ਨ, ',
    imageCopyrightOffscreenText: 'ਤਸਵੀਰ ਸਰੋਤ, ',
    locale: `pa-IN`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'pa',
    datetimeLocale: `pa-in`,
    service: 'punjabi',
    serviceName: 'Punjabi',
    languageName: 'Punjabi',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnewspunjabi',
    twitterSite: '@bbcnewspunjabi',
    noBylinesPolicy:
      'https://www.bbc.com/punjabi/institutional-49282853#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/punjabi/institutional-49282853',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'ਨਿਊਜ਼',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'ਇਸ਼ਤਿਹਾਰ',
      },
      seeAll: 'ਸਭ ਦੋਖੇ',
      home: 'ਹੋਮ ਪੇਜ',
      currentPage: 'ਮੌਜੂਦਾ ਪੇਜ',
      skipLinkText: `ਸਮੱਗਰੀ 'ਤੇ ਜਾਓ`,
      relatedContent: 'ਇਸ ਖ਼ਬਰ ਬਾਰੇ ਹੋਰ',
      navMenuText: 'ਸੈਕਸ਼ਨਜ਼',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'ਪੇਜ ਨਹੀਂ ਮਿਲ ਰਿਹਾ',
          message:
            'ਮੁਆਫ਼ ਕਰੋ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਉਸ ਪੇਜ ਤੱਕ ਨਹੀਂ ਲੈ ਕੇ ਜਾ ਸਕਦੇ, ਜੋ ਤੁਸੀਂ ਲੱਭ ਰਹੇ ਹੋ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
          solutions: [
            'url ਨੂੰ ਦੁਬਾਰਾ ਚੈੱਕ ਕਰੋ',
            'ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਦੇ ਰਿਫਰੈਸ਼ ਬਟਨ ਨੂੰ ਦਬਾਓ',
            'ਇਸ ਪੇਜ ਨੂੰ ਬੀਬੀਸੀ ਸਰਚ ਬਾਰ ਰਾਹੀਂ ਲੱਭਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
          ],
          callToActionFirst: 'ਬਦਲ ਵਜੋਂ, ',
          callToActionLinkText: 'BBC News ਪੰਜਾਬੀ',
          callToActionLast: ` ਦੇ ਹੋਮ ਪੇਜ 'ਤੇ ਜਾਓ`,
          callToActionLinkUrl: 'https://www.bbc.com/punjabi',
        },
        500: {
          statusCode: '500',
          title: 'ਅੰਦਰੂਨੀ ਸਰਵਰ ਐਰਰ',
          message:
            'ਮੁਆਫ਼ ਕਰੋ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਉਸ ਪੇਜ ਤੱਕ ਨਹੀਂ ਲੈ ਕੇ ਜਾ ਸਕਦੇ, ਜੋ ਤੁਸੀਂ ਲੱਭ ਰਹੇ ਹੋ। ਇਹ ਕਰੋ:',
          solutions: ['ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਦੇ ਰਿਫਰੈਸ਼ ਬਟਨ ਨੂੰ ਦਬਾਓ', 'ਬਾਅਦ ਵਿੱਚ ਆਓ'],
          callToActionFirst: 'ਬਦਲ ਵਜੋਂ,  ',
          callToActionLinkText: 'BBC News ਪੰਜਾਬੀ',
          callToActionLast: ` ਦੇ ਹੋਮ ਪੇਜ 'ਤੇ ਜਾਓ`,
          callToActionLinkUrl: 'https://www.bbc.com/punjabi',
        },
      },
      consentBanner: {
        privacy: {
          title: 'ਅਸੀਂ ਆਪਣੀ ਨਿੱਜਤਾ ਤੇ ਕੁਕੀਜ਼ ਪਾਲਿਸੀ ਨੂੰ ਅਪਡੇਟ ਕਰ ਦਿੱਤਾ ਹੈ',
          description: {
            uk: {
              first:
                'ਅਸੀਂ ਆਪਣੀ ਨਿੱਜਤਾ ਤੇ ਕੁਕੀਜ਼ ਪਾਲਿਸੀ ਵਿੱਚ ਕੁਝ ਮਹੱਤਵਪੂਰਨ ਬਦਲਾਅ ਕੀਤੇ ਹਨ ਅਤੇ ਅਸੀਂ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹਾਂ, ਤੁਹਾਡੇ ਤੇ ਤੁਹਾਡੇ ਡਾਟਾ ਲਈ ਇਸ ਦੇ ਕੀ ਮਾਅਨੇ ਹਨ।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'ਅਸੀਂ ਆਪਣੀ ਨਿੱਜਤਾ ਤੇ ਕੁਕੀਜ਼ ਪਾਲਿਸੀ ਵਿੱਚ ਕੁਝ ਮਹੱਤਵਪੂਰਨ ਬਦਲਾਅ ਕੀਤੇ ਹਨ ਅਤੇ ਅਸੀਂ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹਾਂ, ਤੁਹਾਡੇ ਤੇ ਤੁਹਾਡੇ ਡਾਟਾ ਲਈ ਇਸ ਦੇ ਕੀ ਮਾਅਨੇ ਹਨ।',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ਓਕੇ',
          reject: 'ਜਾਣੋ ਕੀ ਬਦਲਿਆ ਹੈ',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'ਸਾਨੂੰ ਦੱਸੋ ਜੇ ਤੁਸੀਂ ਕੁਕੀਜ਼ ਲਈ ਸਹਿਮਤ ਹੋ',
          description: {
            uk: {
              first: 'ਅਸੀਂ ਤੁੁਹਾਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਤਜਰਬਾ ਦੇਣ ਲਈ ',
              linkText: 'ਕੁਕੀਜ਼',
              last:
                ' ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹਾਂ। ਕ੍ਰਿਪਾ ਕਰਕੇ ਸਾਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਇਨ੍ਹਾਂ ਸਾਰੀਆਂ ਕੁਕੀਜ਼ ਨਾਲ ਸਹਿਮਤ ਹੋ',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'ਅਸੀਂ ਅਤੇ ਸਾਡੇ ਭਾਈਵਾਲ ਤਕਨੀਕ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ, ਜਿਵੇਂ ਕਿ ',
              linkText: 'ਕੁਕੀਜ਼',
              last:
                ' ਅਤੇ ਤੁਹਾਨੂੰ ਸਭ ਤੋਂ ਵਧੀਆ ਆਨਲਾਈਨ ਤਜਰਬਾ ਦੇਣ ਲਈ ਤੇ ਤੁਹਾਨੂੰ ਦਿਖਾਈ ਗਈ ਸਾਮਗਰੀ ਅਤੇ ਇਸ਼ਤਿਹਾਰਾਂ ਨੂੰ ਨਿੱਜੀ ਕਰਨ ਲਈ ਬ੍ਰਾਊਜ਼ਰ ਡਾਟਾ ਨੂੰ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ। ਜੇਕਰ ਤੁਸੀਂ ਸਹਿਮਤ ਹੋ ਤਾਂ ਸਾਨੂੰ ਦੱਸੋ।',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'ਹਾਂ, ਮੈਂ ਸਹਿਮਤ ਹਾਂ',
          reject: "ਨਹੀਂ, ਸੈਟਿੰਗ 'ਚ ਜਾਓ ",
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: "ਮੀਡੀਆ ਪਲੇਬੈਕ ਤੁਹਾਡੀ ਡਿਵਾਈਸ 'ਤੇ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ",
        contentExpired: 'ਇਹ ਸਮੱਗਰੀ ਹੁਣ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।',
        contentNotYetAvailable: 'ਇਹ ਸਮੱਗਰੀ ਹਾਲੇ ਚਲਾਏ ਜਾਣ ਲਈ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।',
        audio: 'ਔਡੀਓ',
        photogallery: 'ਫੋਟੋ ਗੈਲਰੀ',
        video: 'ਵੀਡੀਓ',
        listen: 'ਸੁਣੋ',
        watch: 'ਦੇਖੋ',
        liveLabel: 'LIVE',
        nextLabel: 'NEXT',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
        recentEpisodes: 'ਤਾਜ਼ਾ ਐਪੀਸੋਡ',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'ਵੀਡੀਓ ਕੈਪਸ਼ਨ, ',
          text: "ਚਿਤਾਵਨੀ: ਬਾਹਰੀ ਸਾਈਟਾਂ ਦੀ ਸਮਗਰੀ 'ਚ ਇਸ਼ਤਿਹਾਰ ਹੋ ਸਕਦੇ ਹਨ",
        },
        fallback: {
          text: 'ਸਮੱਗਰੀ ਉਪਲਬਧ ਨਹੀਂ ਹੈ',
          linkText: 'ਹੋਰ ਦੇਖਣ ਲਈ %provider_name%',
          linkTextSuffixVisuallyHidden: ', ਬਾਹਰੀ',
          warningText: 'ਬਾਹਰੀ ਸਾਈਟਾਂ ਦੀ ਸਮਗਰੀ ਲਈ ਬੀਬੀਸੀ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੈ',
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
      topStoriesTitle: 'ਤਾਜ਼ਾ ਘਟਨਾਕ੍ਰਮ',
      featuresAnalysisTitle: 'ਦ੍ਰਿਸ਼ਟੀਕੋਣ',
    },
    brandSVG,
    mostRead: {
      header: 'ਸਭ ਤੋਂ ਵੱਧ ਪੜ੍ਹਿਆ ਗਿਆ',
      lastUpdated: 'ਆਖ਼ਰੀ ਅਪਡੇਟ:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'ਸਭ ਤੋਂ ਵੱਧ ਦੇਖਿਆ',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    navigation: [
      {
        title: 'ਖ਼ਬਰਾਂ',
        url: '/punjabi',
      },
      {
        title: 'ਕੋਰੋਨਾਵਾਇਰਸ',
        url: '/punjabi/india-51764906',
      },
      {
        title: 'ਵੀਡੀਓ',
        url: '/punjabi/media/video',
      },
      {
        title: 'ਪਾਠਕਾਂ ਦੀ ਪਸੰਦ',
        url: '/punjabi/popular/read',
      },
      {
        title: 'ਭਾਰਤ',
        url: '/punjabi/topics/cz74k76gjqxt',
      },
      {
        title: 'ਕੌਮਾਂਤਰੀ',
        url: '/punjabi/topics/c2lej05e43lt',
      },
    ],
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/punjabi/institutional-49282853',
        text: "ਤੁਸੀਂ ਬੀਬੀਸੀ 'ਤੇ ਕਿਉਂ ਵਿਸ਼ਵਾਸ਼ ਕਰ ਸਕਦੇ ਹੋ",
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'ਬਾਹਰੀ ਲਿੰਕਿੰਗ ਲਈ ਸਾਡੇ ਤਰੀਕੇ ਬਾਰੇ ਪੜ੍ਹੋ',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'ਵਰਤੋ ਦੀਆਂ ਸ਼ਰਤਾਂ',
        },
        {
          href: 'https://www.bbc.co.uk/aboutthebbc',
          text: 'BBC ਬਾਰੇ',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'ਨਿੱਜਤਾ ਪਾਲਿਸੀ',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'ਕੁਕੀਜ਼',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853621',
          text: 'ਬੀਬੀਸੀ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC. ਬਾਹਰੀ ਸਾਈਟਾਂ ਦੀ ਸਮਗਰੀ ਲਈ ਬੀਬੀਸੀ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੈ',
    },
    fonts: [],
    timezone: 'Asia/Kolkata',
  },
};

export default withContext(service);
