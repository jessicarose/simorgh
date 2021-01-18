import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import { afrique as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/fr';

export const service = {
  default: {
    lang: `fr`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Mise à jour',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-afrique',
    atiAnalyticsProducerId: '3',
    chartbeatDomain: 'afrique.bbc.co.uk',
    brandName: 'BBC News Afrique',
    product: 'BBC News',
    serviceLocalizedName: 'Afrique',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/afrique.png',
    defaultImageAltText: 'BBC News Afrique',
    dir: `ltr`,
    externalLinkText: ', lien externe',
    imageCaptionOffscreenText: 'Légende image, ',
    videoCaptionOffscreenText: 'Légende vidéo, ',
    audioCaptionOffscreenText: 'Légende audio, ',
    defaultCaptionOffscreenText: 'Légende, ',
    imageCopyrightOffscreenText: 'Crédit photo, ',
    locale: `fr`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'fr',
    datetimeLocale: `fr`,
    service: 'afrique',
    serviceName: 'Afrique',
    languageName: 'French',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcafrique',
    twitterSite: '@bbcafrique',
    noBylinesPolicy:
      'https://www.bbc.com/afrique/institutionelles-49283281#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/afrique/institutionelles-49283281',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Accueil',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Publicités',
      },
      seeAll: 'Tout voir',
      home: 'Accueil',
      currentPage: 'Page en cours',
      skipLinkText: 'Aller au contenu',
      relatedContent: 'Lire plus',
      navMenuText: 'Rubriques',
      mediaAssetPage: {
        mediaPlayer: 'Lecteur média',
        audioPlayer: 'Lecteur audio',
        videoPlayer: 'Lecteur vidéo',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'La page ne peut pas être trouvée',
          message:
            "Désolé, nous ne pouvons pas afficher la page que vous cherchez. Essayez s'il vous plaît:",
          solutions: [
            "Double vérification de l'url",
            "Cliquez sur le bouton d'actualisation de votre navigateur",
            "Recherche de cette page à l'aide de la barre de recherche de la BBC",
          ],
          callToActionFirst:
            "Vous pouvez également consulter le page d'accueil du site ",
          callToActionLinkText: 'BBC News Afrique',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/afrique',
        },
        500: {
          statusCode: '500',
          title: 'Erreur interne du serveur',
          message:
            "Désolé, nous sommes actuellement dans l'impossibilité d'afficher la page que vous recherchez. Essayez s'il vous plaît:",
          solutions: [
            "Cliquez sur le bouton d'actualisation de votre navigateur",
            'Revenir plus tard',
          ],
          callToActionFirst:
            "Vous pouvez également consulter le page d'accueil du site ",
          callToActionLinkText: 'BBC News Afrique',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/afrique',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'Nous avons mis à jour nos politiques de confidentialité et de cookies',
          description: {
            uk: {
              first:
                "Nous avons apporté d'importants changements à notre politique de confidentialité et de cookies et nous voulons que vous sachiez ce que cela signifie pour vous et vos données.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                "Nous avons apporté d'importants changements à notre politique de confidentialité et de cookies et nous voulons que vous sachiez ce que cela signifie pour vous et vos données.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: 'Découvrez ce qui a changé',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Faites-nous savoir que vous acceptez les cookies',
          description: {
            uk: {
              first: 'Nous utilisons ',
              linkText: 'cookies',
              last:
                ' pour vous offrir la meilleur expérience en ligne. Veuillez nous faire savoir si vous acceptez tous ces cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'Nous et nos partenaires utilisons des technologies, comme ',
              linkText: 'cookies',
              last:
                ", et collectons des données de navigation pour vous offrir la meilleure expérience en ligne et pour personnaliser le contenu et la publicité qui vous sont présentés. Veuillez nous faire savoir si vous êtes d'accord.",
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: "Oui, j'accepte",
          reject: 'Non, dirigez-moi vers les réglages',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'Pour regarder ce contenu, veuillez activer JavaScript ou essayer un autre navigateur.',
        contentExpired: "Ce contenu n'est pas disponible",
        contentNotYetAvailable: 'Ce programme ne peut être joué maintenant.',
        audio: 'Audio',
        photogallery: 'Galerie de photos',
        video: 'Vidéo',
        bbc_afrique_radio: {
          title: 'BBC Afrique Radio',
          subtitle: 'Infos, musique et sports',
        },
        bbc_afrique_tv: {
          title: 'Cash Éco',
          subtitle:
            'Cash éco vous propose chaque jour un résumé de l’actualité économique et financière.',
        },
        listen: 'Ecoutez',
        watch: 'Suivez',
        liveLabel: 'EN DIRECT',
        nextLabel: 'SUIVANT',
        previousRadioShow: 'Emission de radio précédente',
        nextRadioShow: 'Emission de radio suivante',
        duration: 'Durée',
        recentEpisodes: 'Editions Précédentes',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Légende vidéo, ',
          text:
            'Attention: le contenu externe peut contenir des messages publicitaires',
        },
        fallback: {
          text: "Ce contenu n'est pas disponible",
          linkText: 'Voir plus sur %provider_name%',
          linkTextSuffixVisuallyHidden: ', lien externe',
          warningText:
            "La BBC n'est pas responsable du contenu des sites externes.",
        },
        skipLink: {
          text: 'Ignorer %provider_name% publication',
          endTextVisuallyHidden: 'Fin de %provider_name% publication',
        },
      },
      include: {
        errorMessage: `Désolé, nous ne pouvons pas afficher cette partie de l'article sur cette page mobile légère.`,
        linkText:
          'Consultez la version complète de la page pour voir tout le contenu.',
      },
      topStoriesTitle: 'À la une',
      featuresAnalysisTitle: 'Le choix de la rédaction',
    },
    brandSVG,
    mostRead: {
      header: 'Les plus lus',
      lastUpdated: 'Dernière mise à jour:',
      numberOfItems: 5,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Les plus vus',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'Journaux et Magazines',
      durationLabel: 'Durée %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/afrique/institutionelles-49283281',
        text: 'Pourquoi vous pouvez faire confiance à BBC News',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Découvrez notre approche en matière de liens externes.',
      },
      links: [
        {
          href: 'https://www.bbc.com/afrique/institutionelles-36826639',
          text: "Conditions d'utilisation",
        },
        {
          href: 'https://www.bbc.com/afrique/institutionelles-36826641',
          text: 'A propos de la BBC',
        },
        {
          href: 'https://www.bbc.com/afrique/institutionelles-36826642',
          text: 'Politique de confidentialité',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853159',
          text: 'Contactez la BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        "BBC. La BBC n'est pas responsable du contenu des sites externes.",
    },
    fonts: [],
    timezone: 'GMT',
    navigation: [
      {
        title: 'Accueil',
        url: '/afrique',
      },
      {
        title: 'Afrique',
        url: '/afrique/topics/cvqxn2k7kv7t',
      },
      {
        title: 'Monde',
        url: '/afrique/topics/cvqxn21vx11t',
      },
      {
        title: 'Sports',
        url: '/afrique/topics/c404v54yrqyt',
      },
      {
        title: 'Economie',
        url: '/afrique/topics/cnq687nr9v1t',
      },
      {
        title: 'Culture',
        url: '/afrique/topics/cnq687nrrw8t',
      },
      {
        title: 'Au féminin',
        url: '/afrique/38058576',
      },
      {
        title: 'Technologie',
        url: '/afrique/topics/cnq687nn703t',
      },
      {
        title: 'Santé',
        url: '/afrique/topics/c06gq9jxz3rt',
      },
      {
        title: 'Vidéos',
        url: '/afrique/media/video',
      },
      {
        title: 'Nos émissions',
        url: '/afrique/media-54074891',
      },
    ],
  },
};

export default withContext(service);
