import React from 'react';
import Chart from './Chart';

function Dashboard({ habits }) {
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const totalHabits = habits.length;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>
        Completed Habits: {completedHabits} / {totalHabits}
      </p>
      <Chart habits={habits} />
    </div>
  );
}

export default Dashboard;
