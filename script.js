// variavéis com os elementos que será utilizado no código, capturados pela manipulação do DOM
const listaOrdenada = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const buttonCriar = document.getElementById('criar-tarefa');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonApagaFinalizados = document.getElementById('remover-finalizados');

// função para alterar a cor de fundo
function listBackground(event) {
  // seguindo a recomendação do Linter a função tem que ficar aqui em cima antes dela ser invocada na criação das li
  const tarefaCinza = document.getElementsByClassName('cinza');
  for (const item of tarefaCinza) {
    item.classList.remove('cinza');
  }
  event.target.classList.add('cinza'); // criando o evendo para adicionar a classe no novo elemento
}
// função para riscar a tarefa concluida
function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
// criar a lista de tarefas
// para isso a função vai criar o elemento <li> que vai ser filho do elemento <ol> e tabém vai receber os escutadores para acontecer outras funções quando solicitado por eventos de disparo
function capturarTarefa() {
  const tarefa = inputTarefa.value; // capturar e guardar, na variavel, o value (texto) digitado
  inputTarefa.value = null; // atribuindo o valor null para limpar o campo de digitação
  const liTarefa = document.createElement('li');
  liTarefa.className = 'atividade-adicionada';
  liTarefa.innerText = tarefa;
  liTarefa.addEventListener('click', listBackground);
  liTarefa.addEventListener('dblclick', completed);
  listaOrdenada.appendChild(liTarefa);
}
// evento no botão que ao receber um click ele execulta a função addTarefas
buttonCriar.addEventListener('click', capturarTarefa);

// apagar todos elementos filhos de <ol>
function apagaTudo() {
  listaOrdenada.innerText = '';// substitiu o texto da <ol>, no caso colocando vazio substitiu todas as <li> pela string vazia
}
buttonApagaTudo.addEventListener('click', apagaTudo);

// apagar finalizados
function apagarFinalizados() {
  const listaAdicionadas = document.querySelectorAll('.completed');// importante trabalhar com Nodeparents para poder utilizar o indice como array. pos isso usar o querySelectorAll
  for (const i of listaAdicionadas) {
    if (i.classList.contains('completed')) {
      listaOrdenada.removeChild(i);
    }
  }
  console.log(listaAdicionadas);
}
buttonApagaFinalizados.addEventListener('click', apagarFinalizados);



// códigos para o formulário

function createStateOptions () {
  const stateSigla = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  const stateLista = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  
  const estado = document.querySelector('#estado');
  
    for (let i = 0; i < stateLista.length; i += 1 ) {
      let stateName = document.createElement('option');
      stateName.value = stateSigla[i];
      stateName.innerText = stateLista[i];
      document.querySelector('#estado').appendChild(stateName);
    }
}
createStateOptions ()

const button = document.querySelector('#enviar')
const divPai = document.querySelector('main');
const divConteudo = document.createElement('div')

function printValues(event) {
  event.preventDefault();
  divConteudo.
  divPai.appendChild(divConteudo);
}
button.addEventListener('click', printValues);