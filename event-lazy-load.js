typeof document !== 'undefined' && document.addEventListener('DOMContentLoaded', () => {
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
  let active = false
    
  const lazyLoad = () => {
    if(active === false) {
      active = true
      
      setTimeout(() => {
        lazyImages.forEach(lazyImage => {
          const top = lazyImage.getBoundingClientRect().top
          const bottom = lazyImage.getBoundingClientRect().bottom
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none"){
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy')

            lazyImages = lazyImages.filter(image => image !== lazyImage)

            if(lazyImages.length === 0) {
              document.addEventListener('scroll', lazyLoad)
              window.addEventListener('resize', lazyLoad)
              window.addEventListener('orientationchange', lazyLoad)
            }
          }
        })
        active = false
      }, 200)
    }
  }
  document.addEventListener('scroll', lazyLoad)
  window.addEventListener('resize', lazyLoad)
  window.addEventListener('orientationchange', lazyLoad)
})
