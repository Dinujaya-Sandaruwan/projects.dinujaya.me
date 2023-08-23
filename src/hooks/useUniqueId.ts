import { useState } from "react";

const useUniqueId = () => {
  const [id, setId] = useState("");
  const generateId = () => {
    const date = new Date();
    const timestamp = date.getTime();
    const randomNumber = Math.floor(Math.random() * 100000);
    return `${timestamp}-${randomNumber}`;
  };

  if (!id) {
    setId(generateId());
  }

  return id;
};

export default useUniqueId;
