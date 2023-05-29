import citadel from '../assets/shows/citadel.jpg';
import himym from '../assets/shows/himym.jpg';
import theLast from '../assets/shows/the-last.jpg';
import theOffice from '../assets/shows/the-office.jpg';
import titas from '../assets/shows/titas.jpg';


const randomNumber = (min, max) =>{

    return Math.floor( Math.random() * (max - min + 1 ) + min);
}

const data = {

    title: "Produtores",

    list: [
        {
            name: "How I met your mother",
            seasons: 7,
            stars: randomNumber(1,5),
            poster: himym,
            description: 'No ano de 2030, Ted Mosby, um arquiteto, decide explicar a seus filhos a história de como ele conheceu a mãe deles. Tudo começou em 2005, quando um de seus amigos decidiu se casar e Ted precisou correr atrás de um amor.'
        },
        {
            name: "Citadel",
            seasons: 1,
            stars: randomNumber(1,5),
            poster: citadel,
            description: 'Há oito anos, a Citadel, uma agência de espionagem global independente, foi destruída por um novo grupo, a Mantícora. Com as memórias apagadas, os agentes de elite Mason Kane e Nadia Singh escaparam com vida. Oito anos depois, o ex-colega de Mason, Bernard Orlick, pede ajuda para impedir que a Mantícora estabeleça uma nova ordem mundial.'
        },
        {
            name: "The last of us",
            seasons: 1,
            stars: randomNumber(1,5),
            poster: theLast,
            description: 'Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração, já que os dois precisam atravessar os Estados Unidos e dependem um do outro para sobreviver.'
        },
        {
            name: "The Office",
            seasons: 9,
            stars: randomNumber(1,5),
            poster: theOffice,
            description: 'Michael Scott é o egocêntrico, insensível e incompetente gerente regional de uma subsidiária da Dunder Mifflin Paper Company. Michael acredita ser o cara mais engraçado do escritório, uma fonte de sabedoria para negócios e o melhor amigo de seus funcionários. Ele nem desconfia que a sua equipe o tolera apenas pelo fato dele assinar o contracheque deles. Sem saber o que os seus funcionários pensam a seu respeito, Michael acaba sempre alternando decisões absurdas ou patéticas, mas sempre hilárias.'
        },
        {
            name: "Titãs",
            seasons: 4,
            stars: randomNumber(1,5),
            poster: titas,
            description: 'Uma equipe de jovens super-heróis liderada por Asa Noturna (anteriormente Robin de Batman) formada para combater o mal e outros perigos.'
        }
    ]
}

export default data;