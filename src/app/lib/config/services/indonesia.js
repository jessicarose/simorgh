import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { indonesia as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Jakarta';
import 'moment/locale/id';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `id`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Diperbarui',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-indonesia',
    atiAnalyticsProducerId: '54',
    chartbeatDomain: 'indonesian.bbc.co.uk', // this is meant to be different to the service name
    brandName: 'BBC News Indonesia',
    product: 'BBC News',
    serviceLocalizedName: 'Indonesia',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/indonesia.png',
    defaultImageAltText: 'BBC News Indonesia',
    dir: `ltr`,
    externalLinkText: ', eksternal',
    imageCaptionOffscreenText: 'Keterangan gambar, ',
    videoCaptionOffscreenText: 'Keterangan video, ',
    audioCaptionOffscreenText: 'Keterangan audio,',
    defaultCaptionOffscreenText: 'Keterangan, ',
    imageCopyrightOffscreenText: 'Sumber gambar, ',
    locale: `id-ID`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'id',
    datetimeLocale: `id`,
    service: 'indonesia',
    serviceName: 'Indonesia',
    languageName: 'Indonesian',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcindonesia',
    twitterSite: '@bbcindonesia',
    noBylinesPolicy:
      'https://www.bbc.com/indonesia/institutional-49283175#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/indonesia/institutional-49283175',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Berita',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Iklan',
      },
      seeAll: 'Lihat semua',
      home: 'Berita',
      currentPage: 'Halaman saat ini',
      skipLinkText: 'Langsung ke konten',
      relatedContent: 'Berita terkait',
      navMenuText: 'Kategori',
      mediaAssetPage: {
        mediaPlayer: 'Pemutar Media',
        audioPlayer: 'Pemutar Audio',
        videoPlayer: 'Pemutar Video',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Halaman tidak dapat ditemukan',
          message:
            'Maaf, kami tidak dapat menampilkan halaman yang Anda cari. Mohon coba:',
          solutions: [
            'Periksa kembali tautan',
            'Klik tombol perbarui di peramban Anda',
            'Cari halaman ini dengan menggunakan tombol pencari di BBC',
          ],
          callToActionFirst: 'Sebagai alternatif, coba klik ',
          callToActionLinkText: 'BBC News Indonesia.',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/indonesia',
        },
        500: {
          statusCode: '500',
          title: 'Kesalahan internal jaringan komputer',
          message:
            'Maaf, kami tidak dapat menampilkan halaman yang Anda cari. Mohon coba:',
          solutions: [
            'Klik tombol perbarui di peramban Anda',
            'Telusuri lagi nanti',
          ],
          callToActionFirst: 'Sebagai alternatif, coba klik ',
          callToActionLinkText: 'BBC News Indonesia.',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/indonesia',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Kami telah memperbarui Kebijakan Privasi dan Cookies kami',
          description: {
            uk: {
              first:
                'Kami melakukan sejumlah perubahan penting terkait Kebijakan Privasi dan Cookies dan kami ingin memberitahu Anda, apa arti langkah ini bagi Anda dan data Anda.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Kami melakukan sejumlah perubahan penting terkait Kebijakan Privasi dan Cookies dan kami ingin memberitahu Anda, apa arti langkah ini bagi Anda dan data Anda.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OKE',
          reject: 'Coba lihat apa yang berubah',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Tolong beritahu kami apakah Anda setuju dengan cookies',
          description: {
            uk: {
              first: 'Kami menggunakan ',
              linkText: 'cookies',
              last:
                ' untuk memberikan Anda pengalaman daring terbaik. Mohon beritahu kami, bila Anda setuju dengan semua cookies ini.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Kami dan para mitra kami menggunakan teknologi, seperti ',
              linkText: 'cookies',
              last:
                ', dan mengumpulkan data rambanan untuk memberikan Anda pengalaman daring terbaik dengan konten dan iklan yang ditampilkan disesuaikan dengan keperluan Anda. Mohon beritahu kami bila Anda setuju.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Ya, saya setuju',
          reject: 'Tidak, tampilkan pengaturan',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs:
          'Untuk memutar video ini, aktifkan JavaScript atau coba di mesin pencari lain',
        contentExpired: 'Konten ini sudah tidak tersedia lagi.',
        contentNotYetAvailable: 'Program ini belum tersedia.',
        audio: 'Audio',
        photogallery: 'Galeri Foto',
        video: 'Video',
        listen: 'Dengar',
        watch: 'Tonton',
        liveLabel: 'LANGSUNG',
        nextLabel: 'BERIKUTNYA',
        previousRadioShow: 'Siaran radio sebelumnya',
        nextRadioShow: 'Siaran radio berikutnya',
        duration: 'Durasi',
        recentEpisodes: 'Siaran sebelumnya',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Keterangan video, ',
          text: 'Peringatan: Konten pihak ketiga mungkin berisi iklan',
        },
        fallback: {
          text: 'Konten tidak tersedia',
          linkText: 'Lihat lebih banyak di %provider_name%',
          linkTextSuffixVisuallyHidden: ', eksternal',
          warningText:
            'BBC tidak bertanggung jawab atas konten dari situs eksternal',
        },
        skipLink: {
          text: 'Hentikan %provider_name% pesan',
          endTextVisuallyHidden: 'Lompati %provider_name% pesan',
        },
      },
      include: {
        errorMessage:
          'Maaf, kami tidak dapat menampilkan bagian dari berita ini dalam versi ramah mobile',
        linkText: 'Lihat versi lengkap di laman untuk melihat seluruh konten',
      },
      topStoriesTitle: 'Berita Utama',
      featuresAnalysisTitle: 'Majalah',
    },
    brandSVG,
    mostRead: {
      header: 'Paling banyak dibaca',
      lastUpdated: 'Terakhir diperbarui:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Terpopuler',
      numberOfItems: 5,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'Siaran radio',
      durationLabel: 'Durasi %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/indonesia/institutional-49283175',
        text: 'Alasan Anda dapat mempercayai BBC News',
      },
      externalLink: {
        href:
          'https://www.bbc.com/indonesia/institutional/2011/02/000001_links',
        text: 'Baca tentang peraturan baru terkait link eksternal.',
      },
      links: [
        {
          href: 'https://www.bbc.com/indonesia/institutional-37818421',
          text: 'Peraturan Penggunaan',
        },
        {
          href: 'https://www.bbc.com/indonesia/institutional-37818424',
          text: 'Mengenai BBC',
        },
        {
          href: 'https://www.bbc.com/indonesia/institutional-37818425',
          text: 'Kebijakan tentang Privasi',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50853401',
          text: 'Hubungi BBC',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. BBC tidak bertanggung jawab atas konten dari situs eksternal.',
    },
    fonts: [],
    navigation: [
      {
        title: 'Berita',
        url: '/indonesia',
      },
      {
        title: 'Indonesia',
        url: '/indonesia/topics/cjgn7k8yx4gt',
      },
      {
        title: 'Dunia',
        url: '/indonesia/dunia',
      },
      {
        title: 'Viral',
        url: '/indonesia/topics/cn5w7g2nq6dt',
      },
      {
        title: 'Liputan Mendalam',
        url: '/indonesia/laporan-khusus-51267199',
      },
      {
        title: 'Majalah',
        url: '/indonesia/majalah-51456120',
      },
    ],
    timezone: 'Asia/Jakarta',
  },
};

export default withContext(service);
