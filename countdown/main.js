'use strict';

const dataEvento = new Date ('2022-10-22 19:00:00');
const hoje = new Date();

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
    const meses = document.getElementById('meses');
    const anos = document.getElementById('anos');

    const ano = document.getElementById('ano');
    const mes = document.getElementById('mes');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));
    const qtdMeses = dataEvento.getMonth() - hoje.getMonth();
    const qtdAnos = dataEvento.getFullYear() - hoje.getFullYear();

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
    meses.textContent = qtdMeses;
    anos.textContent = qtdAnos;

}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }

        if(dataEvento.getFullYear() - hoje.getFullYear() == 0){
            ano.parentNode.removeChild(ano);
        }

        if(dataEvento.getMonth() - hoje.getMonth() == 0){
            mes.parentNode.removeChild(mes);
        }

        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());