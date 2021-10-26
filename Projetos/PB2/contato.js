/*---- MASCARAS FORMULARIO------*/

const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },

  telefone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  celular(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }
}

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener(
    'input',
    e => {
      e.target.value = masks[field](e.target.value)
    },
    false
  )
})

/*---- VALIDAÇÂO FORMULARIO------*/

const button = document.getElementById('button')

button.addEventListener('click', event => {
  event.preventDefault()

  const email = document.getElementById('email')
  const nome = document.getElementById('nome')

  /*---ver se campo está em branco----*/

  if (nome.value == '') {
    nome.classList.add('errorInput')
  } else {
    nome.classList.remove('errorInput')
  }

  if (email.value == '') {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  if (cpf.value == '') {
    cpf.classList.add('errorInput')
  } else {
    cpf.classList.remove('errorInput')
  }

  if (celular.value == '') {
    celular.classList.add('errorInput')
  } else {
    celular.classList.remove('errorInput')
  }
  if (mensagem.value == '') {
    mensagem.classList.add('errorInput')
  } else {
    mensagem.classList.remove('errorInput')
  }

  /*---ver se campo está de acordo----*/

  if (
    email.value.indexOF('@') == -1 ||
    email.value.indexOf('.') == -1 ||
    email.value.indexOF('.') - email.value.indexOF('@') == 1
  ) {
    email.classList.add('errorInput')
  } else {
    email.classList.remove('errorInput')
  }

  if (celular.value.length < 11 || celular.value.length > 11) {
    celular.classList.add('errorInput')
  } else {
    celular.classList.remove('errorInput')
  }

  if (cpf.value.length < 11 || celular.value.length > 11) {
    cpf.classList.add('errorInput')
  } else {
    cpf.classList.remove('errorInput')
  }
})
