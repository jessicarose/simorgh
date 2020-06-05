import { buildATIPageTrackPath } from '../../atiUrl';
import { LIBRARY_VERSION, getPublishedDatetime } from '#lib/analyticsUtils';
import {
  getContentId,
  getLanguage,
  getPageIdentifier,
  getPageTitle,
} from '#lib/analyticsUtils/frontpage';

export const buildIndexPageATIParams = (
  indexPageData,
  requestContext,
  serviceContext,
) => {
  const { platform, statsDestination, pageType } = requestContext;
  const {
    atiAnalyticsAppName,
    atiAnalyticsProducerId,
    brandName,
    service,
  } = serviceContext;

  return {
    appName: atiAnalyticsAppName,
    contentId: getContentId(indexPageData),
    contentType: pageType === 'IDX' ? 'index-section' : 'index-home',
    language: getLanguage(indexPageData),
    pageIdentifier: getPageIdentifier(indexPageData, service),
    pageTitle: getPageTitle(indexPageData, brandName),
    producerId: atiAnalyticsProducerId,
    timePublished: getPublishedDatetime('firstPublished', indexPageData),
    timeUpdated: getPublishedDatetime('lastPublished', indexPageData),
    libraryVersion: LIBRARY_VERSION,
    platform,
    service,
    statsDestination,
  };
};

export const buildIndexPageATIUrl = (
  indexPageData,
  requestContext,
  serviceContext,
) => {
  return buildATIPageTrackPath(
    buildIndexPageATIParams(indexPageData, requestContext, serviceContext),
  );
};

export default buildIndexPageATIParams;
