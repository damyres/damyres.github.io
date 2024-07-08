/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda - feira';
        case 2:
            return diaSemanaTexto = 'Terça - feira';
        case 3:
            return diaSemanaTexto = 'Quarta - feira';
        case 4:
            return diaSemanaTexto = 'Quinta - feira';
        case 5:
            return diaSemanaTexto = 'Sexta - feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            diaSemanaTexto = ' ';
            return diaSemanaTexto = ' ';

    }
}
function getNomeMes(numeroMes) {
    let nomeMes;
    switch (numeroMes) {
        case 0:
            return nomeMes = 'Janeiro';
        case 1:
            return nomeMes = 'Fevereiro';
        case 2:
            return nomeMes = 'Março';
        case 3:
            return nomeMes = 'Abril';
        case 4:
            return nomeMes = 'Maio';
        case 5:
            return nomeMes = 'Junho';
        case 6:
            return nomeMes = 'Julho';
        case 7:
            return nomeMes = 'Agosto';
        case 8:
            return nomeMes = 'Setembro';
        case 9:
            return nomeMes = 'Outubro';
        case 10:
            return nomeMes = 'Novembro';
        case 11:
            return nomeMes = 'Dezembro';
        default:
            nomeMes = ' ';
            return nomeMes = ' ';
    }
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaDate(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} `+
        `${zeroAEsquerda(data.getHours())/*}: ${data.getMinutes()}`
    );
}*/
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
   // timeStyle: 'long'
};
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes);