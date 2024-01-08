import { Header } from "../../components/Header"
import ItemList from "../../components/ItemList"
import background from "../../assets/background.png"
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <img src={background} className="background" alt="logo do github como imagem de background da tela" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username" />
            <button>Search</button>
          </div>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/106363360?v=4" className="profilePicture" alt="imagem de perfil do usuário no github"/>
            <div>
              <h3>Favaro</h3>
              <span>@FavaroDarkStar</span>
              <p> description </p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositories">Repositories</h4>
            <ItemList tittle="titulo" description="descrição"/>
            <ItemList tittle="titulo" description="descrição"/>
            <ItemList tittle="titulo" description="descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
