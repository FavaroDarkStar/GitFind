import { useState } from "react"
import { Header } from "../../components/Header"
import ItemList from "../../components/ItemList"
import background from "../../assets/background.png"
import './styles.css'

function App() {

  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${username}`)
    const newUser = await userData.json();
    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${username}/repos`)
      const newRepos = await reposData.json();
      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />

      <div className="content">
        <img src={background} className="background" alt="logo do github como imagem de background da tela" />
        <div className="info">
          <div>
            <input name="username" placeholder="@username" value={username} onChange={event => setUsername(event.target.value)} />
            <button onClick={handleGetData}>Search</button>
          </div>

          {currentUser?.name ? (
            <>
            <div className="profile">
              <img src={currentUser.avatar_url} className="profilePicture" alt="imagem de perfil do usuário no github"/>
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{ currentUser.bio }</p>
              </div>
            </div>
            <hr />
            </>
          ) : console.log(null)}

          {repos?.length ? (
            
            <div>
                <h4 className="repositories">Repositories</h4>
                {repos.map(repo => (
                  <ItemList tittle={repo.name} description={repo.description}/>
                ))}

            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
