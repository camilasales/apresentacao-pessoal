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
					<TextBold>Informática</TextBold>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Distinctio necessitatibus neque quasi aut officia fugit sed, 
						mollitia beatae quia eum tempora facere nulla accusantium! 
						Quaerat at sapiente unde autem beatae..
					</p>
				</div>
				<div className="hobbie__section__item">
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

export default Hobbies;