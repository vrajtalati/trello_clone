
import './App.css';
import Header from './componenets/Header';
import Card from './componenets/Card';
import CardBox from './componenets/CardBox';
import CardWithoutImage from './componenets/CardWithoutImage';

function App() {
  return (
    <div className="">
          <Header/>
          <div className="overflow-x-auto">
  <div className="flex flex-row space-x-2">
    <CardBox />
    <CardBox />
    <CardBox />
    <CardBox />
    
    {/* Add more CardBox components as needed */}
  </div>
</div>
         
          
     </div>
  );
}

export default App;
