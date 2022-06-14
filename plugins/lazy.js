export default ({ app }) => {
  if (process.browser) {
      setTimeout(() => {
        document.addEventListener('scroll', loadVideosEvent)
        document.addEventListener('onscroll', loadVideosEvent)
        document.addEventListener('mousemove', loadVideosEvent)
        document.addEventListener('touchstart', loadVideosEvent)
      }, 600)

      app.router.afterEach((to, from) => {
        loadVideos()
      })

    function loadVideosEvent (event) {
      loadVideos()
      event.currentTarget.removeEventListener(event.type, loadVideosEvent)
    }

    function loadVideos() {
      const videos = [].slice.call(document.querySelectorAll("video.lazy"))

      videos.forEach(video => {
        let source = document.createElement('source')
        source.setAttribute('type', 'video/mp4')
        source.setAttribute('src', video.dataset.src)

        // for (const source in video.children) {
        //   const videoSource = video.children[source]
        //   console.log(videoSource)
        //   if (typeof videoSource.nodeName === "string" && videoSource.nodeName === "SOURCE") {
        //     videoSource.src = videoSource.dataset.src
        //   }
        // }
        video.appendChild(source)

        video.load()
        video.classList.remove("lazy")
      })
    }
  }
}
