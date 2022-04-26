document.addEventListener('keydown', e => {
  if (e.key == 'f') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
})