import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Clients from '../src/components/Clients';

import imgClient1 from '../src/assets/img/clients/client-1.png';
import imgClient2 from '../src/assets/img/clients/client-2.png';
import imgClient3 from '../src/assets/img/clients/client-3.png';
import imgClient4 from '../src/assets/img/clients/client-4.png';
import imgClient5 from '../src/assets/img/clients/client-5.png';
import imgClient6 from '../src/assets/img/clients/client-6.png';
import AboutAs from '../src/components/AboutAs';
import Counts from '../src/components/Counts';


export default function Home() {

  const imgClients = [
    imgClient1,
    imgClient2,
    imgClient3,
    imgClient4,
    imgClient5,
    imgClient6
  ];

  //Todo text to html
  const dataCounts = [
    {pureCounter: 65, iconClass: "bi bi-emoji-smile",
      text: "<strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut."},

    {pureCounter: 85, iconClass: "bi bi-journal-richtext",
      text: "<strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan"},

    {pureCounter: 18, iconClass: "bi bi-clock",
      text: "<strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptatenon vel"},

    {pureCounter: 15, iconClass: "bi bi-award",
      text: "<strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"},
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <Clients imgs={imgClients}/>
        <AboutAs />
        <Counts data={dataCounts}/>
      </main>
    </div>
  );
}
