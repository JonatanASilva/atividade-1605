//alert("seja bem vindo!")
//document.write("iniciando em JavaScript");
//prompt("Digite seu nome");
//resp = confirm("Será que vai chover?");
/*var a, b;
a = 5;
b = "5 kg de açucar";
document.write("O valor da variável A é: " + a);
document.write("<p>" + "O valor da variável B é: " + b + "</P>");
document.write("<p>" + "O valor da variável A dividido por 2 é:" + a / 2 + "</p>");
document.write("<p>" + "O valor da variável B dividido por 2 é:" + b / 2 + "</P>");
var a, inteiro, flutuante;
a = "45.78 Kg de açucar";
inteiro = parseInt(a);
flutuante = parseFloat(a);
document.write("O valor da variável A é:" + a);
document.write("<p>" + "O valor numérico inteiro da variável é: " + inteiro + "</P>");
document.write("<p>" + "O valor da variável A dividido por 2 é: " + inteiro / 2 + "</p>");
document.write("<p>" + "O valor da variável decimal da variável é: " + flutuante + "</p>");
document.write("<p>" + "O valor da variável A dividido por 2 é: " + flutuante / 2 + "</p>");
var a, b, c;
a = "Ola pessoal!";
b = " sejam bem vindos ao JavaScript";
c = a + b;
document.write(c);

a = 6, b = 3, c = 1;
document.write((a > b) && (b > c)); //(a é maior que b) e (b maior que c)

a = 6, b = 3, c = 1;
alert((a > b) || (b == c)); // (a é maior que b) ou (b é igual a c)

a = 6, b = 3, c = 1;
alert(a != b); //(a não é igual a a b)*/

/*Domingo = "Macarrão";
Segunda = "Lasanha";
Terça = "Picanha";
Quarta = "Feijoada";
Quinta = "Parmegiana";
Sexta = "Escondidinho";
Sabado = "Churrasco";

hoje = new Date();
xDia = hoje.getDay(); //o getDay é responsável para mostrar o dia da semana da matriz
diaSemana = new Array(7);
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda-feira";
diaSemana[2] = "Terça-feira";
diaSemana[3] = "Quarta-feira";
diaSemana[4] = "Quinta-feira";
diaSemana[5] = "Sexta-feira";
diaSemana[6] = "Sábado";
document.write(" o número da semana é: " + "" + (xDia));
document.write("<p><b>" + "hoje é " + diaSemana[xDia]);

a = 5;
alert(++a + 2); //Adiciona 1 à variável "a" antes de executar a expressão.
alert("a = " + a); //O resultado do alert será 8

a = 5;
alert(a++ + 2); //Adiciona 1 à variável "a" após a execução da expressão.
alert("a = " + a); //O resultado do alert será 7*/

a = 5
b = --a + 2; //Subtrai 1 da variável "a" antes da execução daxpresão, "b" receberá 6.
document.write("a=" + a);
document.write("b=" + b);

a = 5
b = --a + 2; //Subtrai 1 da variável "a" após da execução daxpresão, "b" receberá 7.

a = 2;
b = -a; //Muda o sinal de positivo para negativo, portanto "b" receberá -2.

c = -3;
d = -c; //Muda o sinal de negativo para positivo, "d" receberá 3.