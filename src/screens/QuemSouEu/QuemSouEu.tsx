import { Container } from "../../common-componets/Container";
import { TitleRegular } from "../../common-componets/Title";
import './quem-sou-eu-style.css';

function QuemSouEu() {
	return(
		<div>
			<Container color={'#CC3560'}>
				<TitleRegular color={'#000000'}>OLÁ SOU <br /> CAMILA</TitleRegular>
			</Container>
			<section className="quem__sou__eu__section">
                <div className="quem__sou__eu__section__item">
				    <TitleRegular color={'#CC3560'}>QUEM SOU EU</TitleRegular>
                </div>
                <div className="quem__sou__eu__section__item">
                    <p>
                        Tenho 23 anos, a maioria deles são compostos de dias de luta.
                    </p>
                    <p>
                        Faço parte de uma família incrível, onde sou conhecida como "a irmã do meio". 
                        Nós ajudamos, da maneira que pudermos, animais abandonados. É uma curiosida importante de ressaltar 
                        por que vou estar sempre compartilhado as fotinhos deles. E sim, sou usuária do termo “mãe de Pet”.
                    </p>
                    <p>
                        Amo fazer crochê para relaxar, tanto que tenho uma lojinha de bonequinhos de crochê (amigurumis)
                        chamada <a href="https://www.instagram.com/mia_linha/" target="_blank" rel="noopener noreferrer">Mia Linha</a>.
                    </p>
                    <p>
                        Assim como o ar a música é muito importante pra mim, mesmo parecendo que só escuto rock, eu sou bem eclética.
                        Gosto da música que me deixa bem ou que combine com o momento.
                    </p>
                    <p>
                        Adoro assistir seriados, mas não assisto o final deles para que sejam eternos e não derrubem minhas lágrimas. Por 
                        isso sou apaixonada em filmes, principalmentes filmes trash, meu favorito até hoje é O Ataque dos Vermes Malditos.
                    </p>
                    <p>
                        Atualmente sou estagiária em uma startup como desevolvedora web full stack, sou apaixonada principalmente no front-end e design. Esse é meu primeiro
                        emprego na área de desenvolvimento, então tem sido meu aprendizado também. Porém no trabalho é importante
                        cumprir entregas independente de como foi realizado a solução. 
                    </p>
                    <p>
                        Por isso escolhi cursar sistema para internet, quero aprender a realizar soluções e com a certeza de 
                        não ser uma gambiarra só para poder entregar, quero refletir esse conhecimento no meu trabalho. 
                        Também quero aprender mais sobre toda a estrutura técnica na área de desenvolvimento web, existem muitos conceitos que são bem vagos pra mim.
                    </p>
                    <p>
                        Espero conhecer pessoas incríveis nesse curso, o que já está acontecendo, e 
                        aprender a aplicar a tecnologia para tornar o mundo mais sustetável de alguma forma.
                    </p>
                </div>
			</section>
		</div>
	);
}

export default QuemSouEu;