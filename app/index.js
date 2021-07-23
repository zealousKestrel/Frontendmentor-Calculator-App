let number = document.querySelectorAll('.grid-item')
let input = document.getElementById('screeninput')
let deleteButton = document.getElementById('delbutton')
let resetButton = document.getElementById('reset')
let equalButton = document.getElementById('equal')
let errorSection = document.querySelector('.sec2')

equalButton.addEventListener('click', (e) => {
  console.log('equal')
  if (input.value !== '') {
    try {
      input.value = eval(input.value).toString()
      errorSection.classList.remove('errorValue')
    } catch (error) {
      errorSection.classList.add('errorValue')
      input.value = 0
    }
  }
})

deleteButton.addEventListener('click', (e) => {
  if (input.value !== '') {
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

number.forEach((e) => {
  e.addEventListener('click', (each) => {
    each.preventDefault()
    if (e.dataset.value !== undefined) {
      input.value = input.value + e.dataset.value
    }
  })
})

resetButton.addEventListener('click', (e) => {
  if (input.value !== '') {
    input.value = ''
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && input.value !== '') {
    input.value = input.value.slice(0, input.value.length - 1)
  }
})

let isnumber = (evt) => {
  var ASCIICode = evt.which ? evt.which : evt.keyCode
  // Special keys
  let calc = [43, 45, 42, 47, 46]
  if (calc.includes(ASCIICode)) {
    return true
  }

  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false
  return true
}
