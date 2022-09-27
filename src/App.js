import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';



function App() {
  const apiKey = '4016c185-1b60-4504-9409-fea47273baf6';

  const images = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6
  }

  const [randomUser, setRandomUser] = useState([1, 1]);
  const [randomComp, setRandomComp] = useState([1, 1]);
  const [modal, setModal] = useState(null);
  const [play, setPlay] = useState(false);



  useEffect(() => {
    axios.post('https://api.random.org/json-rpc/4/invoke', {
      method: 'generateIntegers',
      jsonrpc: "2.0",
      params: {
        apiKey: apiKey,
        n: 2,
        min: 1,
        max: 6
      },
      id: 1
    })
      .then((response) => {
        play && setRandomUser(response.data.result.random.data);
        play && setModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [play]);

  useEffect(() => {
    axios.post('https://api.random.org/json-rpc/4/invoke', {
      method: 'generateIntegers',
      jsonrpc: "2.0",
      params: {
        apiKey: apiKey,
        n: 2,
        min: 1,
        max: 6
      },
      id: 1
    })
      .then((response) => {
        play && setRandomComp(response.data.result.random.data);
        play && setModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [play]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="user__field">
          <h3>Ваше поле</h3>
          <div>
            <div className="choise">
              <img src={images[randomUser[0]]} alt="cubes" />
            </div>
            <div className="choise">
              <img src={images[randomUser[1]]} alt="cubes" />
            </div>
          </div>
          <button onClick={() => setPlay(true)}>Зробити кидок</button>
        </div>
        <div className="comp__field">
          <h3>Поле комп'ютера</h3>
          <div>
            <div className="choise">
              <img src={images[randomComp[0]]} alt="cubes" />
            </div>
            <div className="choise">
              <img src={images[randomComp[1]]} alt="cubes" />
            </div>
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} randomUser={randomUser} randomComp={randomComp} />
    </div>
  );
}

export default App;
