import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { latinDiacritics } from '@bbc/gel-foundations/scripts';
import { vietnamese as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Ho_Chi_Minh';
import 'moment/locale/vi';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `vi`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Cập nhật',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-vietnamese',
    atiAnalyticsProducerId: '97',
    chartbeatDomain: 'vietnamese.bbc.co.uk',
    brandName: 'BBC News Tiếng Việt',
    product: 'BBC News',
    serviceLocalizedName: 'Tiếng Việt',
    defaultImage:
      'https://news.files.bbci.co.uk/ws/img/logos/og/vietnamese.png',
    defaultImageAltText: 'BBC News Tiếng Việt',
    dir: `ltr`,
    externalLinkText: ', bên ngoài',
    imageCaptionOffscreenText: 'Chụp lại hình ảnh, ',
    videoCaptionOffscreenText: 'Chụp lại video, ',
    audioCaptionOffscreenText: 'Lưu lại audio, ',
    defaultCaptionOffscreenText: 'Chụp lại, ',
    imageCopyrightOffscreenText: 'Nguồn hình ảnh, ',
    locale: `vi-VN`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'vi',
    datetimeLocale: `vi`,
    service: 'vietnamese',
    serviceName: 'Tiếng Việt',
    languageName: 'Vietnamese',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcvietnamese',
    twitterSite: '@bbcvietnamese',
    noBylinesPolicy:
      'https://www.bbc.com/vietnamese/institutional-49283563#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/vietnamese/institutional-49283563',
    isTrustProjectParticipant: true,
    script: latinDiacritics,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Tin chính',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Quảng cáo',
      },
      seeAll: 'Xem tất cả',
      home: 'Tin chính',
      currentPage: 'Trang hiện nay',
      skipLinkText: 'Bỏ qua để xem nội dung',
      relatedContent: 'Tin liên quan',
      navMenuText: 'Mục',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Không tìm thấy trang',
          message:
            'Chúng tôi không thể đưa bạn tới trang bạn tìm. Xin hãy thử:',
          solutions: [
            'Kiểm tra lại url',
            'Bấm nút refresh trong trình duyệt',
            'Tìm trang này qua thanh tìm kiếm của BBC',
          ],
          callToActionFirst: 'Vui lòng thăm ',
          callToActionLinkText: 'BBC News Tiếng Việt',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/vietnamese',
        },
        500: {
          statusCode: '500',
          title: 'Lỗi mạng nội bộ',
          message:
            'Xin lỗi, chúng tôi không thể đưa bạn tới trang bạn đang tìm. Vui lòng thử:',
          solutions: ['Bấm nút refresh trong trình duyệt', 'Quay lại sau'],
          callToActionFirst: 'Vui lòng thăm ',
          callToActionLinkText: 'BBC News Tiếng Việt',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/vietnamese',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Chúng tôi đã cập nhật Chính sách về Riêng tư và Cookie',
          description: {
            uk: {
              first:
                'Chúng tôi có một số thay đổi quan trọng về Chính sách Riêng tư và Cookie, và muống bạn biết ý nghĩa của nó đối với bạn và dữ liệu của bạn.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Chúng tôi có một số thay đổi quan trọng về Chính sách Riêng tư và Cookie, và muống bạn biết ý nghĩa của nó đối với bạn và dữ liệu của bạn.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: 'Tìm hiểu các thay đổi',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Cho chúng tôi biết bạn đồng ý về cookie',
          description: {
            uk: {
              first: 'Chúng tôi dùng ',
              linkText: 'cookie',
              last:
                ' để cho bạn trải nghiệm online tốt nhất. Cho chúng tôi biết bạn đồng ý về mọi cookie này.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Chúng tôi và các đối tác dùng công nghệ, như ',
              linkText: 'cookie',
              last:
                ', và thu thập dữ liệu browsing để cho bạn trải nghiệm online tốt nhất và cá nhân hóa nội dung và quảng cáo cho bạn. Xin cho chúng tôi biết bạn có đồng ý không.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Vâng, tôi đồng ý',
          reject: 'Không, đưa tôi xem phần Settings',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: 'Máy của bạn không hỗ trợ nghe xem',
        contentExpired: 'Chương trình không còn nữa.',
        contentNotYetAvailable: 'Chương trình này chưa sẵn sàng.',
        audio: 'Audio',
        photogallery: 'Gallery hình ảnh',
        video: 'Video',
        listen: 'Nghe',
        watch: 'Xem',
        liveLabel: 'TRỰC TIẾP',
        nextLabel: 'TỚI',
        previousRadioShow: 'Show radio trước',
        nextRadioShow: 'Show radio sau',
        duration: 'Thời lượng',
        recentEpisodes: 'Xem thêm',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Chụp lại video, ',
          text: 'Cảnh báo: Nội dung bên thứ ba có thể có quảng cáo',
        },
        fallback: {
          text: 'Nội dung không có',
          linkText: 'Xem thêm ở %provider_name%',
          linkTextSuffixVisuallyHidden: ', bên ngoài',
          warningText: 'BBC không chịu trách nhiệm nội dung các trang ngoài.',
        },
        skipLink: {
          text: 'Bỏ qua %provider_name% tin',
          endTextVisuallyHidden: 'Cuối %provider_name% tin',
        },
      },
      include: {
        errorMessage: 'Xin lỗi, không thể hiện thị phần này ở trang mobile.',
        linkText: 'Xin xem bản đầy đủ.',
      },
      topStoriesTitle: 'Tin chính',
      featuresAnalysisTitle: 'Góc nhìn và chuyên mục',
    },
    brandSVG,
    mostRead: {
      header: 'Đọc nhiều nhất',
      lastUpdated: 'Cập nhật gần nhất:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Nghe nhiều nhất',
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
        href: 'https://www.bbc.com/vietnamese/institutional-49283563',
        text: 'Tại sao bạn có thể tin tưởng BBC News',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Tìm hiểu cách chúng tôi tiếp cận việc dẫn tới trang ngoài',
      },
      links: [
        {
          href: 'https://www.bbc.com/vietnamese/institutional-37622991',
          text: 'Điều khoản sử dụng',
        },
        {
          href: 'https://www.bbc.com/vietnamese/institutional-37623840',
          text: 'Về BBC',
        },
        {
          href: 'https://www.bbc.com/vietnamese/institutional-37623841',
          text: 'Chính sách riêng tư',
        },
        {
          href:
            'https://www.bbc.co.uk/privacy/cookies/managing/cookie-settings.html',
          text: 'Cookie',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853951',
          text: 'Liên hệ BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. BBC không chịu trách nhiệm nội dung các trang ngoài.',
    },
    fonts: [],
    timezone: 'Asia/Ho_Chi_Minh',
    navigation: [
      {
        title: 'Tin chính',
        url: '/vietnamese',
      },
      {
        title: 'Việt Nam',
        url: '/vietnamese/topics/ckdxnx1x5rnt',
      },
      {
        title: 'Thế giới',
        url: '/vietnamese/topics/cnlv9j1ekq0t',
      },
      {
        title: 'Diễn đàn',
        url: '/vietnamese/forum-54540875',
      },
      {
        title: 'Kinh tế',
        url: '/vietnamese/topics/cez1ey7nzj3t',
      },
      {
        title: 'Nhịp sống mới',
        url: '/vietnamese/magazine-54029179',
      },
      {
        title: 'Thể thao',
        url: '/vietnamese/topics/ckdxnx1k7zxt',
      },
      {
        title: 'Video',
        url: '/vietnamese/media/video',
      },
    ],
  },
};

export default withContext(service);
