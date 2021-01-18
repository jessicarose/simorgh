import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { devanagariAndGurmukhi } from '@bbc/gel-foundations/scripts';
import { telugu as brandSVG } from '@bbc/psammead-assets/svgs';
import { F_MALLANNA_REGULAR } from '@bbc/psammead-styles/fonts';
import '@bbc/moment-timezone-include/tz/Asia/Kolkata';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/te';

export const service = {
  default: {
    lang: `te`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'అప్‌డేట్ అయ్యింది',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-telugu',
    atiAnalyticsProducerId: '89',
    chartbeatDomain: 'telugu.bbc.co.uk',
    brandName: 'BBC News తెలుగు',
    product: 'BBC News',
    serviceLocalizedName: 'తెలుగు',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/telugu.png',
    defaultImageAltText: 'BBC News తెలుగు',
    dir: `ltr`,
    externalLinkText: ', ఇతర కథనాలు',
    imageCaptionOffscreenText: 'ఫొటో క్యాప్షన్, ',
    videoCaptionOffscreenText: 'వీడియో క్యాప్షన్, ',
    audioCaptionOffscreenText: 'ఆడియో క్యాప్షన్, ',
    defaultCaptionOffscreenText: 'క్యాప్షన్, ',
    imageCopyrightOffscreenText: 'ఫొటో సోర్స్, ',
    locale: `te-IN`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'te',
    datetimeLocale: `te-in`,
    service: 'telugu',
    serviceName: 'Telugu',
    languageName: 'Telugu',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnewstelugu',
    twitterSite: '@bbcnewstelugu',
    noBylinesPolicy:
      'https://www.bbc.com/telugu/institutional-50420343#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/telugu/institutional-50420343',
    isTrustProjectParticipant: true,
    script: devanagariAndGurmukhi,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'వార్తలు',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'వ్యాపార ప్రకటన',
      },
      seeAll: 'అన్నీ చూడండి',
      home: 'హోమ్',
      currentPage: 'ప్రస్తుత పేజీ',
      skipLinkText: 'కంటెంట్‌కు వెళ్లండి',
      relatedContent: 'సంబంధిత కథనాలు',
      navMenuText: 'విభాగాలు',
      mediaAssetPage: {
        mediaPlayer: 'మీడియా ప్లేయర్',
        audioPlayer: 'ఆడియో ప్లేయర్',
        videoPlayer: 'వీడియో ప్లేయర్',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'మీరడిగిన సమాచారం అందుబాటులో లేదు',
          message:
            'క్షమించండి, మీరు చూడాలనుకున్న సమాచారం ఇవ్వలేకపోతున్నాం. మరోసారి ప్రయత్నించండి.',
          solutions: [
            'యూఆర్ఎల్ మరోసారి సరిచూసుకోండి',
            'మీ బ్రౌజర్‌లో ఉన్న రిఫ్రెష్ బటన్‌పై నొక్కండి',
            'బీబీసీ సెర్చ్ బార్ ఉపయోగించి ఈ పేజీని వెతకండి',
          ],
          callToActionFirst: 'ప్రత్యామ్నాయంగా',
          callToActionLinkText: 'BBC News తెలుగు',
          callToActionLast: ' హోమ్ పేజీని చూడండి.',
          callToActionLinkUrl: 'https://www.bbc.com/telugu',
        },
        500: {
          statusCode: '500',
          title: 'ఇంటర్నల్ సర్వర్ ఎర్రర్',
          message:
            'క్షమించండి, మీరు కోరుకున్న పేజీని ఇప్పుడు చూపించలేకపోతున్నాం. మరోసారి ప్రయత్నించండి.',
          solutions: [
            'మీ బ్రౌజర్‌లో ఉన్న రిఫ్రెష్ బటన్‌పై నొక్కండి',
            'కాసేపాగి మళ్లీ ప్రయత్నించండి',
          ],
          callToActionFirst: 'ప్రత్యామ్నాయంగా',
          callToActionLinkText: 'BBC News తెలుగు',
          callToActionLast: ' హోమ్ పేజీని చూడండి.',
          callToActionLinkUrl: 'https://www.bbc.com/telugu',
        },
      },
      consentBanner: {
        privacy: {
          title: 'మా ప్రైవసీ, కుకీస్ పాలసీ అప్‌డేట్ చేశాం',
          description: {
            uk: {
              first:
                'మా ప్రైవసీ, కుకీస్ పాలసీలో కొన్ని ముఖ్యమైన మార్పులు చేశాం. మీకు, మీ సమాచారానికి ఇది ఏ విధంగా ఉపయోగపడుతుందో మీరు తెలుసుకోవాలని మేం కోరుకుంటున్నాం.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'మా ప్రైవసీ, కుకీస్ పాలసీలో కొన్ని ముఖ్యమైన మార్పులు చేశాం. మీకు, మీ సమాచారానికి ఇది ఏ విధంగా ఉపయోగపడుతుందో మీరు తెలుసుకోవాలని మేం కోరుకుంటున్నాం.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ఓకే',
          reject: 'ఏం మార్పులు చేశామో తెలుసుకోండి',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'మీరు కుకీస్‌ను అంగీకరిస్తే మాకు తెలియచేయండి',
          description: {
            uk: {
              first: 'మేం మీకు మంచి ఆన్‌లైన్ ఎక్స్‌పీరియన్స్ ఇవ్వడానికి ',
              linkText: 'కుకీలు',
              last:
                ' ఉపయోగిస్తాం. మీరు ఈ కుకీలన్నింటికి అంగీకరిస్తే మాకు తెలియచేయండి.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'మీకు మంచి ఆన్‌లైన్ ఎక్స్‌పీరియన్స్ ఇవ్వడానికి, మీకు తగిన కంటెంట్‌ను, ప్రకటనలను అందించడానికి మేము, మా పార్ట్‌నర్లు ',
              linkText: 'వంటి టెక్నాలజీలు',
              last:
                ' కుకీలు ఉపయోగించి, బ్రౌజింగ్ వివరాలను సేకరిస్తాం. మీరు దీనికి అంగీకరిస్తే మాకు తెలియచేయండి.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'అవును, అంగీకరిస్తున్నా',
          reject: 'లేదు, నన్ను సెట్టింగ్స్ పేజీకి తీసుకెళ్లండి',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'మీ పరికరంలో మీడియా ప్లేబ్యాక్ సదుపాయం లేదు.',
        contentExpired: 'ఈ కంటెంట్ ఇప్పుడు అందుబాటులో లేదు.',
        contentNotYetAvailable:
          'ఈ కంటెంట్ ఇంకా ప్లే చేయడానికి అందుబాటులో లేదు.',
        audio: 'ఆడియో',
        photogallery: 'ఫొటో గ్యాలరీ',
        video: 'వీడియో',
        bbc_telugu_tv: {
          title: 'ప్రపంచం',
          subtitle:
            'తాజా అంతర్జాతీయ జాతీయ వార్తా విశేషాలు, విశ్లేషణ కోసం బీబీసి ప్రపంచం చూస్తూ ఉండండి.',
        },
        listen: 'వినండి',
        watch: 'చూడండి',
        liveLabel: 'లైవ్',
        nextLabel: 'NEXT',
        previousRadioShow: 'ఇంతకు ముందు రేడియో షో',
        nextRadioShow: 'తర్వాత రేడియో షో',
        duration: 'వ్యవధి',
        recentEpisodes: 'ఇటీవలి ఎపిసోడ్లు',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'వీడియో క్యాప్షన్, ',
          text: 'హెచ్చరిక: థర్డ్ పార్టీ కంటెంట్‌లో ప్రకటనలు ఉండొచ్చు',
        },
        fallback: {
          text: 'కంటెంట్ అందుబాటులో లేదు',
          linkText: 'మరింత సమాచారం కోసం %provider_name%',
          linkTextSuffixVisuallyHidden: ', ఇతర కథనాలు',
          warningText: 'ఇతర వెబ్‌సైట్లలో సమాచారానికి బీబీసీ బాధ్యత వహించదు.',
        },
        skipLink: {
          text: 'పోస్ట్‌ %provider_name% స్కిప్ చేయండి',
          endTextVisuallyHidden: 'పోస్ట్ of %provider_name% ముగిసింది',
        },
      },
      include: {
        errorMessage:
          'Sorry, we can’t display this part of the story on this lightweight mobile page.',
        linkText: 'View the full version of the page to see all the content.',
      },
      topStoriesTitle: 'ముఖ్యమైన కథనాలు',
      featuresAnalysisTitle: 'ఫీచర్లు',
    },
    brandSVG,
    mostRead: {
      header: 'ఎక్కువమంది చదివినవి',
      lastUpdated: 'చివరిగా అప్‌డేట్ అయిన తేదీ:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'ఎక్కువగా చూసినవి',
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
        href: 'https://www.bbc.com/telugu/institutional-50420343',
        text: 'మీరు బీబీసీని ఎందుకు నమ్ముతారు?',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'ఇతర వెబ్‌సైట్లకు మా లింకింగ్ విధానం గురించి తెలుసుకోండి.',
      },
      links: [
        {
          href: 'https://www.bbc.com/terms',
          text: 'వినియోగ నిబంధనలు',
        },
        {
          href: 'https://www.bbc.com/aboutthebbc/',
          text: 'బీబీసీ గురించి',
        },
        {
          href: 'https://www.bbc.com/privacy/',
          text: 'ప్రైవసీ పాలసీ',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'కుకీలు',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853775',
          text: 'బీబీసీని సంప్రదించండి',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        ' BBC. ఇతర వెబ్‌సైట్లలో సమాచారానికి బీబీసీ బాధ్యత వహించదు.',
    },
    fonts: [F_MALLANNA_REGULAR],
    timezone: 'Asia/Kolkata',
    navigation: [
      {
        title: 'వార్తలు',
        url: '/telugu',
      },
      {
        title: 'వీడియో',
        url: '/telugu/media/video',
      },
      {
        title: 'ఎక్కువ మంది చదివినవి',
        url: '/telugu/popular/read',
      },
      {
        title: 'జాతీయం',
        url: '/telugu/topics/c5qvp16w7dnt',
      },
      {
        title: 'అంతర్జాతీయం',
        url: '/telugu/topics/cvqxn2k1xvdt',
      },
    ],
  },
};

export default withContext(service);
