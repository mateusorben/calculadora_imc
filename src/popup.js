const infoButton = document.getElementById('infoIcon')
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popupClose')

infoButton.addEventListener('click', () => {
    popup.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})
