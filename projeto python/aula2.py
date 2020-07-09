a = int(input('Entre com o primeiro valor: '))
b = int(input('Entre com o segundo valor: '))
print(type(a))
soma = a + b
subtracao = a - b
multiplicacao = a * b
divisao = a / b
resto = a % b
print( 'soma: {soma}. /nsubtracao: {subtracao}. '
'/nmultiplicacao: {multiplicacao} ' 
'/ndivisao: {divisao} '
'/nresto: {resto} '.format(soma= soma ,
                           subtracao =subtracao,
                           multiplicacao= multiplicacao,
                           divisao = divisao,
                           resto = resto ))


