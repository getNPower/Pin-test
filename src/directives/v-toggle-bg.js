export default {
  mounted (el) {
    let toggled = false
    const color1 = 'lightblue'
    const color2 = 'lightgreen'

    const clickHandler = () => {
      el.style.backgroundColor = toggled ? color1 : color2
      toggled = !toggled
    }

    el.addEventListener('click', clickHandler)

    // Storing the event handler in a DOM element
    el.__clickHandler__ = clickHandler
  },
  beforeUnmount (el) {
    // Removing the event handler before the component is removed
    el.removeEventListener('click', el.__clickHandler__)
    delete el.__clickHandler__
  }
}
