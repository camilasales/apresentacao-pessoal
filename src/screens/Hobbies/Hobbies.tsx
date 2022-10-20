import { Container } from "../../common-componets/Container";
import { TextBold } from "../../common-componets/TextBold";
import { TitleRegular } from "../../common-componets/Title";
import './hobbies-style.css';

function Hobbies() {
	return (
		<div>
			<Container color={'#d7705b'}>
				<TitleRegular color={'#000000'}>HOBBIES</TitleRegular>
			</Container>
			<section className="hobbie__section">
				<div className="hobbie__section__item">
					<ul>
						<li>
						Adoro assistir seriados, mas não assisto o final deles para que sejam eternos e não derrubem minhas lágrimas. Por 
                    	isso sou apaixonada em filmes, principalmentes filmes trash, meu favorito até hoje é O Ataque dos Vermes Malditos.
						</li>
						<li>
						Amo fazer crochê para relaxar, tanto que tenho uma lojinha de bonequinhos de crochê (amigurumis)
                        chamada <a href="https://www.instagram.com/mia_linha/" target="_blank" rel="noopener noreferrer">Mia Linha</a>.
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}

export default Hobbies;