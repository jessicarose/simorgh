import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import {
  F_REITH_SANS_BOLD,
  F_REITH_SANS_BOLD_ITALIC,
  F_REITH_SANS_ITALIC,
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
  F_REITH_SERIF_MEDIUM_ITALIC,
  F_REITH_SERIF_LIGHT,
} from '@bbc/psammead-styles/fonts';
import { portuguese as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/America/Sao_Paulo';
import '@bbc/psammead-locales/moment/pt-br';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `pt-BR`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Atualizado',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-portuguese',
    atiAnalyticsProducerId: '33',
    chartbeatDomain: 'brasil.bbc.co.uk', // this is meant to be different to the service name
    brandName: 'BBC News Brasil',
    product: 'BBC News',
    serviceLocalizedName: 'Brasil',
    defaultImage:
      'https://news.files.bbci.co.uk/include/articles/public/portuguese/images/metadata/poster-1024x576.png',
    defaultImageAltText: 'BBC News Brasil',
    dir: `ltr`,
    externalLinkText: ', externo',
    imageCaptionOffscreenText: 'Legenda da foto, ',
    videoCaptionOffscreenText: 'Legenda do vídeo, ',
    audioCaptionOffscreenText: 'Legenda do áudio, ',
    defaultCaptionOffscreenText: 'Legenda, ',
    imageCopyrightOffscreenText: 'Crédito, ',
    locale: `pt-BR`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'pt',
    datetimeLocale: `pt-br`,
    service: 'portuguese',
    serviceName: 'News Brasil',
    languageName: 'Portuguese',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcbrasil',
    twitterSite: '@bbcbrasil',
    noBylinesPolicy:
      'https://www.bbc.com/portuguese/institutional-50054434#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/portuguese/institutional-50054434',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Notícias, vídeos, análise e contexto em português',
    passportHomes: ['brasil'],
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Publicidade',
      },
      recommendationTitle: 'Talvez também te interesse',
      seeAll: 'Ver todos',
      home: 'Início',
      currentPage: 'Página atual',
      skipLinkText: 'Vá para o conteúdo',
      relatedContent: 'Histórias relacionadas',
      navMenuText: 'Seções',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Página não encontrada',
          message:
            'Desculpe, mas não foi possível reproduzir a página solicitada. Tente:',
          solutions: [
            'Verificar a url',
            'Clicar no botão de atualização de página do seu navegador',
            'Buscar pela página solicitada utilizando a barra de busca da BBC',
          ],
          callToActionFirst: 'Ou, tente abrir a ',
          callToActionLinkText: 'página de início da BBC News Brasil',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/portuguese',
        },
        500: {
          statusCode: '500',
          title: 'Erro no servidor interno',
          message:
            'No momento não é possível reproduzir a página solicitada. Tente:',
          solutions: [
            'Clicar no botão de atualização de página do seu navegador',
            'Voltar mais tarde',
          ],
          callToActionFirst: 'Ou, tente abrir a ',
          callToActionLinkText: 'página de início da BBC News Brasil',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/portuguese',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Nós atualizamos nossa Política de Privacidade e Cookies',
          description: {
            uk: {
              first:
                'Nós fizemos importantes modificações nos termos de nossa Política de Privacidade e Cookies e gostaríamos que soubesse o que elas significam para você e para os dados pessoais que você nos forneceu.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Nós fizemos importantes modificações nos termos de nossa Política de Privacidade e Cookies e gostaríamos que soubesse o que elas significam para você e para os dados pessoais que você nos forneceu.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: 'Saiba o que foi alterado',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Diga-nos se concorda com o uso de cookies',
          description: {
            uk: {
              first: 'Nós usamos ',
              linkText: 'cookies',
              last:
                ' para lhe proporcionar a melhor experiência online. Diga-nos se concorda com o uso de todos estes tipos de cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Nós e nossos parceiros utilizamos tecnologia do tipo ',
              linkText: 'cookies',
              last:
                ' e coletamos dados durante a navegação para lhe proporcionar a melhor experiência online e para personalizar o conteúdo e os anúncios publicitários que são exibidos para você. Diga-nos se concorda com o uso de todos estes tipos de cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Sim, concordo',
          reject: 'Não concordo, volte para Configurações',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'A reprodução deste formato de vídeo não é compatível com seu dispositivo',
        contentExpired: 'Este conteúdo não está mais disponível.',
        contentNotYetAvailable:
          'Este conteúdo ainda não está disponível para ser tocado.',
        audio: 'Áudio',
        photogallery: 'Galeria de fotos',
        video: 'Vídeo',
        listen: 'Listen',
        watch: 'Assista',
        liveLabel: 'AO VIVO',
        nextLabel: 'NEXT',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
        recentEpisodes: 'Mais',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Legenda do vídeo, ',
          text: 'Alerta: Conteúdo de terceiros pode conter publicidade',
        },
        fallback: {
          text: 'Conteúdo não disponível',
          linkText: 'Veja mais em %provider_name%',
          linkTextSuffixVisuallyHidden: ', externo',
          warningText:
            'A BBC não se responsabiliza pelo conteúdo de sites externos.',
        },
        skipLink: {
          text: 'Pule %provider_name% post',
          endTextVisuallyHidden: 'Final de %provider_name% post',
        },
      },
      include: {
        errorMessage:
          'Desculpe, mas não é possível exibir esta parte da história nesta página de acesso resumido de celular.',
        linkText:
          'Acesse a visão integral da página para visualizar todo o conteúdo.',
      },
      topStoriesTitle: 'Principais notícias',
      featuresAnalysisTitle: 'Leia mais',
    },
    brandSVG,
    mostRead: {
      header: 'Mais lidas',
      lastUpdated: 'Última atualização:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Mais assistido',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: true,
      skipLink: {
        text: 'Pule %title% e continue lendo',
        endTextVisuallyHidden: 'Fim do %title%',
      },
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/portuguese/institutional-50054434',
        text: 'Por que você pode confiar na BBC',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Leia sobre nossa política em relação a links externos.',
      },
      links: [
        {
          href: 'https://www.bbc.com/portuguese/institutional-36202448',
          text: 'Termos de Uso',
        },
        {
          href: 'https://www.bbc.com/portuguese/institutional-36202452',
          text: 'Sobre a BBC',
        },
        {
          href: 'https://www.bbc.com/portuguese/institutional-36202454',
          text: 'Política de privacidade',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853599',
          text: 'Fale com a BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. A BBC não se responsabiliza pelo conteúdo de sites externos.',
    },
    fonts: [
      F_REITH_SANS_BOLD,
      F_REITH_SANS_BOLD_ITALIC,
      F_REITH_SANS_ITALIC,
      F_REITH_SANS_REGULAR,
      F_REITH_SERIF_MEDIUM,
      F_REITH_SERIF_MEDIUM_ITALIC,
      F_REITH_SERIF_LIGHT,
    ],
    timezone: 'America/Sao_Paulo',
    navigation: [
      {
        title: 'Notícias',
        url: '/portuguese',
      },
      {
        title: 'Brasil',
        url: '/portuguese/topics/cz74k717pw5t',
      },
      {
        title: 'Internacional',
        url: '/portuguese/topics/cmdm4ynm24kt',
      },
      {
        title: 'Economia',
        url: '/portuguese/topics/cvjp2jr0k9rt',
      },
      {
        title: 'Saúde',
        url: '/portuguese/topics/c340q430z4vt',
      },
      {
        title: 'Ciência',
        url: '/portuguese/topics/cr50y580rjxt',
      },
      {
        title: 'Tecnologia',
        url: '/portuguese/topics/c404v027pd4t',
      },
      {
        title: '#SalaSocial',
        url: '/portuguese/topics/cx6pxx22x5pt',
      },
      {
        title: 'Vídeos',
        url: '/portuguese/media/video',
      },
    ],
  },
};

export default withContext(service);
