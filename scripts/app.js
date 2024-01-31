addEventListener('DOMContentLoaded', () => {
  var btn_menu_cat = document.querySelector('.btn_menu_cat')
  if (btn_menu_cat) {
    btn_menu_cat.addEventListener('click', () => {
      const menu_items_cat = document.querySelector('.menu_items_cat')
      menu_items_cat.classList.toggle('show')
    })
  }
})
