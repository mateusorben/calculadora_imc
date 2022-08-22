function calcular() {
    var peso = document.querySelector('#imputPeso')
    var altura = document.querySelector('#imputAltura')
    var generoSelecionado = document.getElementsByName('genero')

    var valorPeso = inputPeso.value
    var valorAltura = inputAltura.value

    var imc = (valorPeso / (valorAltura * valorAltura)).toFixed(2)

    if(imc <= 18.5 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_06.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Abaixo do normal</h3>'
        descricaoSaidaImc.innerHTML = '<p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>'
    } else if (imc <= 18.5 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_06.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Abaixo do normal</h3>'
        descricaoSaidaImc.innerHTML = '<p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>'
    }  else if(imc <= 24.9 && imc >=18.6 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_05.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Normal</h3>'
        descricaoSaidaImc.innerHTML = '<p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>'
    } else if (imc <= 24.9 && imc >=18.6 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_05.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Normal</h3>'
        descricaoSaidaImc.innerHTML = '<p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>'
    } else if(imc <= 29.9 && imc >= 25 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_04.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Sobrepeso</h3>'
        descricaoSaidaImc.innerHTML = '<p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>'
    } else if (imc <= 29.9 && imc >= 25 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_04.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Sobrepeso</h3>'
        descricaoSaidaImc.innerHTML = '<p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>'
    } else if(imc <= 34.9 && imc >= 30 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_03.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau I</h3>'
        descricaoSaidaImc.innerHTML = '<p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista..</p>'
    } else if (imc <= 34.9 && imc >= 30 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_03.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau I</h3>'
        descricaoSaidaImc.innerHTML = '<p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>'
    } else if(imc <= 39.9 && imc >= 35 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_02.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau II</h3>'
        descricaoSaidaImc.innerHTML = '<p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>'
    } else if (imc <= 39.9 && imc >= 35 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_02.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau II</h3>'
        descricaoSaidaImc.innerHTML = '<p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde</p>'
    } else if(imc >= 40 && generoSelecionado[0].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_01.png" alt="icon-man">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau III</h3>'
        descricaoSaidaImc.innerHTML = '<p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>'
    } else if (imc >= 40 && generoSelecionado[1].checked) {
        imagemSaidaImc.innerHTML = '<img src="imagens/imc_m_01.png" alt="icon-woman">'
        subtituloSaidaImc.innerHTML = '<h3>Obesidade grau III</h3>'
        descricaoSaidaImc.innerHTML = '<p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>'
    }

   

    resultadoImc.innerHTML = `<p style="font-size:22px"> O seu IMC é ${imc}</p>`
}
