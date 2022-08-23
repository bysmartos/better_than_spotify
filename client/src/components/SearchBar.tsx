import React, { useState } from "react";
import { IonPage, IonSearchbar } from "@ionic/react";

export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        placeholder="Search music"
        style={{
          width: "50%",
          minWidth: "30rem",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          marginTop: "1.5rem",
          color: "#AFFB0D",
        }}
      ></IonSearchbar>
    </IonPage>
  );
};
