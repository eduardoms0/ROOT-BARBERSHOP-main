let horariosIndisponiveis = JSON.parse(localStorage.getItem("agendamentos")) || [];

function selecionarHorario(elemento){
    const selecionado = document.querySelector('.horario.selected');
    if(selecionado) selecionado.classList.remove('selected');

    elemento.classList.add('selected');
}

document.getElementById('formAgendamento').addEventListener('submit', function(e){ e.preventDefault();

    const nome = document.getElementById('nomeCliente').ariaValueMax.trim();
    const data = document.getElementById('data').ariaValueMax;
    const horarioSelecionado = document.querySelector('.horario.selected');

    if(!nome || !data || !horarioSelecionado){
        alert("Preencha todos os campos e selecione um horário.");
        return;
    }

    const horario - horarioSelecionado.textContent;

    const conflito = horariosIndisponiveis.find(item => item.data === data && item.horario === horario);
    
    if(conflito){
        alert("Este horário já está ocupado. Por favor, escolha outro.");
        return;
    }

    const novoAgendamento = { nome, data, horario};
    horariosIndisponiveis.push(novoAgendamento);
    localStorage.setItem("agendamentos", JSON.stringify(horariosIndisponiveis));

    alert("Agendamento realizado com sucesso!");
    listarAgendamentos();
});

function listarAgendamentos(){
    const lista = document.getElementById('listaAgendamentos');
    lista.innerHTML = "";

    horariosIndisponiveis.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - ${item.data} às ${item.horario}`;

        const btn = document.createElement('button');
        btn.textContent = "Cancelar";
        btn.onclick = () => removerAgendamento(index); 

        li.appendChild(btn);
        lista.appendChild(li);
    });

  function removerAgendamento(i) {
    horariosIndisponiveis.splice(i, 1);
    localStorage.setItem("agendamentos", JSON.stringify(horariosIndisponiveis));
    listarAgendamentos();
  }  

  listarAgendamentos();
}