export default ({ app, $config: { GTM_ID } }) => {
  if (process.env.NODE_ENV !== 'production' || !process.browser) return

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.addEventListener('scroll', initGTMOnEvent)
      document.addEventListener('mousemove', initGTMOnEvent)
      document.addEventListener('touchstart', initGTMOnEvent)
    }, 100)
  })

  function initGTMOnEvent (event) {
    initGTM()
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent)
  }

  function initGTM () {
    if (window.gtmDidInit) return

    window.gtmDidInit = true

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true

    script.onload = () => {
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': (new Date()).getTime(),
        'gtm.uniqueEventId': 0
      })
    }
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(script)

    app.router.afterEach((to, from) => {
      window.dataLayer.push({
        event: 'RouterTrigger',
        pageUrl: to.fullPath,
        pageTitle: to.path
      })
    })
  }
}
