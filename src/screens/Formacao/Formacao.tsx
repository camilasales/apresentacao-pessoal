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
					<TextBold>Informática</TextBold>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Distinctio necessitatibus neque quasi aut officia fugit sed, 
						mollitia beatae quia eum tempora facere nulla accusantium! 
						Quaerat at sapiente unde autem beatae..
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Logística</TextBold>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Distinctio necessitatibus neque quasi aut officia fugit sed, 
						mollitia beatae quia eum tempora facere nulla accusantium! 
						Quaerat at sapiente unde autem beatae..
					</p>
				</div>
				<div className="formacao__section__item">
					<TextBold>Dev Full Stack</TextBold>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Distinctio necessitatibus neque quasi aut officia fugit sed, 
						mollitia beatae quia eum tempora facere nulla accusantium! 
						Quaerat at sapiente unde autem beatae..
					</p>
				</div>
			</section>
		</div>
	);
}

export default Formacao;