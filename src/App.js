//import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Table from './images/school-desk-flat.svg';
import MagicStick from './images/zauberstab.png';
import MiriamHanle from './images/MiriamHanle.jpg';

export default function App() {
  return (
    <section>
      <Header>
        <h1>Thank you Coach Miriam</h1>
      </Header>
      <main>
        <Students>
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
          <img width="50" height="50" src={Table} alt="schooldesk" />
        </Students>
        <BadCoachSection>
          <p>"Wir sind nicht hier um nen Designwettbewerb zu gewinnen!!"</p>
          <Zauberstab
            width="100"
            height="100"
            src={MagicStick}
            alt="zauberstag"
          />
          <img width="100" height="100" src={MiriamHanle} alt="zauberstag" />
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

const Students = styled.section`
  display: grid;
  row-gap: 2.5rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 4rem 1rem;
  place-items: center;
`;

const BadCoachSection = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;

  p {
    border: 2px groove hotpink;
    border-radius: 1rem;
    background: ivory;
    padding: 1rem;
    text-align: center;
    font-family: fantasy;
    font-weight: bold;
  }
`;

const Zauberstab = styled.img`
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
