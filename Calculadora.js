function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao: \n 1 - Soma {+}\n 2 - Subtracao {-}\n 3 - Multiplicacao {*}\n 4 - Divisao Real {/}\n 5 - Divisao Inteira {%}\n 6 - Potenciacao {**}'))

    if (!operacao || operacao >= 7){
        alert('Erro - operacao invalida');
        calculadora();
    } else{
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2){
            alert('Erro - parametros invalidos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperecao();
            }
            function subtracao() {
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperecao();
            }
            function multipliacao() {
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperecao();
            }
            function divisaoReal() {
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperecao();
            }
            function divisaoInteira() {
                resultado = n1 % n2
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperecao();
            }
            function potenciacao() {
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperecao();
            }
        
            function novaOperecao(){
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Nao');
        
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2){
                    alert ('Até mais!');
                } else {
                    alert('Digite uma opcao valida')
                    novaOperecao();
                }
            }

        }

    

if (operacao == 1){
    soma();
} else if(operacao == 2){
    subtracao();
} else if(operacao == 3){
    multipliacao();
} else if(operacao == 4){
    divisaoReal();
} else if(operacao == 5){
    divisaoInteira();
} else if(operacao == 6){
    potenciacao();
}

    }

    

}
calculadora();