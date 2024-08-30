import React, { useState, useEffect } from 'react';
import HabitForm from '../components/HabitForm';
import Habit from '../components/Habit';
import Dashboard from '../components/Dashboard';

function HabitPage() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  const notifyUser = (message) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Habit Tracker Reminder', { body: message });
    }
  };

  const addHabit = (name) => {
    setHabits([...habits, { id: Date.now(), name, completed: false }]);
    notifyUser(`New habit added: ${name}`);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="habit-page">
      <h2>Your Habits</h2>
      <HabitForm onAdd={addHabit} />
      <div className="habit-list">
        {habits.map(habit => (
          <Habit key={habit.id} habit={habit} onToggle={toggleHabit} onDelete={deleteHabit} />
        ))}
      </div>
      <Dashboard habits={habits} />
    </div>
  );
}

export default HabitPage;
