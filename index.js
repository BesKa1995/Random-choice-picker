const tagsEl = document.querySelector('.tags')
const textarea = document.querySelector('.textarea')



textarea.addEventListener('keyup', (e) => {
  creatTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})


function creatTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl)
  })
}


function randomSelect() {
  const time = 30
  const int = setInterval(() => {
    const randomTag = pickRandomTag()
    highlight(randomTag)
    setTimeout(() => {
      unHighlight(randomTag)
    }, 100)
  }, 100)
  setTimeout(() => {
    clearInterval(int)
    setTimeout(() => {
      highlight(pickRandomTag())
    }, 100)
  }, time * 100)
}

function pickRandomTag() {
  tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function unHighlight(tag) {
  tag.classList.remove('highlight')
}

function highlight(tag) {
  tag.classList.add('highlight')
}