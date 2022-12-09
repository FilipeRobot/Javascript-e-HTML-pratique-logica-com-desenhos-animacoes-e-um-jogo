function preencheMenu() {
	const menuItemGithub = document.querySelector("#menu-item-github");
	const menuItemRepositorio = document.querySelector(
		"#menu-item-repositorio"
	);
	const menuItemLinkedin = document.querySelector("#menu-item-linkedin");
	menuItemGithub.href = config.github;
	menuItemRepositorio.href = config.repositorio;
	menuItemLinkedin.href = config.linkedin;
}

function criarImg(params) {
	const img = document.createElement("img");

	img.src = params.src;

	img.alt = params.alt;

	img.classList.add("card-img-top");

	return img;
}

function criarBotaoDoCard(tipo, url) {
	if (tipo == "primario") {
		const linkPrincipal = document.createElement("a");
		linkPrincipal.href = url;
		linkPrincipal.classList.add("btn");
		linkPrincipal.classList.add("btn-primary");
		linkPrincipal.classList.add("m-1");
		linkPrincipal.textContent = "Projeto funcionando";
		return linkPrincipal;
	} else if (tipo == "segundario") {
		const linkSegundario = document.createElement("a");
		linkSegundario.href = url;
		linkSegundario.classList.add("btn");
		linkSegundario.classList.add("btn-secondary");
		linkSegundario.classList.add("m-1");
		linkSegundario.textContent = "Código do projeto";
		return linkSegundario;
	}
}

function criarTextoDoCard(pTitulo, pParagrafo, urlPrimaria, urlSegundaria) {
	const corpo = document.createElement("div");
	corpo.classList.add("card-body");

	const titulo = document.createElement("h5");
	titulo.classList.add("card-title");
	titulo.textContent = pTitulo;

	const p = document.createElement("p");
	p.classList.add("card-text");
	p.textContent = pParagrafo;

	corpo.insertAdjacentElement("beforeend", titulo);
	corpo.insertAdjacentElement("beforeend", p);
	corpo.insertAdjacentElement(
		"beforeend",
		criarBotaoDoCard("primario", urlPrimaria)
	);
	corpo.insertAdjacentElement(
		"beforeend",
		criarBotaoDoCard("segundario", urlSegundaria)
	);

	return corpo;
}

function criarCardDeProjeto(projeto) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("m-2");

	card.insertAdjacentElement("beforeend", criarImg(projeto.img));
	card.insertAdjacentElement(
		"beforeend",
		criarTextoDoCard(
			projeto.titulo,
			projeto.explicacao,
			projeto.url,
			projeto.src
		)
	);

	return card;
}

preencheMenu();
const nomeProprietario = document.querySelector("#nome-proprietario");
nomeProprietario.textContent = config.nome;

const conteudo = document.querySelector(".conteudo");

for (let index = 0; index < config.projetos.length; index++) {
	const element = config.projetos[index];
	conteudo.insertAdjacentElement("beforeend", criarCardDeProjeto(element));
}
