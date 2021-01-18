import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { swahili as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Africa/Nairobi';
import '@bbc/psammead-locales/moment/sw';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `sw`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Imeboreshwa',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-swahili',
    atiAnalyticsProducerId: '86',
    chartbeatDomain: 'swahili.bbc.co.uk',
    brandName: 'BBC News Swahili',
    product: 'BBC News',
    serviceLocalizedName: 'Swahili',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/swahili.png',
    defaultImageAltText: 'BBC News Swahili',
    dir: `ltr`,
    externalLinkText: ', ya nje',
    imageCaptionOffscreenText: 'Maelezo ya picha, ',
    videoCaptionOffscreenText: 'Maelezo ya video, ',
    audioCaptionOffscreenText: 'Maelezo ya sauti, ',
    defaultCaptionOffscreenText: 'Maelezo, ',
    imageCopyrightOffscreenText: 'Chanzo cha picha, ',
    locale: `sw-KE`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'sw',
    datetimeLocale: `sw`,
    service: 'swahili',
    serviceName: 'Swahili',
    languageName: 'Swahili',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcswahili',
    twitterSite: '@bbcswahili',
    noBylinesPolicy:
      'https://www.bbc.com/swahili/taasisi-49283417#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/swahili/taasisi-49283417',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Swahili',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Matangazo',
      },
      seeAll: 'Tazama zote',
      home: 'Habari',
      currentPage: 'Ukurasa uliopo ',
      skipLinkText: 'Ruka hadi maelezo',
      relatedContent: 'Maelezo zaidi kuhusu taarifa hii',
      navMenuText: 'Yaliyomo',
      mediaAssetPage: {
        mediaPlayer: 'Kicheza Nyenzo',
        audioPlayer: 'Kicheza Sauti',
        videoPlayer: 'Kicheza Video',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Ukurasa haupatikani',
          message:
            'Samahani, hatuwezi kukupeleka kwenye ukurasa unaoutafuta. Tafadhali jaribu:',
          solutions: [
            'Tunaitazama kwa mara ya pili url',
            'Kubonyeza kitufe cha kufungua upya ukurasa',
            'Tafuta ukurasa huu kwa kutumia sehemu ya Tafuta kwenye ukurasa wa BBC',
          ],
          callToActionFirst: 'Pia, tafadhali tembelea ukurasa wa kwanza wa ',
          callToActionLinkText: 'BBC News Swahili',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/swahili',
        },
        500: {
          statusCode: '500',
          title: 'Hitilafu katika server ya ndani',
          message:
            'Samahani, hatuwezi kukuletea ukurasa unaoutafuta. Tafadhali jaribu:',
          solutions: [
            'Kubonyeza kitufe cha kufungua upya ukurasa',
            'Inarudi tena baadaye',
          ],
          callToActionFirst: 'Pia, tafadhali tembelea ukurasa wa kwanza wa ',
          callToActionLinkText: 'BBC News Swahili',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/swahili',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Tumeboresha sera yetu ya faragha na vidakuzi au cookies',
          description: {
            uk: {
              first:
                'Tumefanya mabadiliko muhimu katika sera zetu za faragha na vidakuzi au cookies na tungependa ufahamu ina maana gani kwako na data yako.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Tumefanya mabadiliko muhimu katika sera zetu za faragha na vidakuzi au cookies na tungependa ufahamu ina maana gani kwako na data yako.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Ndio',
          reject: 'Fahamu kilichobadilika',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Tufahamishe iwapo unakubali kupokea cookies',
          description: {
            uk: {
              first: 'Tunatumia ',
              linkText: 'kuki',
              last:
                ' kukufanya ufurahie mtandao. Tafadhali tufahamishe iwapo unakubali kupokea cookies au vidakuzi vyote hivi',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Sisi na washirika wetu tunatumia teknolojia kama vile ',
              linkText: 'vidakuzi au cookies',
              last:
                ', na tunakusanya data katika mtandao kukufanya ufurahie matumizi ya mtandao na kukupa taarifa zinazokuvutia na matangazo unayoyaona. Tafadhali tufahamishe iwapo unakubali.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Ndio, ninakubali',
          reject: 'Hapana, nipeleke kwa mpangilio',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'Huwezi kusikiliza tena',
        contentExpired: 'Taarifa hii haipatikani tena.',
        contentNotYetAvailable: 'Kipindi hiki hakipatikani kwa sasa.',
        audio: 'Sauti',
        photogallery: 'Mkusanyiko wa picha',
        video: 'Video',
        bbc_swahili_radio: {
          title: 'BBC Swahili Radio',
          subtitle:
            'Habari za kimataifa, michezo na uchambuzi kutoka kwa idhaa ya dunia.',
        },
        bbc_swahili_tv: {
          title: 'Mitikasi Leo',
          subtitle:
            'Mitikasi Leo ina taarifa za biashara, uchambuzi na maoni ya wataalam wa 100bora kila siku.',
        },
        listen: 'Sikiliza',
        watch: 'Tazama',
        liveLabel: 'Moja kwa moja',
        nextLabel: 'MBELE',
        previousRadioShow: 'Kipindi kilichopita cha redio',
        nextRadioShow: 'Kipindi kijacho cha redio',
        duration: 'Muda',
        recentEpisodes: 'Vipindi vilivyopita',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Maelezo ya video, ',
          text: 'Onyo: Imetoka kwingine na inaweza kuwa na matangazo',
        },
        fallback: {
          text: 'Haipatikani tena',
          linkText: 'Tazama zaidi katika %provider_name%',
          linkTextSuffixVisuallyHidden: ', ya nje',
          warningText: 'BBC haihusiki na taarifa za kutoka mitandao ya nje.',
        },
        skipLink: {
          text: 'Ruka %provider_name% ujumbe',
          endTextVisuallyHidden: 'Mwisho wa %provider_name% ujumbe',
        },
      },
      include: {
        errorMessage:
          'Sorry, we can’t display this part of the story on this lightweight mobile page.',
        linkText: 'View the full version of the page to see all the content.',
      },
      topStoriesTitle: 'Habari kuu',
      featuresAnalysisTitle: 'Gumzo mitandaoni',
    },
    brandSVG,
    mostRead: {
      header: 'Iliyosomwa zaidi',
      lastUpdated: 'Imeboreshwa mwisho:',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Iliyoangaliwa zaidi',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'Vipindi vya Redio',
      durationLabel: 'Muda %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/swahili/taasisi-49283417',
        text: 'Kwanini unaweza kuiamini BBC News',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Soma kuhusu mtazamo wetu wa viambatanishi vya nje.',
      },
      links: [
        {
          href: 'https://www.bbc.com/swahili/taasisi-37098622',
          text: 'Sheria ya matumizi',
        },
        {
          href: 'https://www.bbc.com/swahili/taasisi-37100009',
          text: 'Kuhusu BBC',
        },
        {
          href: 'https://www.bbc.com/swahili/taasisi-37100010',
          text: 'Sera ya faragha',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853731',
          text: 'Wasiliana na BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC. BBC haihusiki na taarifa za kutoka mitandao ya nje.',
    },
    fonts: [],
    timezone: 'Africa/Nairobi',
    navigation: [
      {
        title: 'Habari',
        url: '/swahili',
      },
      {
        title: 'Michezo',
        url: '/swahili/topics/ckdxndddjkxt',
      },
      {
        title: 'Video',
        url: '/swahili/media/video',
      },
      {
        title: 'Vipindi vya Redio',
        url: '/swahili/media-54071673',
      },
    ],
  },
};

export default withContext(service);
