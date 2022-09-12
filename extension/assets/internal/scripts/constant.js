const Constant = {
    meta: {
        version: (() => `v${chrome.runtime.getManifest().version}`)(),
        appName: 'Muslim Board',
        homepageLink: 'https://muslimboard.novalagung.com',
    },
    maintainer: {
        name: 'Noval Agung Prayogo',
        email: 'caknopal@gmail.com',
    },
    app: {
        baseUrlWebService: 'https://asia-southeast2-muslim-board-ind-1472876095243.cloudfunctions.net',
        baseUrlGithub: 'https://raw.githubusercontent.com/novalagung/muslimboard/master/extension/data',
        debug: (() => !('update_url' in chrome.runtime.getManifest()))(),
        timeoutDuration: Utility.seconds(5),
        updateBackgroundDelayDuration: Utility.seconds(40),
        updateContentDelayDuration: Utility.seconds(60),
        changelogs: [
            'Seamlessly load background and quote data from GitHub, and use local data as failover',
            'Cosmetic updates'
        ]
    },
}
