function resolveCustomRoutesToRewrites(customRoutes) {
    return Object.keys(customRoutes).map(key => ({
        source: customRoutes[key],
        destination: key.replace(/\/index$/, '')
    }))
}

module.exports = resolveCustomRoutesToRewrites
