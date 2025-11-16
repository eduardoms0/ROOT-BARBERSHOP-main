let horariosIndisponiveis = JSON.parse(localStorage.getItem("agendamentos"))

function selecionarHorario(elemento){
    const selecionado = document.querySelector('.horario.selected');
    if(selecionado) selecionado.classList.remove('selected');
}