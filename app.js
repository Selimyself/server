import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data); 
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <p>Aucune tâche trouvée.</p>;
    }

    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Liste des tâches</h1>
      {renderTasks()}
    </div>
  );
}

export default App;
