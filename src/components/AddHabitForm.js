import React, { useState } from "react";

export default function AddHabitForm({ handleAddHabit }) {
  const [habitName, setHabitName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      handleAddHabit(habitName);
      setHabitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a new habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}
