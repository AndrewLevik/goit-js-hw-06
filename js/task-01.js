const navItems = document.querySelectorAll('.item');
console.log('Number of categories:', navItems.length)

navItems.forEach(item => {
    console.log('Category:', (item.firstElementChild.textContent))
    const el = item.querySelectorAll('li')
    console.log('Elements:', el.length)
})