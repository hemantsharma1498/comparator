import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header name="Sample name"/>
      <body>
        <Feed/>        
      </body>
      <Footer/>
    </div>
  );
}

export default App;
