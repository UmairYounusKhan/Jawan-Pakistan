import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar.jsx';
import Introduction from './Introduction/Introduction.jsx';
import Firstimg from './assets/Logos/firstimg.png';
import Secondimg from './assets/Logos/secondimg.png';
import Founder from './Founder/Founder.jsx';
import Training from './Training/Training.jsx';
import Session from './Session/Session.jsx';
import Footer from './Footer/Footer.jsx';
import Form from './Form/Form.jsx';

const missionParagraphs = [
  "Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.",
  "Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy."
];

const App = () => {
  return (
    <div>
      <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <ResponsiveAppBar />

      </div>
      {/*  */}
      <div style={{ borderRight: '0', borderLeft: '0', borderTop: '0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
<div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Introduction 
          label="Introduction To Jawan Pakistan" 
          para="The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth." 
          image={<img style={{ width: '100%' }} src={Firstimg} alt="First Logo" />}
        />
        <Introduction 
          label="Mission And Vision Behind Jawan Pakistan" 
          paragraphs={missionParagraphs}
          image={<img style={{ width: '100%' }} src={Secondimg} alt="Second Logo" />}
          reverse
        />
        
        </div>
      </div>
      {/*  */}
      <div style={{ borderRight: '0', borderLeft: '0', borderTop: '0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
      <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Founder />
        
        </div>
      </div>
      {/*  */}
      <div style={{ borderRight: '0', borderLeft: '0', borderTop: '0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
<div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Training />
        
        </div>
      </div>
      {/*  */}
      <div style={{ borderRight: '0', borderLeft: '0', borderTop: '0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
<div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Session />
        
        </div>
      </div>
      {/*  */}
      <div style={{ borderRight: '0', borderLeft: '0', borderTop: '0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
      <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Form/>
        </div>
      </div>

      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
