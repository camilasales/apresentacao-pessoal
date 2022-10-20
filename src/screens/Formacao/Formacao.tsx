import { Container } from "../../common-componets/Container";
import { TitleRegular } from "../../common-componets/Title";
import { TextBold } from "../../common-componets/TextBold";
import './formacao-style.css';

function Formacao() {
	return(
		<div>
			<Container color={'#F3C130'}>
				<TitleRegular color={'#000000'}>FORMAÇÃO</TitleRegular>
			</Container>
			<section className="formacao__section">
				<div className="formacao__section__item">
					<TextBold>Técnico em Informática</TextBold>
					<p>Conheci esse mundo de programação através da ETEC Albert Einstein.
						Esse foi o curso que mudou minha vida :)
 
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Logística</TextBold>
					<p>Junto com a ETEC iniciei minha carreira acadêmica na UNINOVE, graças a uma bolsa de estudos,
						 e me formei como técnologa em logística. Mesmo sendo caminhos diferentes, a tecnologia está
						 presente em todas as áreas.
						
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Dev Full Stack</TextBold>
					<p>Atualmete estou atras da minha formação full stack, através da Fiap ingressei
						no curso Sistemas para Internet.
						
					</p>
				</div>
			</section>
		</div>
	);
}

export default Formacao;