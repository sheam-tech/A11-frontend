import { useEffect, useState } from "react";

const useItems = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://boiling-lake-18195.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems]
}

export default useItems;