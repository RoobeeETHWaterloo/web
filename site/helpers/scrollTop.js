const scrollTop = (value = 0) => {
  window.scroll({
    top: value,
    left: 0,
    behavior: 'smooth',
  })
}


export default scrollTop
