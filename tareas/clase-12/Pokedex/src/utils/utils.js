
export function pageIndexCalculator(nextPaginationURL, resourceCount) {
    const resourcesPerPageLimit = 20;
    const pageTotalIndex = Math.ceil(resourceCount / resourcesPerPageLimit);
    let pageCurrentIndex;

    if (nextPaginationURL) {    
        const resourcesPerPageOffset = nextPaginationURL.match(/\d+/g)[1];
        pageCurrentIndex = resourcesPerPageOffset / resourcesPerPageLimit;
    } else {
        pageCurrentIndex = pageTotalIndex;
    }

    let pageIndex = {
        current: pageCurrentIndex,
        total: pageTotalIndex
    }

    return pageIndex;
}

export function resourceIDCalculator(resourceURL) {
    const resourceID = resourceURL.match(/\d+/g)[1];
    return resourceID;
}
