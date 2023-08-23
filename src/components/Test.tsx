import { useState, useEffect } from "react";
import { db } from "../config/firebase";

const getDocs = () => {
  return db.collection("products").getDocs();
};

const onSnapshot = (snapshot: any) => {
  console.log(snapshot.docs);
};

const Test = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = getDocs().onSnapshot(onSnapshot);
    return unsubscribe;
  }, []);

  return (
    <div>
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>{doc.data().name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
