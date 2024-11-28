import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
      />
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}
