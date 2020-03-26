typeof document !== 'undefined' &&  document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))

  if('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {  // 관찰 대상의 교차 상태(Boolean)
          const lazyImage = entry.target // 관찰 대상 요소(Element)
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove('lazy')
          lazyImageObserver.unobserve(lazyImage)
        } 
      })
    })
    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage))
  }
})
