
import './App.css';
import Header from './componenets/Header';
import Card from './componenets/Card';
import CardBox from './componenets/cardbox/CardBox';
import CardWithoutImage from './componenets/CardWithoutImage';
import CardBox1 from './componenets/cardbox/CardBox1';
import CardBox2 from './componenets/cardbox/CardBox2';
import CardBox3 from './componenets/cardbox/CardBox3';
import CardBox4 from './componenets/cardbox/CardBox4';

function App() {
  return (
    <div className="">
          <Header/>
  <div className="flex-nowrap overflow-x-scroll ">
  <div className=" ml-4 flex flex-row space-x-2">
    <CardBox />
    <CardBox1 />
    <CardBox2 />
    <CardBox3 />
    <CardBox4 />
   
    
   
  </div>
</div>
         
          
     </div>
  );
}

export default App;
