var nome = window.prompt('digite teu nome')
        document.write(`Ola <strong>${nome}</strong>, Seu nome tem ${nome.length} letras,`)
        document.write(` <strong>${nome.toUpperCase()}</strong> esse é seu nome maiusculo`)
        document.write(` e <strong>${nome.toLowerCase()}</strong> é seu nome em minusculo`)
        
        
        var num = window.prompt('digite um numero')
        var num2 = window.prompt('digite outro numero')
        result = num ** num2
        document.write(`(a potencia do ${num} elevado por ${num2} se resulta em ${result} )`)
        
        
        var nota = window.prompt('digite sua nota')
        document.write(` vc foi ${nota>=6?"aprovado":"reprovado"}`)