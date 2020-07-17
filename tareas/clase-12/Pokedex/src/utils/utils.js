export function pageIndexCalculator(paginationURLs, resourceCount) {
  const [previousPage, nextPage] = paginationURLs;
  let pageTotalIndex;
  let pageCurrentIndex;

  if (nextPage) {
    const pageParameters = pageParametersCalculator(nextPage);
    pageTotalIndex = Math.ceil(resourceCount / pageParameters.limit);
    pageCurrentIndex = pageParameters.offset / pageParameters.limit;
  } else {
    const pageParameters = pageParametersCalculator(previousPage);
    pageTotalIndex = Math.ceil(resourceCount / pageParameters.limit);
    pageCurrentIndex = pageTotalIndex;
  }

  const pageIndex = {
    current: pageCurrentIndex,
    total: pageTotalIndex,
  };

  return pageIndex;
}

export function resourceIDCalculator(resourceURL) {
  const resourceID = resourceURL.match(/\d+/g)[1];
  return resourceID;
}

export function pageParametersCalculator(url) {
  let pageOffset;
  let pageLimit;

  if (url) {
    pageOffset = url.match(/offset=([0-9]+)/).pop();
    pageLimit = url.match(/limit=([0-9]+)/).pop();
  } else {
    pageOffset = undefined;
    pageLimit = undefined;
  }

  return {
    offset: pageOffset,
    limit: pageLimit,
  };
}
