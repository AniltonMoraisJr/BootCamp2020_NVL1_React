import React, { useCallback, useEffect, useState } from "react";
import api from "./services/api";

import {
  addNewRepository,
  listRepositories,
} from "./services/repositoryService";
import "./styles.css";

function App() {
  const [repositoriesList, setRepositoriesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get("/repositories");
        setRepositoriesList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Methods

  async function handleAddRepository() {
    try {
      const body = {
        url: "https://github.com/josepholiveira",
        title: "Desafio ReactJS",
        techs: ["React", "Node.js"],
      };
      await api.post("/repositories", body);
      setRepositoriesList([...repositoriesList, body]);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRemoveRepository = useCallback(async (id) => {
    try {
      await api.delete(`/repositories/${id}`);
      setRepositoriesList(repositoriesList.filter((repo) => repo.id !== id));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <ul data-testid="repository-list">
        {repositoriesList.map((data) => (
          <li key={data.id}>
            <span>{data.title}</span>
            <button onClick={() => handleRemoveRepository(data.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
