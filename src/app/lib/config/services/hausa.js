import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { hausa as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/ha';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `ha`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Wanda aka sabunta',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-hausa',
    atiAnalyticsProducerId: '51',
    chartbeatDomain: 'hausa.bbc.co.uk',
    brandName: 'BBC News Hausa',
    product: 'BBC News',
    serviceLocalizedName: 'Hausa',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/hausa.png',
    defaultImageAltText: 'BBC News Hausa',
    dir: `ltr`,
    externalLinkText: ', adireshin waje',
    imageCaptionOffscreenText: 'Bayanan hoto, ',
    videoCaptionOffscreenText: 'Bayanan bidiyo, ',
    audioCaptionOffscreenText: 'Bayanan sauti',
    defaultCaptionOffscreenText: 'Bayani, ',
    imageCopyrightOffscreenText: 'Asalin hoton, ',
    locale: `ha-GH`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ha',
    datetimeLocale: `ha`,
    service: 'hausa',
    serviceName: 'Hausa',
    languageName: 'Hausa',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbchausa',
    twitterSite: '@bbchausa',
    noBylinesPolicy:
      'https://www.bbc.com/hausa/game-da-mu-49283501#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/hausa/game-da-mu-49283501',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Labaran Duniya',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Talla',
      },
      seeAll: 'Duba su baki daya',
      home: 'Labaran Duniya',
      currentPage: 'Shafin da ake ciki',
      skipLinkText: 'Tsallaka zuwa abubuwan da ke ciki',
      relatedContent: 'Karin bayani',
      navMenuText: 'Sassa',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Ba za a samu wannan shafin ba',
          message:
            'Afuwa, ba za mu iya kawo maku wannan shafin da kuke nema ba. Sake gwadawa:',
          solutions: [
            'Sake duba adireshin',
            'Sabunta shafin',
            'Bincika shafin ta hanyar amfani da gurbin binciken BBC',
          ],
          callToActionFirst: 'Maimakon haka, ziyarci shafin sashen ',
          callToActionLinkText: 'BBC News Hausa',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/hausa',
        },
        500: {
          statusCode: '500',
          title: "Matsalar na'ura",
          message:
            'Afuwa, ba za mu iya kawo maku wannan shafin da kuke nema ba. Sake gwadawa:',
          solutions: ['Sabunta shafin', 'Ziyarci shafin daga baya'],
          callToActionFirst: 'Maimakon haka, ziyarci shafin sashen ',
          callToActionLinkText: 'BBC News Hausa',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/hausa',
        },
      },
      consentBanner: {
        privacy: {
          title: "Mun sabunta Ka'idojinmu na Tsare Sirri",
          description: {
            uk: {
              first:
                "Mun yi wasu sauye-sauye kan muhimman Ka'idojinmu na Tsare Sirri, muna so ku san ta yadda hakan zai shafe ku da kuma bayananku.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                "Mun yi wasu sauye-sauye kan muhimman Ka'idojinmu na Tsare Sirri, muna so ku san ta yadda hakan zai shafe ku da kuma bayananku.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'Madalla',
          reject: 'Duba abin da ya sauya',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: "Bayyana mana idan ka amince da ka'idojin",
          description: {
            uk: {
              first: 'Muna amfani da ',
              linkText: "ka'idoji",
              last:
                " domin samar maku da abubuwa masu kayatarwa a Intanet. Muna rokonku da ku sanar da mu idan kun gamsu da duka wadannan ka'idoji.",
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'Mu da sauran abokan hulda muna amfani da fasaha kamar adireshin waje, sannan mu tattara wasu bayanai game da ku duka domin mu samar maku da abubuwa masu kayatarwa a Intanet',
              linkText: '',
              last: '',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Eh, na gamsu',
          reject: "A'a, ku kai ni wurin zabar tsari",
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: "Na'urarku na da matsalar sauraren sauti",
        contentExpired: 'Yanzu an daina samar da wannan shiri.',
        contentNotYetAvailable:
          'Wannan shiri bai shigo ba tukuna don haka ba za a iya kunna shi ba.',
        audio: 'Murya',
        photogallery: 'Rumbun hotuna',
        video: 'Bidiyo',
        bbc_hausa_radio: {
          title: 'BBC Hausa Rediyo',
          subtitle:
            "Labaran duniya da sharhi da kuma bayanai kan al'amuran yau da kullum daga sashin Hausa na BBC.",
        },
        bbc_hausa_tv: {
          title: 'Labaran Talabijin',
          subtitle:
            "Sashen Hausa na BBC ya fara gabatar da shirin talabijin a ranakun Litinin zuwa Juma'a na kowane mako.",
        },
        listen: 'Saurari',
        watch: 'Kalla',
        liveLabel: 'KAI TSAYE',
        nextLabel: 'NA GABA',
        previousRadioShow: 'Shirye-shiryen rediyo da suka gabata',
        nextRadioShow: 'Shirye-shiryen rediyo na gaba',
        duration: 'Tsawon lokaci',
        recentEpisodes: 'Kari',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Bayanan bidiyo ',
          text: 'Gargadi: Ana iya samun talla wanda ba na BBC ba ne',
        },
        fallback: {
          text: 'Babu karin bayanai',
          linkText: 'Ci gaba da duba %provider_name%',
          linkTextSuffixVisuallyHidden: ', adireshin waje',
          warningText:
            'BBC ba za ta dauki alhakin abubuwan da wasu shafukan daban suka wallafa ba.',
        },
        skipLink: {
          text: 'Kauce wa %provider_name%',
          endTextVisuallyHidden: 'Karshen labarin da aka sa a %provider_name%',
        },
      },
      include: {
        errorMessage:
          'Yi hakuri, ba zamu iya nuna wannan bangaren na labarin a irin wannan karamar wayar',
        linkText:
          'Bude babban shafin domin kallon duka abubuwan da muka wallafa',
      },
      topStoriesTitle: 'Babban Labari',
      featuresAnalysisTitle: 'Minti Daya Da BBC',
    },
    brandSVG,
    mostRead: {
      header: 'Wanda aka fi karantawa',
      lastUpdated: 'Na baya-bayan nan:',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Wadanda aka fi kallo',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      frequenciesPageLabel: 'Mitocinmu da sauko da sautin labarai',
      header: 'Shirye-shiryenmu',
      durationLabel: 'Tsawon lokaci %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/hausa/game-da-mu-49283501',
        text: 'Me ya sa za ku iya aminta da BBC',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Karanta hanyoyin da muke bi dangane da adireshin waje.',
      },
      links: [
        {
          href: 'https://www.bbc.com/hausa/game-da-mu-37377086',
          text: 'Sharuddan yin amfani',
        },
        {
          href: 'https://www.bbc.com/hausa/game-da-mu-37377088',
          text: 'A game da BBC',
        },
        {
          href: 'https://www.bbc.com/hausa/game-da-mu-37377090',
          text: "Ka'idojin tsare sirri",
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: "Ka'idoji",
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853335',
          text: 'Tuntubi BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. BBC ba za ta dauki alhakin abubuwan da wasu shafukan daban suka wallafa ba. ',
    },
    fonts: [],
    timezone: 'GMT',
    navigation: [
      {
        title: 'Labaran Duniya',
        url: '/hausa',
      },
      {
        title: 'Wasanni',
        url: '/hausa/topics/cz74kjgv220t',
      },
      {
        title: 'Nishadi',
        url: '/hausa/topics/cg726kz37wdt',
      },
      {
        title: 'Cikakkun Rahotanni',
        url: '/hausa/52140979',
      },
      {
        title: 'Bidiyo',
        url: '/hausa/media/video',
      },
      {
        title: 'Shirye-shirye na Musamman',
        url: '/hausa/shirye-shirye-na-musamman-54712348',
      },
      {
        title: 'Shirye-shiryen rediyo',
        url: '/hausa/media-52219055',
      },
    ],
  },
};

export default withContext(service);
