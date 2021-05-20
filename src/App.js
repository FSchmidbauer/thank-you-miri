//import PropTypes from 'prop-types';
import { useState } from "react";
import useSound from "use-sound";
import Soundtrack from "./harrypotter.mp3";
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
import Undefined from "./images/undefined.png";
import Pokemon from "./images/pokemon.png";
import Scream from "./images/scream.png";
import Football from "./images/football.png";
import Setfire from "./images/setfire.png";
import Fire from "./images/fire.png";
import Hotpink from "./images/hotpink.png";
import Raven from "./images/thomas.png";

export default function App() {
  const badCopSpells = [
    "Wir sind nicht hier, um einen Designpreis zu gewinnen!",
    "Der Feiertag ist für Euch gestrichen, wir arbeiten natürlich!",
    "So, wer will jetzt die Hausaufgabe zeigen?",
    "Guten Morgen alle zusammen.",
    "Catch them all!",
    "Dazu nehmen wir jetzt mal ein div.",
    "Florians Zusatzaufgabe: Alles in Bundesligavereine umbauen!",
    "Ne ne, 10 Minuten für die Aufgabe reichen locker!",
    "Thomas, lösch' mal alles raus bitte!",
  ];

  const SoundButton = () => {
    const [play] = useSound(Soundtrack);
    return (
      <SoundBox onClick={play}>
        🎵 CLICK HERE for background music before you touch the magic wand
      </SoundBox>
    );
  };

  const [actualSpell, setActualSpell] = useState([]);
  const [isBildschirmFlo, setIsBildschirmFlo] = useState(false);
  const [isUndefined, setIsUndefined] = useState(false);
  const [isPokemon, setIsPokemon] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isScream, setIsScream] = useState(false);
  const [isFootball, setIsFootball] = useState(false);
  const [isFlame, setIsFlame] = useState(false);
  const [isHotpink, setIsHotpink] = useState(false);

  function showSpells() {
    const randomIndex = Math.floor(Math.random() * badCopSpells.length);
    const newSpell = badCopSpells.sort((element) => 0.5 - Math.random());
    setActualSpell([newSpell[randomIndex]]);

    if (actualSpell.includes("Catch them all!")) {
      setIsPokemon(true);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsDeleted(false);
      setIsScream(false);
      setIsFootball(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (
      actualSpell.includes("So, wer will jetzt die Hausaufgabe zeigen?")
    ) {
      setIsUndefined(true);
      setIsPokemon(false);
      setIsBildschirmFlo(false);
      setIsDeleted(false);
      setIsScream(false);
      setIsFootball(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (actualSpell.includes("Guten Morgen alle zusammen.")) {
      setIsBildschirmFlo(true);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsDeleted(false);
      setIsScream(false);
      setIsFootball(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (actualSpell.includes("Thomas, lösch' mal alles raus bitte!")) {
      setIsDeleted(true);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsScream(false);
      setIsFootball(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (
      actualSpell.includes("Ne ne, 10 Minuten für die Aufgabe reichen locker!")
    ) {
      setIsScream(true);
      setIsDeleted(false);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsFootball(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (
      actualSpell.includes(
        "Florians Zusatzaufgabe: Alles in Bundesligavereine umbauen!"
      )
    ) {
      setIsFootball(true);
      setIsScream(false);
      setIsDeleted(false);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsFlame(false);
      setIsHotpink(false);
    } else if (actualSpell.includes("Dazu nehmen wir jetzt mal ein div.")) {
      setIsFlame(true);
      setIsFootball(false);
      setIsScream(false);
      setIsDeleted(false);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsHotpink(false);
    } else if (
      actualSpell.includes(
        "Der Feiertag ist für Euch gestrichen, wir arbeiten natürlich!"
      )
    ) {
      setIsScream(true);
      setIsFlame(false);
      setIsFootball(false);
      setIsDeleted(false);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
      setIsHotpink(false);
    } else if (
      actualSpell.includes(
        "Wir sind nicht hier, um einen Designpreis zu gewinnen!"
      )
    ) {
      setIsHotpink(true);
      setIsScream(false);
      setIsFlame(false);
      setIsFootball(false);
      setIsDeleted(false);
      setIsBildschirmFlo(false);
      setIsUndefined(false);
      setIsPokemon(false);
    }
  }

  return (
    <section>
      <Header>
        <Headline>Thank you Bad Coach Miriam</Headline>
        <SoundButton />
      </Header>
      {isDeleted ? (
        ""
      ) : (
        <main>
          <ImageSection>
            {isFlame && <SetfireImage src={Setfire} alt="setfire" />}
            {isFootball && <FootballImage src={Football} alt="football" />}
            {isScream && <Scream1 src={Scream} alt="scream" />}
            {isScream && <Scream2 src={Scream} alt="scream" />}
            {isScream && <Scream3 src={Scream} alt="scream" />}
            {isScream && <Scream4 src={Scream} alt="scream" />}
            {isScream && <Scream5 src={Scream} alt="scream" />}
            {isScream && <Scream6 src={Scream} alt="scream" />}
            {isScream && <Scream7 src={Scream} alt="scream" />}
            {isScream && <Scream8 src={Scream} alt="scream" />}
            {isScream && <Scream9 src={Scream} alt="scream" />}
            {isScream && <Scream10 src={Scream} alt="scream" />}
            {isScream && <Scream11 src={Scream} alt="scream" />}
            {isScream && <Scream12 src={Scream} alt="scream" />}
            {isScream && <Scream13 src={Scream} alt="scream" />}
            {isScream && <Scream14 src={Scream} alt="scream" />}
            {isScream && <Scream15 src={Scream} alt="scream" />}
            {isScream && <Scream16 src={Scream} alt="scream" />}
            {isPokemon && <Pokemon1 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon2 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon3 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon4 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon5 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon6 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon7 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon8 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon9 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon10 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon11 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon12 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon13 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon14 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon15 src={Pokemon} alt="pokemon" />}
            {isPokemon && <Pokemon16 src={Pokemon} alt="pokemon" />}
            {isUndefined && <Undefined1 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined2 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined3 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined4 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined5 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined6 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined7 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined8 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined9 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined10 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined11 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined12 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined13 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined15 src={Undefined} alt="Undefined" />}
            {isUndefined && <Undefined16 src={Undefined} alt="Undefined" />}
            {isHotpink && <HotpinkImage1 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage2 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage3 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage4 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage5 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage6 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage7 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage8 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage9 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage10 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage11 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage12 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage13 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage14 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage15 src={Hotpink} alt="Hotpink" />}
            {isHotpink && <HotpinkImage16 src={Hotpink} alt="Hotpink" />}
            {isBildschirmFlo && (
              <BildschirmFlo1 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo2 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo3 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo4 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo5 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo6 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo7 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo8 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo9 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo10 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo11 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo12 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo13 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo14 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo15 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            {isBildschirmFlo && (
              <BildschirmFlo16 src={BildschirmFlo} alt="bildschirmflo" />
            )}
            <ImageBejan src={Bejan} alt="bejan" />
            <ImageBorjan src={Borjan} alt="borjan" />
            <ImageFarah src={Farah} alt="farah" />
            <ImageFelix src={Felix} alt="felix" />
            <ImageFlo src={Flo} alt="flo" />
            <ImageGabi src={Gabi} alt="gabi" />
            <ImageHelena src={Helena} alt="helena" />
            <ImageJens src={Jens} alt="jens" />
            <ImageLukas src={Lukas} alt="lukas" />
            <ImageMatthias src={Matthias} alt="matthias" />
            <ImageOlliG src={OlliG} alt="olig" />
            <ImageOlliN src={OlliN} alt="helena" />
            <ImageSabrina src={Sabrina} alt="sabrina" />
            <ImageSacid src={Sacid} alt="sacid" />
            <ImageSharine src={Sharine} alt="sharine" />
            <ImageVika src={Vika} alt="vika" />
            <ComputerBejan src={Computer} alt="computer" />
            <ComputerBorjan src={Computer} alt="computer" />
            <ComputerFarah src={Computer} alt="computer" />
            <ComputerFelix src={Computer} alt="computer" />
            <ComputerFlo
              width="100"
              height="100"
              src={Computer}
              alt="computer"
            />
            <ComputerGabi src={Computer} alt="computer" />
            <ComputerHelena src={Computer} alt="computer" />
            <ComputerJens src={Computer} alt="computer" />
            <ComputerLukas src={Computer} alt="computer" />
            <ComputerMatthias src={Computer} alt="computer" />
            <ComputerOliG src={Computer} alt="computer" />
            <ComputerOliN src={Computer} alt="computer" />
            <ComputerSabrina src={Computer} alt="computer" />
            <ComputerSacid src={Computer} alt="computer" />
            <ComputerSharine src={Computer} alt="computer" />
            <ComputerVika src={Computer} alt="computer" />
            <SchooldeskBejan src={Table} alt="schooldesk" />
            <SchooldeskBorjan src={Table} alt="schooldesk" />
            <SchooldeskFarah src={Table} alt="schooldesk" />
            <SchooldeskFelix src={Table} alt="schooldesk" />
            <SchooldeskFlo src={Table} alt="schooldesk" />
            <SchooldeskGabi src={Table} alt="schooldesk" />
            <SchooldeskHelena src={Table} alt="schooldesk" />
            <SchooldeskJens src={Table} alt="schooldesk" />
            <SchooldeskLukas src={Table} alt="schooldesk" />
            <SchooldeskMatthias src={Table} alt="schooldesk" />
            <SchooldeskOliG src={Table} alt="schooldesk" />
            <SchooldeskOliN src={Table} alt="schooldesk" />
            <SchooldeskSabrina src={Table} alt="schooldesk" />
            <SchooldeskSacid src={Table} alt="schooldesk" />
            <SchooldeskSharine src={Table} alt="schooldesk" />
            <SchooldeskVika src={Table} alt="schooldesk" />
          </ImageSection>
        </main>
      )}
      <BadCoachSection>
        {isDeleted && <RavenImage src={Raven} alt="raven" />}
        <Zauberspruch>
          {actualSpell.map((element) => (
            <SpellSpace>"{element}"</SpellSpace>
          ))}
        </Zauberspruch>
        <Zauberstab
          src={MagicStick}
          alt="zauberstab"
          onClick={() => showSpells()}
        />
        {isFlame && <FireImage1 src={Fire} alt="Fire" />}
        {isFlame && <FireImage2 src={Fire} alt="Fire" />}
        <Witchimage src={Witch} alt="witch" />
      </BadCoachSection>
      <Footer>© by Florian Schmidbauer und Oliver Neuhäusler</Footer>
    </section>
  );
}

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background: hotpink;
`;

const Headline = styled.h1`
  grid-column: 1;
  color: ivory;
  padding: 1.2rem;
  text-align: center;
  text-shadow: 1px -2px 3px black;
`;

const SoundBox = styled.div`
  grid-column: 2;
  background: white;
  color: hotpink;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
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
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerBejan = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 1;
  grid-row: 1;
`;

const SchooldeskBejan = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 1;
  grid-row: 1;
`;

const ImageBorjan = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerBorjan = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 2;
  grid-row: 1;
`;

const SchooldeskBorjan = styled.img`
  grid-column: 2;
  width: 150px;
  height: 150px;
  grid-row: 1;
`;

const ImageFarah = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFarah = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 3;
  grid-row: 1;
`;

const SchooldeskFarah = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 3;
  grid-row: 1;
`;

const ImageFelix = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFelix = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 4;
  grid-row: 1;
`;

const SchooldeskFelix = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 4;
  grid-row: 1;
`;

const ImageFlo = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerFlo = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 5;
  grid-row: 1;
`;

const SchooldeskFlo = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 5;
  grid-row: 1;
`;

const ImageGabi = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerGabi = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 6;
  grid-row: 1;
`;

const SchooldeskGabi = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 6;
  grid-row: 1;
`;

const ImageHelena = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerHelena = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 7;
  grid-row: 1;
`;

const SchooldeskHelena = styled.img`
  grid-column: 7;
  width: 150px;
  height: 150px;
  grid-row: 1;
`;

const ImageJens = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerJens = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 8;
  grid-row: 1;
`;

const SchooldeskJens = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 8;
  grid-row: 1;
`;

const ImageLukas = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerLukas = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 1;
  grid-row: 2;
`;

const SchooldeskLukas = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 1;
  grid-row: 2;
`;

const ImageMatthias = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerMatthias = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 2;
  grid-row: 2;
`;

const SchooldeskMatthias = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 2;
  grid-row: 2;
`;

const ImageOlliG = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerOliG = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 3;
  grid-row: 2;
`;

const SchooldeskOliG = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 3;
  grid-row: 2;
`;

const ImageOlliN = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerOliN = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 4;
  grid-row: 2;
`;

const SchooldeskOliN = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 4;
  grid-row: 2;
`;

const ImageSabrina = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSabrina = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 5;
  grid-row: 2;
`;

const SchooldeskSabrina = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 5;
  grid-row: 2;
`;

const ImageSacid = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSacid = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 6;
  grid-row: 2;
`;

const SchooldeskSacid = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 6;
  grid-row: 2;
`;

const ImageSharine = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerSharine = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 7;
  grid-row: 2;
`;

const SchooldeskSharine = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 7;
  grid-row: 2;
`;

const ImageVika = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 10;
  border-radius: 0.5rem;
`;

const ComputerVika = styled.img`
  transform: translate(0rem, -6rem);
  width: 100px;
  height: 100px;
  grid-column: 8;
  grid-row: 2;
`;

const SchooldeskVika = styled.img`
  width: 150px;
  height: 150px;
  grid-column: 8;
  grid-row: 2;
`;

const BildschirmFlo1 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo2 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo3 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo4 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo5 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo6 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo7 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo8 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo9 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo10 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo11 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo12 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo13 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo14 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo15 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BildschirmFlo16 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined1 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined2 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined3 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined4 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined5 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined6 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined7 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined8 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined9 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined10 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined11 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined12 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined13 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined15 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Undefined16 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon1 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon2 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon3 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon4 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon5 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon6 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon7 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon8 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon9 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon10 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon11 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon12 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon13 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon14 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon15 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Pokemon16 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream1 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream2 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream3 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream4 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream5 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream6 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream7 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream8 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream9 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream10 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream11 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream12 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream13 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream14 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream15 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Scream16 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage1 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage2 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage3 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage4 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage5 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage6 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage7 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage8 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage9 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 1;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage10 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 2;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage11 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 3;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage12 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage13 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage14 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 6;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage15 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 7;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const HotpinkImage16 = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 8;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const SetfireImage = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 4;
  grid-row: 2;
  z-index: 20;
  border-radius: 0.5rem;
`;

const FootballImage = styled.img`
  transform: translate(0rem, -6.65rem);
  width: 80px;
  height: 65px;
  grid-column: 5;
  grid-row: 1;
  z-index: 20;
  border-radius: 0.5rem;
`;

const BadCoachSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  padding: 100px 3rem 50px;
  margin-top: -5rem;
`;

const Zauberspruch = styled.article`
position: relative;
display: flex;
justify-content: center;
align-items: center;
grid-column: 1;
border: 0.2rem groove darkviolet;
border-radius: 1rem;
background: ivory;
text-align: center;
font-family: fantasy;
font-weight: bold;
width: 30rem;
height: 7rem;
}
`;

const SpellSpace = styled.p`
  font-size: 1rem;
`;

const Witchimage = styled.img`
  position: relative;
  grid-column: 3;
  border: 0.2rem groove darkviolet;
  border-radius: 3rem;
  width: 60%;
  height: 12rem;
`;

const FireImage1 = styled.img`
  position: absolute;
  right: 7rem;
  bottom: 1rem;
  z-index: 20;
  border-radius: 0.5rem;
`;

const FireImage2 = styled.img`
  position: absolute;
  right: 15.5rem;
  bottom: 1rem;
  z-index: 20;
  border-radius: 0.5rem;
`;

const RavenImage = styled.img`
  position: absolute;
  left: 31rem;
  top: 8rem;
  z-index: 20;
  border-radius: 0.5rem;
`;

const Zauberstab = styled.img`
  grid-column: 2;
  width: 200px;
  height: 200px;
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
