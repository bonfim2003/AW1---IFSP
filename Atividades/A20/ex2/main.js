const inputCep = document.querySelector('[name=cep]')
const inputCity = document.querySelector('[name=cidade]')
const inputLogr = document.querySelector('[name=rua]')
const inputBairro = document.querySelector('[name=bairro]')
const inputUF = document.querySelector('[name=uf]')
const inputDdd = document.querySelector('[name=ibge]')

inputCep.addEventListener('blur', event => {
  let cep = event.target.value

  //Criar uma promise para receber os dados
  axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)

    //parametro resposta recebe

    .then(response => {
      inputCity.value = response.data.localidade
      inputUF.value = response.data.uf
      inputLogr.value = response.data.logradouro
      inputBairro.value = response.data.bairro
      inputDdd.value = response.data.ddd
    })
    .catch(error => console.log(error))
})
