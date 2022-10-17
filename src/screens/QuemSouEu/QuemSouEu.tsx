import { Container } from "../../common-componets/Container";
import { TitleRegular } from "../../common-componets/Title";
import './quem-sou-eu-style.css';
import axios from "axios";
import React from "react";

function QuemSouEu() {
    const [adress, setAdress] = React.useState<any>({});
    const [showResults, setShowResults] = React.useState(false);

    React.useEffect(() => {
        axios.get(`http://viacep.com.br/ws/02545100/json/`)
        .then((response: any) => {
            setAdress(response.data);
        });
    }, []);

    return (
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
                        Tenho 24 anos, a maioria deles são compostos de dias de luta.
                    </p>
                    <p>
                        Faço parte de uma família incrível, onde sou conhecida como "a irmã do meio". 
                        Nós ajudamos animais abandonados, é uma curiosida importante de ressaltar 
                        por que vou estar sempre compartilhado as fotinhos deles. E sim, sou usuária do termo “mãe de Pet”.
                    </p>
                    <p>
                        Moro em São Paulo, então não sei como é respirar direito, mas pelo menos minha casa fica em uma 
                        rua sem saída, o que permitiu ter uma infância de muitas brincadeiras na rua. 
                    </p>
                    <p>
                        Pesquise meu endereço para ver como a minha rua incrível <br />
                        <button onClick={() => {setShowResults(true)}}>VER ENDEREÇO</button>
                    </p>
                    {
                        showResults ? <p>Meu Endereço: {adress?.logradouro}, {adress?.bairro} - {adress?.localidade} {adress?.uf}</p> : <p></p>
                    }
                 
                </div>
            </section>
        </div>
    );
}
export default QuemSouEu;
