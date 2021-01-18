import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import {
  latinDiacritics,
  cyrillicAndLatin,
} from '@bbc/gel-foundations/scripts';
import { serbian as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/sr-cyrl';
import '@bbc/psammead-locales/moment/sr';
import withContext from '../../../contexts/utils/withContext';

const baseServiceConfig = {
  articleAuthor: 'https://www.facebook.com/bbcnews',
  atiAnalyticsAppName: 'news-serbian',
  atiAnalyticsProducerId: '81',
  chartbeatDomain: 'serbian.bbc.co.uk',
  product: 'BBC News',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/serbian.png',
  dir: `ltr`,
  service: 'serbian',
  languageName: 'Serbian',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcnasrpskom',
  twitterSite: '@bbcnasrpskom',
  isTrustProjectParticipant: true,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  radioSchedule: {
    hasRadioSchedule: false,
  },
  recommendations: {
    hasStoryRecommendations: false,
  },
  theming: {
    brandBackgroundColour: `${C_POSTBOX}`,
    brandLogoColour: `${C_WHITE}`,
    brandForegroundColour: `${C_GHOST}`,
    brandHighlightColour: `${C_WHITE}`,
    brandBorderColour: `${C_POSTBOX_30}`,
  },
  brandSVG,
  fonts: [],
  timezone: 'GMT',
};

export const service = {
  lat: {
    ...baseServiceConfig,

    articleTimestampPrefix: 'Ažurirano',
    articleTimestampSuffix: '',
    brandName: 'BBC News na srpskom',
    datetimeLocale: `sr`,
    externalLinkText: ', spoljna stranica',
    frontPageTitle: 'Glavna stranica',
    lang: `sr-latn`,
    locale: `sr-latn`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'sr-Latn',
    noBylinesPolicy:
      'https://www.bbc.com/serbian/lat/institutional-50173730#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/serbian/lat/institutional-50173730',
    script: latinDiacritics,
    serviceLocalizedName: 'na srpskom',
    serviceName: 'News na srpskom',
    defaultImageAltText: 'BBC News na srpskom',
    defaultCaptionOffscreenText: 'Potpis, ',
    audioCaptionOffscreenText: 'Potpis ispod audio zapisa, ',
    videoCaptionOffscreenText: 'Potpis ispod videa, ',
    imageCaptionOffscreenText: 'Potpis ispod fotografije, ',
    imageCopyrightOffscreenText: 'Autor fotografije, ',
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/serbian/lat/institutional-50173730',
        text: 'Zašto BBC zaslužuje vaše poverenje',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Pročitajte naša pravila o linkovanju drugih sajtova.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'Pravila korišćenja',
        },
        {
          href: 'https://www.bbc.co.uk/aboutthebbc/',
          text: 'O BBC-ju',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'Pravila privatnosti',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Kolačići',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853665',
          text: 'Kontaktirajte BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC. BBC nije odgovoran za sadržaj drugih sajtova.',
    },
    mostRead: {
      header: 'Najčitanije',
      lastUpdated: 'Poslednji put ažurirano ',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Najgledanije',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    navigation: [
      {
        title: 'Početna strana',
        url: '/serbian/lat',
      },
      {
        title: 'Korona virus',
        url: '/serbian/lat/srbija-52197807',
      },
      {
        title: 'Srbija',
        url: '/serbian/lat/topics/cr50vdy9q6wt',
      },
      {
        title: 'Balkan',
        url: '/serbian/lat/topics/c06g87137jgt',
      },
      {
        title: 'Svet',
        url: '/serbian/lat/topics/c2lej05e1eqt',
      },
      {
        title: 'Video',
        url: '/serbian/lat/media/video',
      },
      {
        title: 'Najpopularnije',
        url: '/serbian/lat/popular/read',
      },
    ],
    scriptLink: {
      text: 'Ћир',
      variant: 'cyr',
    },
    translations: {
      ads: {
        advertisementLabel: 'Advertisement',
      },
      seeAll: 'Pogledajte sve',
      home: 'Glavna stranica',
      currentPage: 'Otvorena stranica',
      skipLinkText: 'Pređite na sadržaj',
      relatedContent: 'Povezano',
      navMenuText: 'Odeljci',
      mediaAssetPage: {
        mediaPlayer: 'Media plejer',
        audioPlayer: 'Audio plejer',
        videoPlayer: 'Video plejer',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Stranica nije pronađena',
          message:
            'Izvinite, stranica koju ste tražili nije nađena. Molimo vas da pokušate:',
          solutions: [
            'Proverite još jednom internet adresu',
            'Pritisnite taster za osvežavanje u vašem pretraživaču',
            'Potražite ovu stranicu koristeći BBC polje za pretragu',
          ],
          callToActionFirst: 'Molimo vas da posetite glavnu stranicu ',
          callToActionLinkText: 'BBC News na srpskom',
          callToActionLast: '.',
          callToActionLinkUrl: 'https://www.bbc.com/serbian/lat',
        },
        500: {
          statusCode: '500',
          title: 'Greška internog servera',
          message:
            'Izvinite, stranica koju ste tražili nije nađena. Molimo vas da pokušate:',
          solutions: [
            'Pritisnite taster za osvežavanje u vašem pretraživaču',
            'Posetite kasnije stranicu',
          ],
          callToActionFirst: 'Molimo vas da posetite glavnu stranicu ',
          callToActionLinkText: 'BBC News na srpskom',
          callToActionLast: '.',
          callToActionLinkUrl: 'https://www.bbc.com/serbian/lat',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Osvežili smo našu politiku privatnosti i kolačića',
          description: {
            uk: {
              first:
                'Uveli smo važne promene u našu politiku privatnosti i kolačića i želimo da znate šta to znači za vas i vaše podatke',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Uveli smo važne promene u našu politiku privatnosti i kolačića i želimo da znate šta to znači za vas i vaše podatke',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'U redu',
          reject: 'Saznajte šta se promenilo',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Obavestite nas da li se slažete sa korišćenjem kolačića',
          description: {
            uk: {
              first: 'Koristimo ',
              linkText: 'kolačiće',
              last:
                ' da bismo vam pružili najbolje iskustvo na internetu. Molimo vas da nas obavestite da li se slažete sa upotrebom svih kolačića.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Mi i naši partneri koristimo tehnologije poput ',
              linkText: 'kolačića',
              last:
                ' i prikupljamo podatke pretraživača da bismo vam ponudili najkvalitetnije iskustvo na internetu i personalizovali sadržaj i oglase koji vam se prikazuju. Molimo vas da nas obavestite da li se slažete.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Da, slažem se',
          reject: 'Ne, vratite me na podešavanja',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'Reprodukovanje multimedijskog sadržaja na vašem uređaju nije podržano',
        contentExpired: 'Ovaj sadržaj više nije dostupan.',
        contentNotYetAvailable:
          'Ovaj sadržaj još uvek nije dostupan za reprodukciju.',
        audio: 'Audio',
        photogallery: 'Foto galerija',
        video: 'Video',
        listen: 'Slušajte',
        watch: 'Gledajte',
        liveLabel: 'UŽIVO',
        nextLabel: 'NEXT',
        previousRadioShow: 'Prethodna radio emisija',
        nextRadioShow: 'Sledeća radio emisija',
        duration: 'Trajanje',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Potpis ispod videa, ',
          text: 'Upozorenje: Sadržaj drugih sajtova može da sadrži i reklame',
        },
        fallback: {
          text: 'Sadržaj nije dostupan',
          linkText: 'Pogledajte više na %provider_name%',
          linkTextSuffixVisuallyHidden: ', spoljna stranica',
          warningText: 'BBC nije odgovoran za sadržaj drugih sajtova.',
        },
        skipLink: {
          text: 'Preskočite sadržaj sa %provider_name%',
          endTextVisuallyHidden: 'Kraj sadržaja sa %provider_name%',
        },
      },
      include: {
        errorMessage:
          'Izvinite, ovaj deo teksta ne može da bude prikazan na mobilnom telefonu.',
        linkText:
          'Pogledajte punu verziju stranice da biste videli čitav sadržaj.',
      },
      topStoriesTitle: 'Najvažnije',
      featuresAnalysisTitle: 'Reportaže',
    },
  },
  cyr: {
    ...baseServiceConfig,
    articleTimestampPrefix: 'Ажурирано',
    articleTimestampSuffix: '',
    brandName: 'BBC News на српском',
    datetimeLocale: `sr-cyrl`,
    externalLinkText: ', спољна страница',
    frontPageTitle: 'Главна страница',
    lang: `sr-cyrl`,
    locale: `sr-cyrl`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'sr-Cyrl',
    noBylinesPolicy:
      'https://www.bbc.com/serbian/cyr/institutional-50173730#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/serbian/cyr/institutional-50173730',
    script: cyrillicAndLatin,
    serviceLocalizedName: 'на српском',
    serviceName: 'News на српском',
    defaultImageAltText: 'ББЦ News на српском',
    defaultCaptionOffscreenText: 'Потпис, ',
    audioCaptionOffscreenText: 'Потпис испод аудио записа, ',
    videoCaptionOffscreenText: 'Потпис испод видеа, ',
    imageCaptionOffscreenText: 'Потпис испод фотографије, ',
    imageCopyrightOffscreenText: 'Аутор фотографије, ',
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/serbian/cyr/institutional-50173730',
        text: 'Зашто ББЦ заслужује ваше поверење',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Прочитајте наша правила о линковању других сајтова.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'Правила коришћења',
        },
        {
          href: 'https://www.bbc.co.uk/aboutthebbc/',
          text: 'О ББЦ-ју',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'Правила приватности',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Колачићи',
        },
        {
          href: 'https://www.bbc.com/serbian/cyr/institutional-43543431',
          text: 'Контактирајте ББЦ',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC. ББЦ није одговоран за садржај других сајтова.',
    },
    mostRead: {
      header: 'Најчитаније',
      lastUpdated: 'Последњи пут ажурирано:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Најгледаније',
      numberOfItems: 5,
      hasMostWatched: true,
    },
    navigation: [
      {
        title: 'Почетна страна',
        url: '/serbian/cyr',
      },
      {
        title: 'Корона вирус',
        url: '/serbian/cyr/srbija-52197807',
      },
      {
        title: 'Србија',
        url: '/serbian/cyr/topics/cvjp1d3k9dvt',
      },
      {
        title: 'Балкан',
        url: '/serbian/cyr/topics/c8y9k0k2pvvt',
      },
      {
        title: 'Свет',
        url: '/serbian/cyr/topics/c3m1x951mljt',
      },
      {
        title: 'Видео',
        url: '/serbian/cyr/media/video',
      },
      {
        title: 'Најпопуларније',
        url: '/serbian/cyr/popular/read',
      },
    ],
    scriptLink: {
      text: 'Lat',
      variant: 'lat',
    },
    translations: {
      ads: {
        advertisementLabel: 'Advertisement',
      },
      seeAll: 'Погледајте све',
      home: 'Главна страница',
      currentPage: 'Отворена страница',
      skipLinkText: 'Пређите на садржај',
      relatedContent: 'Повезано',
      navMenuText: 'Одељци',
      mediaAssetPage: {
        mediaPlayer: 'Медиа плејер',
        audioPlayer: 'Аудио плејер',
        videoPlayer: 'Видео плејер',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Страница није пронађена',
          message:
            'Извините, страница коју сте тражили није нађена. Молимо вас да покушате:',
          solutions: [
            'Проверите још једном интернет адресу',
            'Притисните тастер за освежавање у вашем претраживачу',
            'Потражите ову страницу користећи ББЦ поље за претрагу',
          ],
          callToActionFirst: 'Молимо вас да посетите главну страницу ',
          callToActionLinkText: 'BBC News на српском',
          callToActionLast: '.',
          callToActionLinkUrl: 'https://www.bbc.com/serbian/cyr',
        },
        500: {
          statusCode: '500',
          title: 'Грешка интерног сервера',
          message:
            'Извините, страница коју сте тражили није нађена. Молимо вас да покушате:',
          solutions: [
            'Притисните тастер за освежавање у вашем претраживачу',
            'Посетите касније страницу',
          ],
          callToActionFirst: 'Молимо вас да посетите главну страницу ',
          callToActionLinkText: 'BBC News на српском',
          callToActionLast: '.',
          callToActionLinkUrl: 'https://www.bbc.com/serbian/cyr',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Освежили смо нашу политику приватности и колачића',
          description: {
            uk: {
              first:
                'Увели смо важне промене у нашу политику приватности и колачића и желимо да знате шта то значи за вас и ваше податке',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Увели смо важне промене у нашу политику приватности и колачића и желимо да знате шта то значи за вас и ваше податке',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'У реду',
          reject: 'Сазнајте шта се променило',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Обавестите нас да ли се слажете са коришћењем колачића',
          description: {
            uk: {
              first: 'Користимо ',
              linkText: 'колачиће',
              last:
                ' да бисмо вам пружили најбоље искуство на интернету. Молимо вас да нас обавестите да ли се слажете са употребом свих колачића.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Ми и наши партнери користимо технологије попут ',
              linkText: 'колачиће',
              last:
                ' и прикупљамо податке претраживача да бисмо вам понудили најквалитетније искуство на интернету и персонализовали садржај и огласе који вам се приказују. Молимо вас да нас обавестите да ли се слажете.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Да, слажем се',
          reject: 'Не, вратите ме на подешавања',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'Репродуковање мултимедијског садржаја на вашем уређају није подржано',
        contentExpired: 'Овај садржај више није доступан.',
        contentNotYetAvailable:
          'Овај садржај још увек није доступан за репродукцију.',
        audio: 'Аудио',
        photogallery: 'Фото галерија',
        video: 'Видео',
        listen: 'Слушајте',
        watch: 'Гледајте',
        liveLabel: 'УЖИВО',
        nextLabel: 'NEXT',
        previousRadioShow: 'Претходна радио емисија',
        nextRadioShow: 'Следећа радио емисија',
        duration: 'Трајање',
        recentEpisodes: 'Претходне епизоде',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Video caption, ',
          text: 'Warning: Third party content may contain adverts',
        },
        fallback: {
          text: 'Content is not available',
          linkText: 'View content on %provider_name%',
          linkTextSuffixVisuallyHidden: ', external',
          warningText: 'ББЦ није одговоран за садржај других сајтова.',
        },
        skipLink: {
          text: 'Skip %provider_name% post',
          endTextVisuallyHidden: 'End of %provider_name% post',
        },
      },
      include: {
        errorMessage:
          'Извините, овај део текста не може да буде приказан на мобилном телефону.',
        linkText:
          'Погледајте пуну верзију странице да бисте видели читав садржај.',
      },
      topStoriesTitle: 'Најважније',
      featuresAnalysisTitle: 'Репортаже',
    },
  },
};

export default withContext(service);
