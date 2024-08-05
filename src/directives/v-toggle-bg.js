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

    // Збереження обробника події в DOM елементі
    el.__clickHandler__ = clickHandler
  },
  beforeUnmount (el) {
    // Видалення обробника події перед видаленням компонента
    el.removeEventListener('click', el.__clickHandler__)
    delete el.__clickHandler__ // Видалення посилання на обробник
  }
}
