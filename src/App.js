//import PropTypes from 'prop-types';
import { useState } from "react";
import styled from "styled-components/macro";
import Table from "./images/school-desk-flat.svg";
import MagicStick from "./images/zauberstab.png";
import Computer from "./images/computer.png";
import Witch from "./images/witch.png";
import Bejan from "./images/bejan.png";
import Borjan from "./images/borjan.png";
import Farah from "./images/farah.png";
import Felix from "./images/felix.png";
import Flo from "./images/flo.png";
import Gabi from "./images/gabi.png";
import Helena from "./images/helena.png";
import Jens from "./images/jens.png";
import Lukas from "./images/lukas.png";
import Matthias from "./images/matthias.png";
import OlliG from "./images/ollig.png";
import OlliN from "./images/ollin.png";
import Sabrina from "./images/sabrina.png";
import Sacid from "./images/sacid.png";
import Sharine from "./images/sharine.png";
import Vika from "./images/vika.png";
import BildschirmFlo from "./images/bildschirm_flo.png";
import { element } from "prop-types";

export default function App() {
  const badCopSpells = [
    { spell: "Wir sind nicht hier, um einen Designpreis zu gewinnen!" },
    { spell: "THOMAS, GIB DOCH EINFACH NE PROP REIN!" },
    { spell: "Der Feiertag ist für Euch gestrichen, wir arbeiten natürlich!" },
    { spell: "So, wer will jetzt die Hausaufgabe zeigen?" },
    { spell: "Guten Morgen alle zusammen." },
    { spell: "Catch them all!" },
    { spell: "Dazu nehmen wir jetzt mal ein div." },
    { spell: "Florians Zusatzaufgabe: Alles in Bundesligavereine umbauen!" },
    { spell: "Ne ne, 10 Minuten für die Aufgabe reichen locker!" },
    { spell: "Thomas, lösch' mal alles raus bitte!" },
  ];

  const [actualSpell, setActualSpell] = useState([]);
  const [isActive, setIsActive] = useState(false);

  function showSpells() {
    const randomIndex = Math.floor(Math.random() * badCopSpells.length);
    const newSpell = badCopSpells.sort((element) => 0.5 - Math.random());
    setActualSpell([newSpell[randomIndex]]);
    if (
      (actualSpell, index) =>
        actualSpell.index === "Guten Morgen alle zusammen."
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  console.log(actualSpell);

  return (
    <section>
      <Header>
        <h1>Thank you Bad Coach Miriam</h1>
      </Header>
      <main>
        <ImageSection>
          {isActive && (
            <BildschirmFlo1
              width="80"
              height="65"
              src={BildschirmFlo}
              alt="bildschirmflo"
            />
          )}
          <ImageBejan width="80" height="65" src={Bejan} alt="bejan" />
          {isActive && (
            <BildschirmFlo2
              width="80"
              height="65"
              src={BildschirmFlo}
              alt="bildschirmflo"
            />
          )}
          <ImageBorjan width="80" height="65" src={Borjan} alt="borjan" />
          <ImageFarah width="80" height="65" src={Farah} alt="farah" />
          <ImageFelix width="80" height="65" src={Felix} alt="felix" />
          <ImageFlo width="80" height="65" src={Flo} alt="flo" />
          <ImageGabi width="80" height="65" src={Gabi} alt="gabi" />
          <ImageHelena width="80" height="65" src={Helena} alt="helena" />
          <ImageJens width="80" height="65" src={Jens} alt="jens" />
          <ImageLukas width="80" height="65" src={Lukas} alt="lukas" />
          <ImageMatthias width="80" height="65" src={Matthias} alt="matthias" />
          <ImageOlliG width="80" height="65" src={OlliG} alt="olig" />
          <ImageOlliN width="80" height="65" src={OlliN} alt="helena" />
          <ImageSabrina width="80" height="65" src={Sabrina} alt="sabrina" />
          <ImageSacid width="80" height="65" src={Sacid} alt="sacid" />
          <ImageSharine width="80" height="65" src={Sharine} alt="sharine" />
          <ImageVika width="80" height="65" src={Vika} alt="vika" />
          <ComputerBejan
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerBorjan
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerFarah
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerFelix
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerFlo width="100" height="100" src={Computer} alt="computer" />
          <ComputerGabi
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerHelena
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerJens
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerLukas
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerMatthias
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerOliG
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerOliN
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerSabrina
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerSacid
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerSharine
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <ComputerVika
            width="100"
            height="100"
            src={Computer}
            alt="computer"
          />
          <SchooldeskBejan
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskBorjan
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskFarah
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskFelix
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskFlo
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskGabi
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskHelena
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskJens
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskLukas
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskMatthias
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskOliG
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskOliN
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskSabrina
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskSacid
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskSharine
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
          <SchooldeskVika
            width="150"
            height="150"
            src={Table}
            alt="schooldesk"
          />
        </ImageSection>
        <BadCoachSection>
          <Zauberspruch>
            {actualSpell.map((element) => (
              <SpellSpace>"{element.spell}"</SpellSpace>
            ))}
          </Zauberspruch>
          <Zauberstab
            src={MagicStick}
            alt="zauberstab"
            onClick={() => showSpells()}
          />
          <Witchimage src={Witch} alt="witch" />
        </BadCoachSection>
      </main>
      <Footer>© by Florian Schmidbauer und Oliver Neuhäusler</Footer>
    </section>
  );
}

const Header = styled.header`
  background: hotpink;
  color: ivory;
  padding: 1.2rem;
  text-align: center;
  text-shadow: 1px -2px 3px black;
`;

const ImageSection = styled.section`
  display: grid;
  flex-flow: column wrap;
  row-gap: 5rem;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 7rem 4rem 0rem;
  place-items: center;
`;

const ImageBejan = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 1;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerBejan = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 1;
  grid-row: 1;
`;

const SchooldeskBejan = styled.img`
  grid-column: 1;
  grid-row: 1;
`;

const ImageBorjan = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 2;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerBorjan = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 2;
  grid-row: 1;
`;

const SchooldeskBorjan = styled.img`
  grid-column: 2;
  grid-row: 1;
`;

const ImageFarah = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 3;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFarah = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 3;
  grid-row: 1;
`;

const SchooldeskFarah = styled.img`
  grid-column: 3;
  grid-row: 1;
`;

const ImageFelix = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 4;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFelix = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 4;
  grid-row: 1;
`;

const SchooldeskFelix = styled.img`
  grid-column: 4;
  grid-row: 1;
`;

const ImageFlo = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 5;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFlo = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 5;
  grid-row: 1;
`;

const SchooldeskFlo = styled.img`
  grid-column: 5;
  grid-row: 1;
`;

const ImageGabi = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 6;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerGabi = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 6;
  grid-row: 1;
`;

const SchooldeskGabi = styled.img`
  grid-column: 6;
  grid-row: 1;
`;

const ImageHelena = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 7;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerHelena = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 7;
  grid-row: 1;
`;

const SchooldeskHelena = styled.img`
  grid-column: 7;
  grid-row: 1;
`;

const ImageJens = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 8;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerJens = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 8;
  grid-row: 1;
`;

const SchooldeskJens = styled.img`
  grid-column: 8;
  grid-row: 1;
`;

const ImageLukas = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 1;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerLukas = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 1;
  grid-row: 2;
`;

const SchooldeskLukas = styled.img`
  grid-column: 1;
  grid-row: 2;
`;

const ImageMatthias = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 2;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerMatthias = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 2;
  grid-row: 2;
`;

const SchooldeskMatthias = styled.img`
  grid-column: 2;
  grid-row: 2;
`;

const ImageOlliG = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 3;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerOliG = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 3;
  grid-row: 2;
`;

const SchooldeskOliG = styled.img`
  grid-column: 3;
  grid-row: 2;
`;

const ImageOlliN = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 4;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerOliN = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 4;
  grid-row: 2;
`;

const SchooldeskOliN = styled.img`
  grid-column: 4;
  grid-row: 2;
`;

const ImageSabrina = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 5;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSabrina = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 5;
  grid-row: 2;
`;

const SchooldeskSabrina = styled.img`
  grid-column: 5;
  grid-row: 2;
`;

const ImageSacid = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 6;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSacid = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 6;
  grid-row: 2;
`;

const SchooldeskSacid = styled.img`
  grid-column: 6;
  grid-row: 2;
`;

const ImageSharine = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 7;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSharine = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 7;
  grid-row: 2;
`;

const SchooldeskSharine = styled.img`
  grid-column: 7;
  grid-row: 2;
`;

const ImageVika = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 8;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerVika = styled.img`
  transform: translate(0rem, -6rem);
  grid-column: 8;
  grid-row: 2;
`;

const BildschirmFlo1 = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo2 = styled.img`
  transform: translate(0rem, -6.65rem);
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const SchooldeskVika = styled.img`
  grid-column: 8;
  grid-row: 2;
`;

const BadCoachSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  padding: 0 3rem;
  margin-top: -5rem;
`;

const Zauberspruch = styled.p`
grid-column: 1;
  border: 0.2rem groove darkviolet;
  border-radius: 1rem;
  background: ivory;
  text-align: center;
  font-family: fantasy;
  font-weight: bold;
  width: 30rem;
  height: 10rem;
}
`;

const SpellSpace = styled.p`
  font-size: 1rem;
  padding: 3.5rem 2rem 0;
`;

const Witchimage = styled.img`
  grid-column: 3;
  border: 0.2rem groove darkviolet;
  border-radius: 3rem;
  width: 90%;
`;

const Zauberstab = styled.img`
  grid-column: 2;
  :hover {
    cursor: pointer;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const Footer = styled.footer`
  background: hotpink;
  color: ivory;
  padding: 0.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 0.5px -1px 1.5px black;
`;
