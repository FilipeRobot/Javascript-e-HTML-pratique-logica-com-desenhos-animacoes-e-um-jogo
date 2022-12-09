function criarLinkParaCodigoGithub() {
	var listaDeLinks = [];
	for (let index = 0; index < config.projetos.length; index++) {
		const element = config.projetos[index];
		var link =
			config.github +
			config.repositorio +
			"/blob/main/" +
			element.url;
		listaDeLinks.push(link);
	}
	return listaDeLinks;
}

function adicionaLinks(links) {
	for (let index = 0; index < config.projetos.length; index++) {
		const element = config.projetos[index];

		element.src = links[index];
	}
}

const config = {
	nome: "Filipe Lemos (FilipeRobot)",
	repositorio: "Javascript-e-HTML-pratique-l-gica-com-desenhos-anima-es-e-um-jogo",
	github: "https://github.com/FilipeRobot/",
	linkedin: "https://www.linkedin.com/in/filipe-lemos-programador/",
	projetos: [
		{
			titulo: "Programa",
			img: {
				src: "./img/resultados/programa.jpg",
				alt: "Um Print do resultado do exercício 'Programa'",
			},
			explicacao: `Nesse "programa" o objetivo é, pintar a parte esquerda da tela de verde, a direita de vermelho, desenhar um triangulo no meio da tela na parte inferior, e por fim desenhar um circulo azul no meio da tela.`,
			url: "programa.html",
			src: "",
		},
		{
			titulo: "Programa 2",
			img: {
				src: "./img/resultados/programa2.jpg",
				alt: "Um Print do resultado do exercício 'Programa 2'",
			},
			explicacao:
				'Nesse "programa 2", o objetivo é extrair para uma função a ação de desenhar na tela, no caso um quadrado verde, e usar essa função, assim melhorando a legibilidade do código do programa. Em seguida, tornar essa função mais "genérica". E finalmente usar uma estrutura de repetição para preencher a parte superior da tela com quadrados.',
			url: "programa2.html",
			src: "#",
		},
		{
			titulo: "Programa 3",
			img: {
				src: "./img/resultados/programa3.jpg",
				alt: "Um Print do resultado do exercício 'Programa 3'",
			},
			explicacao: `Interagindo com o usuário`,
			url: "programa3.html",
			src: "#",
		},
		{
			titulo: "Programa 4",
			img: {
				src: "./img/resultados/programa4.jpg",
				alt: "Um Print do resultado do exercício 'Programa 4'",
			},
			explicacao: `Animação simples, mover elemento na tela`,
			url: "programa4.html",
			src: "#",
		},
		{
			titulo: "Programa 5",
			img: {
				src: "./img/resultados/programa5.jpg",
				alt: "Um Print do resultado do exercício 'Programa 5'",
			},
			explicacao: `Um mini jogo de acertar o alvo na tela`,
			url: "programa5.html",
			src: "#",
		},
		{
			titulo: "Creeper",
			img: {
				src: "./img/resultados/creeper.jpg",
				alt: "Um Print do resultado do exercício 'Creeper'",
			},
			explicacao: `Desenhando o rosto do Creeper (Minecraft)`,
			url: "creeper.html",
			src: "#",
		},
		{
			titulo: "Bandeira do Brasil",
			img: {
				src: "./img/resultados/bandeira_do_brasil.jpg",
				alt: "Um Print do resultado do exercício 'Bandeira do Brasil'",
			},
			explicacao: `Desenhando a bandeira do Brasil`,
			url: "bandeira_do_brasil.html",
			src: "#",
		},
		{
			titulo: "Uma inofensiva flor…",
			img: {
				src: "./img/resultados/uma_inofensiva_flor.jpg",
				alt: "Um Print do resultado do exercício 'Uma inofensiva flor…'",
			},
			explicacao: `Desenhando uma "flor" no centro da tela`,
			url: "uma_Inofensiva_Flor.html",
			src: "#",
		},
		{
			titulo: "Desenha alvo",
			img: {
				src: "./img/resultados/desenha_alvo.jpg",
				alt: "Um Print do resultado do exercício 'Desenha alvo'",
			},
			explicacao: `Nesse programa, simplesmente é desenhado um alvo na tela e caso você acerte o centro, informa que o alvo foi acertado, além disso é possível personalizar as cores do alvo`,
			url: "desenha_alvo.html",
			src: "#",
		},
		{
			titulo: "Trocando bandeiras",
			img: {
				src: "./img/resultados/troca_bandeira.jpg",
				alt: "Um Print do resultado do exercício 'Trocando bandeiras'",
			},
			explicacao: `Trocando de bandeira a cada 3 segundos`,
			url: "troca_bandeira.html",
			src: "#",
		},
		{
			titulo: "Mover bolinha com teclado",
			img: {
				src: "./img/resultados/mover_bolinha_com_teclado.jpg",
				alt: "Um Print do resultado do exercício 'Mover bolinha com teclado'",
			},
			explicacao: `Interação com o usuário usando o teclado, funciona com as setas ou com W A S D`,
			url: "mover_bolinha_com_teclado.html",
			src: "#",
		},
		{
			titulo: "Desenhe obras de arte",
			img: {
				src: "./img/resultados/desenhe_obras_de_arte.jpg",
				alt: "Um Print do resultado do exercício 'Desenhe obras de arte'",
			},
			explicacao: `O desafio desse exercício é trocar a cor utilizada para desenhar o círculo de acordo com o quadrado da cor que clicarmos. Se clicarmos no verde, usaremos a cor verde quando formos desenhar e por aí vai. Outro ponto é que não podemos desenhar em cima da nossa paleta, ou melhor, não podemos desenhar na linha inteira na qual faz parte.`,
			url: "desenhe_obras_de_arte.html",
			src: "#",
		},
	],
};

var links = criarLinkParaCodigoGithub();
adicionaLinks(links);
