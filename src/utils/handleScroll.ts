export function disableScroll() {
  const body = document.querySelector('body')
  body.style.overflow = 'hidden'
}

export function enableScroll() {
  const body = document.querySelector('body')
  body.style.overflow = ''
}
