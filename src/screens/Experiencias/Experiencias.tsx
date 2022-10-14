import { Container } from "../../common-componets/Container";
import { TextBold } from "../../common-componets/TextBold";
import { TitleRegular } from "../../common-componets/Title";
import './experiencias-style.css'

function Experiencias() {
	return (
		<div>
			<Container color={'#414A6B'}>
				<TitleRegular color={'#000000'}>EXPERIÊNCIAS</TitleRegular>
			</Container>
			<section className="experiencia__section">
				<div className="experiencia__section__item">
					<TextBold>Informática</TextBold>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Distinctio necessitatibus neque quasi aut officia fugit sed, 
						mollitia beatae quia eum tempora facere nulla accusantium! 
						Quaerat at sapiente unde autem beatae..
					</p>
				</div>
				<div className="experiencia__section__item">
					<TextBold>Skils</TextBold>
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

export default Experiencias;