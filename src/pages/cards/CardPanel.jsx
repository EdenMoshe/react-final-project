import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, Fragment, useEffect } from "react";
// import { cloneDeep } from "lodash";
import BusinessCard from "../cards/BusinessCard";
import CardEditBiz from "../cards/CardEditBiz";
import "./cardPanel.css";

import axios from "axios";

const CardPanel = () => {
  const history = useHistory();
  const userInfoRedux = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get("/cards/allCards").then((dataFromServer) => {
        console.log("data from nodeJs server:", dataFromServer.data);
        console.log("user data ", userInfoRedux);
        setCardsArr(dataFromServer.data);
      });

      /*  */
    }, 1000);
  }, []);

  useEffect(() => {
    if (cardsArr.length > 0) {
      setLoaded(true);
    }
  }, [cardsArr]);

  const handleDeleteCard = (id) => {
    //!cardsArr = cardsArr.filter((item) => item.id != id);

    let newCardsArr = cardsArr.filter((item) => item._id != id);
    console.log("New card arr", newCardsArr);
    setCardsArr(newCardsArr);

    axios.delete("/cards/" + id).then(() => {
      console.log("data from nodeJs server: deleted successfully");
    });
  };

  const handleEditCard = (id) => {
    console.log(id);
    let newCard = cardsArr.find((item) => {
      return item._id == id;
    });
    console.log("new card", newCard);
    if (newCard) {
      setSelectedCard({ ...newCard });
    }
  };

  const handleUpdateCard = (name, desc, phone, address, id) => {
    let newCardArr = cardsArr.map((item) => {
      return { ...item };
    });
    let newCard = newCardArr.find((item) => {
      return item._id === id;
    });

    newCard.name = name;
    newCard.description = desc;
    newCard.phone = phone;
    newCard.address = address;
    setCardsArr(newCardArr);
    setSelectedCard(null);

    axios.put("/cards/" + id, newCard).then(() => {
      console.log("data from nodeJs server: updated successfully");
    });
  };

  // const handleInfoCard = (id) => {
  //   history.push(`/card/${id}`);
  // };

  return (
    <Fragment>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {!loaded && <h1>loading...</h1>}
        {console.log(cardsArr)}
        {cardsArr.map((item) => {
          return (
            <BusinessCard
              key={item._id}
              id={item._id}
              name={item.name}
              desc={item.description}
              phone={item.phone}
              address={item.address}
              image={item.image}
              userIdCard={item.userID}
              LoggedInUserData={userInfoRedux}
              onDeleteCard={handleDeleteCard}
              onEditCard={handleEditCard}
            ></BusinessCard>
          );
        })}
      </div>
      {selectedCard !== null && (
        <CardEditBiz
          id={selectedCard._id}
          name={selectedCard.name}
          desc={selectedCard.description}
          phone={selectedCard.phone}
          address={selectedCard.address}
          onUpdateCard={handleUpdateCard}
        ></CardEditBiz>
      )}
    </Fragment>
  );
};

export default CardPanel;
