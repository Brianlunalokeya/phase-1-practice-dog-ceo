console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const breedDropdown = document.querySelector('#breed-dropdown')
  
    // Challenge 1
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.querySelector('#dog-image-container')
        data.message.forEach(imageUrl => {
          const img = document.createElement('img')
          img.src = imageUrl
          dogImageContainer.appendChild(img)
        })
      })
  
    // Challenge 2
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreeds = document.querySelector('#dog-breeds')
        const breeds = Object.keys(data.message)
        breeds.forEach(breed => {
          const li = document.createElement('li')
          li.textContent = breed
          dogBreeds.appendChild(li)
        })
      })
  
    // Challenge 3
    const dogBreeds = document.querySelector('#dog-breeds')
    dogBreeds.addEventListener('click', function(event) {
      if (event.target.nodeName === 'LI') {
        event.target.style.color = 'red'
      }
    })
  
    // Challenge 4
    breedDropdown.addEventListener('change', function(event) {
      const letter = event.target.value
      const lis = dogBreeds.getElementsByTagName('li')
      for (const li of lis) {
        if (li.textContent.startsWith(letter)) {
          li.style.display = ''
        } else {
          li.style.display = 'none'
        }
      }
    })
  
  })
  