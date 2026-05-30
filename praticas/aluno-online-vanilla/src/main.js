import './style.css'

const form = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


form.addEventListener('submit', (event) => {
  event.preventDefault()

  emailError.textContent = ''
  passwordError.textContent = ''

  let valid = true

  if (!emailInput.value) {
    emailError.textContent = 'O e-mail é obrigatório.'
    valid = false
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Digite um e-mail válido'
    valid = false
  }

  if (!passwordInput.value) {
    passwordError.textContent = 'A senha é obrigatória.'
    valid = false
  }

  if (valid) {
    window.location.href = '/index.html'
  }
})

