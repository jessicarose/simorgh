import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { noAscendersOrDescenders } from '@bbc/gel-foundations/scripts';
import { korean as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Seoul';
import withContext from '../../../contexts/utils/withContext';
import 'moment/locale/ko';

export const service = {
  default: {
    lang: `ko`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: '',
    articleTimestampSuffix: '에 업데이트 됨',
    atiAnalyticsAppName: 'news-korean',
    atiAnalyticsProducerId: '57',
    chartbeatDomain: 'korean.bbc.co.uk',
    brandName: 'BBC News 코리아',
    product: 'BBC News',
    serviceLocalizedName: '코리아',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/korean.png',
    defaultImageAltText: 'BBC News 코리아',
    dir: `ltr`,
    externalLinkText: ', 외부 사이트',
    imageCaptionOffscreenText: '사진 설명, ',
    videoCaptionOffscreenText: '동영상 설명, ',
    audioCaptionOffscreenText: '오디오 설명, ',
    defaultCaptionOffscreenText: '설명, ',
    imageCopyrightOffscreenText: '사진 출처, ',
    locale: `ko-KO`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ko',
    datetimeLocale: `ko`,
    service: 'korean',
    serviceName: 'Korean',
    languageName: 'Korean',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnews',
    twitterSite: '@bbcnews',
    noBylinesPolicy:
      'https://www.bbc.com/korean/institutional-49283197#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/korean/institutional-49283197',
    isTrustProjectParticipant: true,
    script: noAscendersOrDescenders,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: '홈페이지',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: '광고',
      },
      seeAll: '모든 기사 보기',
      home: '홈',
      currentPage: '현재 페이지',
      skipLinkText: '내용 보기',
      relatedContent: '관련 기사 더 보기',
      navMenuText: '섹션',
      mediaAssetPage: {
        mediaPlayer: '미디어 플레이어',
        audioPlayer: '오디오 플레이어',
        videoPlayer: '비디오 플레이어',
      },
      error: {
        404: {
          statusCode: '404',
          title: '페이지를 찾을 수 없습니다',
          message:
            '죄송합니다. 페이지를 찾지 못했습니다. 이 중 하나를 시도해보세요:',
          solutions: [
            'URL 주소 재확인',
            '웹브라우저의 새로 고침 버튼 누르기',
            'BBC 검색 기능을 이용해 해당 페이지 찾아보기',
          ],
          callToActionFirst: '',
          callToActionLinkText: 'BBC News 코리아',
          callToActionLast: ' 홈페이지를 방문해보세요',
          callToActionLinkUrl: 'https://www.bbc.com/korean',
        },
        500: {
          statusCode: '500',
          title: '내부 서버 에러',
          message:
            '죄송합니다. 페이지를 찾지 못했습니다. 이 중 하나를 시도해보세요:',
          solutions: [
            '웹브라우저의 새로 고침 버튼 누르기',
            '나중에 다시 시도하기',
          ],
          callToActionFirst: '',
          callToActionLinkText: 'BBC News 코리아',
          callToActionLast: ' 홈페이지를 방문해보세요',
          callToActionLinkUrl: 'https://www.bbc.com/korean',
        },
      },
      consentBanner: {
        privacy: {
          title: '개인 정보와 쿠키 처리 방침이 업데이트되었습니다',
          description: {
            uk: {
              first:
                '개인 정보와 쿠키 처리 방침에서 주요 변경 사항과 이 변경 사항이 이용자와 이용자의 정보에 가질 영향에 대해 알려드리고자 합니다.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                '개인 정보와 쿠키 처리 방침에서 주요 변경 사항과 이 변경 사항이 이용자와 이용자의 정보에 가질 영향에 대해 알려드리고자 합니다.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: '네',
          reject: '변경사항을 확인하세요',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: '쿠키 수집에 동의하십니까?',
          description: {
            uk: {
              first: 'BBC는 이용자에게 최적의 온라인 경험을 제공하기 위해 ',
              linkText: '쿠키',
              last: ' 정보를 이용합니다. 쿠키 수집에 동의하십니까?',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'BBC와 파트너사는 ',
              linkText: '쿠키',
              last:
                ', 웹브라우징 데이터 수집과 같은 기술을 통해 이용자에게 최적의 온라인 경험과 맞춤 콘텐츠, 광고를 제공하고 있습니다. 이에 동의하십니까?',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: '네, 동의합니다',
          reject: '아니요, 설정 화면으로 이동합니다',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: '사용 기기에서 미디어 재생이 지원되지 않습니다',
        contentExpired: '더 이상 이용할 수 없는 콘텐츠입니다.',
        contentNotYetAvailable: '아직 재생할 수 없는 프로그램입니다.',
        audio: '오디오',
        photogallery: '사진 갤러리',
        video: '비디오',
        listen: '듣기',
        watch: '보기',
        liveLabel: 'LIVE',
        nextLabel: '다음',
        previousRadioShow: '이전 라디오 방송',
        nextRadioShow: '다음 라디오 방송',
        duration: '방송 길이',
        recentEpisodes: '이전',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: '동영상 설명, ',
          text: '경고: 타사 콘텐츠에는 광고가 포함될 수 있습니다',
        },
        fallback: {
          text: '콘텐츠를 불러올 수 없습니다',
          linkText: '더보기 %provider_name%',
          linkTextSuffixVisuallyHidden: ', 외부 사이트',
          warningText:
            'BBC는 외부 사이트 및 타사 콘텐츠에 대한 책임을 지지 않습니다',
        },
        skipLink: {
          text: '%provider_name% 포스트 건너뛰기',
          endTextVisuallyHidden: '%provider_name% 포스트 마침',
        },
      },
      include: {
        errorMessage:
          'Sorry, we can’t display this part of the story on this lightweight mobile page.',
        linkText: 'View the full version of the page to see all the content.',
      },
      topStoriesTitle: '주요뉴스',
      featuresAnalysisTitle: '이 시간 이슈',
    },
    brandSVG,
    mostRead: {
      header: 'TOP 뉴스',
      lastUpdated: '마지막 업데이트일',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: '인기 콘텐츠',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'BBC 코리아 라디오',
      durationLabel: '방송 길이 %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/korean/institutional-49283197',
        text: 'BBC News를 신뢰할 수 있는 이유',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: '외부 링크에 대한 본사 정책 보기',
      },
      links: [
        {
          href: 'https://www.bbc.co.uk/usingthebbc/terms/',
          text: '이용 약관',
        },
        {
          href: 'https://www.bbc.co.uk/aboutthebbc',
          text: 'BBC 소개',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/privacy/',
          text: '개인정보취급방침',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
          text: '쿠키정책',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853423',
          text: '고객센터',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. BBC는 외부 사이트 및 타사 콘텐츠에 대한 책임을 지지 않습니다',
    },
    fonts: [],
    navigation: [
      {
        title: '뉴스',
        url: '/korean',
      },
      {
        title: '비디오',
        url: '/korean/media/video',
      },
      {
        title: '다운로드',
        url: '/korean/downloads',
      },
      {
        title: 'TOP 뉴스',
        url: '/korean/popular/read',
      },
    ],
    timezone: 'Asia/Seoul',
  },
};

export default withContext(service);
