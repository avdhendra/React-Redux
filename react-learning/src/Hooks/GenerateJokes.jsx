import { useEffect, useState } from "react";

export default function GenerateJokes(firstname, lastname) {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const fetchJoke = async () => {
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });
    };
    fetchJoke();
  }, [firstname, lastname]);
  return joke;
}
