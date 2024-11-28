import React, { useState } from "react";
import HabitList from "./HabitList";
import AddHabitForm from "./AddHabitForm";

function App() {
  const [habits, setHabits] = useState([]);

  // Function to handle adding a new habit
  const handleAddHabit = (habitName) => {
    const newHabit = { id: Date.now(), name: habitName, completed: false };
    setHabits([...habits, newHabit]);
  };

  // Function to toggle the completion status of a habit
  const handleToggleHabit = (habitId) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  // Function to delete a habit
  const handleDeleteHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm handleAddHabit={handleAddHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={handleToggleHabit}
        onDeleteHabit={handleDeleteHabit}
      />
    </div>
  );
}

export default App;
