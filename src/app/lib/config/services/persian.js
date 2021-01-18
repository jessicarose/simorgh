import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { persian as brandSVG } from '@bbc/psammead-assets/svgs';
import { arabic } from '@bbc/gel-foundations/scripts';
import {
  F_REITH_QALAM_REGULAR,
  F_REITH_QALAM_BOLD,
} from '@bbc/psammead-styles/fonts';
import 'moment/locale/fa';
import '@bbc/moment-timezone-include/tz/GMT';
import { jalaali } from '@bbc/psammead-calendars';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: 'fa',
    product: 'BBC News',
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'به روز شده در',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-persian',
    atiAnalyticsProducerId: '69',
    chartbeatDomain: 'persian.bbc.co.uk',
    brandName: 'BBC News فارسی',
    serviceLocalizedName: 'فارسی',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/persian.png',
    defaultImageAltText: 'BBC News فارسی',
    dir: 'rtl',
    externalLinkText: '، لینک خارجی',
    imageCaptionOffscreenText: 'توضیح تصویر، ',
    videoCaptionOffscreenText: 'توضیح ویدئو، ',
    audioCaptionOffscreenText: 'توضیح صدا، ',
    defaultCaptionOffscreenText: 'توضیح، ',
    imageCopyrightOffscreenText: 'منبع تصویر، ',
    locale: 'fa',
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'fa',
    datetimeLocale: 'fa',
    service: 'persian',
    serviceName: 'Persian',
    languageName: 'Persian',
    altCalendar: jalaali,
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcpersian',
    twitterSite: '@bbcpersian',
    noBylinesPolicy:
      'https://www.bbc.com/persian/institutional-49283091#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/persian/institutional-49283091',
    isTrustProjectParticipant: true,
    script: arabic,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'صفحه اول',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'آگهی',
      },
      seeAll: 'بیشتر',
      home: 'صفحه اول',
      currentPage: 'صفحه فعلی',
      skipLinkText: 'مشاهده محتوا',
      relatedContent: 'مطالب مرتبط',
      navMenuText: 'صفحه ها',
      mediaAssetPage: {
        mediaPlayer: 'پخش صدا و تصویر',
        audioPlayer: 'پخش صدا',
        videoPlayer: 'پخش ویدیو',
      },
      error: {
        404: {
          statusCode: '۴۰۴',
          title: 'این صفحه پیدا نشد',
          message:
            'متاسفانه صفحه مورد نظر شما را پیدا نمی‌کنیم. لطفا گزینه‌های زیر را امتحان کنید:',
          solutions: [
            'آدرس صفحه مورد نظر را دوباره بررسی کنید',
            'با مرورگر خود صفحه را ریفرش کنید',
            'در نوار جستجوی بی‌بی‌سی دنبال اطلاعات مورد نظرتان بگردید',
          ],
          callToActionFirst: 'برای یافتن اطلاعات مورد نظر به صفحه اصلی ',
          callToActionLinkText: 'BBC News فارسی',
          callToActionLast: ' بروید',
          callToActionLinkUrl: 'https://www.bbc.com/persian',
        },
        500: {
          statusCode: '۵۰۰',
          title: 'خطا در سرور داخلی',
          message:
            'متاسفانه صفحه مورد نظر شما در دسترس نیست. لطفا گزینه‌های زیر را امتحان کنید:',
          solutions: [
            'با مرورگر خود صفحه را ریفرش کنید',
            'بعدا دوباره امتحان کنید',
          ],
          callToActionFirst: 'برای یافتن اطلاعات مورد نظر به صفحه اصلی ',
          callToActionLinkText: 'BBC News فارسی',
          callToActionLast: ' بروید',
          callToActionLinkUrl: 'https://www.bbc.com/persian',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'ما سیاست‌های حفظ حریم خصوصی و کوکی‌های خود را به روز کرده‌ایم',
          description: {
            uk: {
              first:
                'ما تغییرات مهمی در سیاست‌های حفظ حریم خصوصی و کوکی‌هایمان ایجاد کرده‌ایم و می‌خواهیم شما بدانید این تغییرات برای شما و اطلاعات مربوط به شما به چه معنی است',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'ما تغییرات مهمی در سیاست‌های حفظ حریم خصوصی و کوکی‌هایمان ایجاد کرده‌ایم و می‌خواهیم شما بدانید این تغییرات برای شما و اطلاعات مربوط به شما به چه معنی است',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'تایید',
          reject: 'ببنید چه تغییراتی ایجاد شده است',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'آیا با دریافت کوکی‌های ما موافقید؟',
          description: {
            uk: {
              first: 'ما برای بهبود استفاده شما از خدمات بی‌بی‌سی از ',
              linkText: 'کوکی',
              last:
                ' استفاده می‌کنیم. اگر موافق هستید دریافت کوکی‌ها را تایید کنید',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'ما و شریکانمان برای اینکه خدمات آنلاین بهتری به شما ارائه کنیم و محتوای مورد نظرتان را به شما نشان دهیم از تکنولوژی‌هایی مانند ',
              linkText: 'کوکی ها',
              last:
                ' یا برداشت از داده‌های مرورگر شما استفاده می‌کنیم؛ اگر موافق هستید تایید کنید',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'بله، موافقم',
          reject: 'خیر، بازگشت به صفحه تنظیمات',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'برای پخش این فایل لطفا جاوا اسکریپت را فعال یا از یک مرورگر دیگر استفاده کنید.',
        contentExpired: 'این محتوا دیگر قابل دسترس نیست.',
        contentNotYetAvailable: 'این برنامه هم اکنون برای پخش آماده نیست.',
        audio: 'صدا',
        photogallery: 'عکس',
        video: 'ویدیو',
        recentEpisodes: 'برنامه قبلی',
        bbc_persian_radio: {
          title: 'رادیو فارسی بی‌بی‌سی',
          subtitle:
            'مجله خبری بخش فارسی رادیو بی‌بی‌سی را هر روز از ساعت ۶ تا ۸ صبح به وقت تهران (۲:۳۰ تا ۴:۳۰ به وقت گرینیچ) بشنوید. این برنامه شامل تازه‌ترین خبرهای روز ایران و جهان، به همراه گزارش، گفت وگو و تحلیل و تفسیر درباره رویدادهای ایران، منطقه و جهان است.',
        },
        bbc_dari_radio: {
          title: 'بی بی سی افغانستان (برنامه های دری)',
          subtitle:
            'بی بی سی برای افغانستان تازه ترین و دقیق ترین خبرهای افغانستان ، منطقه و جهان را با تحلیل های همه جانبه ارایه می کند. برنامه های مختلف سیاسی، اجتماعی، فرهنگی و آموزشی از ساعت پنج صبح تا دوازده شب به زبان های دری و پشتو از بی بی سی برای افغانستان.',
        },
        bbc_persian_tv: {
          title: '۶٠ دقیقه',
          subtitle:
            'برنامه خبری-تحلیلی یک ساعته که تصویری روشن و ساده از رویدادهای پیچیده جهان ارائه می‌کند.',
        },
        listen: 'بشنوید',
        watch: 'ببینید',
        liveLabel: 'زنده',
        nextLabel: 'بعدی',
        previousRadioShow: 'برنامه رادیویی قبلی',
        nextRadioShow: 'برنامه رادیویی بعدی',
        duration: 'مدت',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'توضیح ویدیو، ',
          text: 'توضیح: محتوای مربوط به طرف ثالث ممکن است شامل آگهی باشد',
        },
        fallback: {
          text: 'محتوا در دسترس نیست',
          linkText: 'در %provider_name% بیشتر ببینید',
          linkTextSuffixVisuallyHidden: '، لینک خارجی',
          warningText: 'بی بی سی. بی بی سی مسئول محتوای سایت های دیگر نیست.',
        },
        skipLink: {
          text: 'رد شدن از پست %provider_name%',
          endTextVisuallyHidden: 'پایان پست %provider_name%',
        },
      },
      include: {
        errorMessage:
          'متأسفانه امکان نمایش این بخش از صفحه در موبایل وجود ندارد',
        linkText: 'نسخه کامل و تمامی محتوا را ببینید',
      },
      topStoriesTitle: 'مهمترین خبرها',
      featuresAnalysisTitle: 'گزارش و تحلیل',
    },
    brandSVG,
    mostRead: {
      header: 'پربیننده‌ترین‌ها',
      lastUpdated: 'به روز شده در',
      numberOfItems: 10,
      hasMostRead: true,
      onIdxPage: true,
    },
    mostWatched: {
      header: 'پربیننده ترین',
      numberOfItems: 10,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      onIdxPage: true,
      idxPagePosition: 'Features',
      header: 'برنامه‌های رادیو',
      durationLabel: '%duration% المدة الزمنية',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/persian/institutional-49283091',
        text: 'چرا می‌توانید به بی‌بی‌سی اطمینان کنید؟',
      },
      externalLink: {
        href: 'https://www.bbc.com/persian/institutional/2011/04/000001_links',
        text: 'سیاست ما درباره لینک دادن به سایت های دیگر.',
      },
      links: [
        {
          href: 'https://www.bbc.com/persian/institutional-37474133',
          text: 'شرایط استفاده',
        },
        {
          href: 'https://www.bbc.com/persian/institutional-37474136',
          text: 'درباره بی بی سی',
        },
        {
          href: 'https://www.bbc.com/persian/institutional-37540067',
          text: 'سیاست حفظ حریم خصوصی',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
          text: 'کوکی ها',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853555',
          text: 'تماس با بی بی سی',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'بی بی سی. بی بی سی مسئول محتوای سایت های دیگر نیست.',
    },
    timezone: 'GMT',
    fonts: [F_REITH_QALAM_REGULAR, F_REITH_QALAM_BOLD],
    navigation: [
      {
        title: 'صفحه اول',
        url: '/persian',
      },
      {
        title: 'انتخابات آمریکا',
        url: '/persian/world-54468359',
      },
      {
        title: 'کرونا',
        url: '/persian/science-52004647',
      },
      {
        title: 'پخش زنده',
        url: '/persian/media-49522521',
      },
      {
        title: 'ویدیو',
        url: '/persian/media/video',
      },
      {
        title: 'تلویزیون',
        url: '/persian/tv-and-radio-37434377',
      },
      {
        title: 'رادیو',
        url: '/persian/tv-and-radio-37434376',
      },
      {
        title: 'ايران',
        url: '/persian/topics/ckdxnwvwwjnt',
      },
      {
        title: 'افغانستان',
        url: '/persian/afghanistan',
      },
      {
        title: 'جهان',
        url: '/persian/topics/c1d8ye58xl8t',
      },
      {
        title: 'هنر',
        url: '/persian/topics/c9wpm0epm45t',
      },
      {
        title: 'ورزش',
        url: '/persian/topics/cnq6879k7yjt',
      },
      {
        title: 'اقتصاد',
        url: '/persian/topics/cl8l9mvlllqt',
      },
      {
        title: 'دانش',
        url: '/persian/topics/cp0e57wejkzt',
      },
      {
        title: 'ناظران می‌گویند',
        url: '/persian/blogs-54099951',
      },
    ],
  },
};

export default withContext(service);
