<template>
  <div id="app">
    <header>
      <h1>Welcome to SkillTracker</h1>
      <button style="border: 2px solid white;margin: 10px;" class="add-button" @click="toggleGoalForm">Add New Goal</button>
    </header>
    <main>
      <section class="goals-section">
        <h2>Your Learning Goals</h2>
        <ul>
          <li v-for="goal in goals" :key="goal.id">
            {{ goal.title }}
            <button class="remove-button" @click="removeGoal(goal.id)">Remove</button>
          </li>
        </ul>
        <div v-if="showGoalForm" class="goal-form">
          <input v-model="newGoal" @keyup.enter="addGoal" placeholder="Add a new goal">
          <button class="add-button" @click="addGoal">Add</button>
        </div>
      </section>
      <section class="progress-section">
        <h2>Your Progress</h2>
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <p>{{ Math.round(progress) }}%</p>
      </section>
    </main>
    <p style="float:right; font-size: small;" class="note">Note: Proof of Concept - Initial Stage.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        { id: 1, title: 'Learn HTML', completed: false },
        { id: 2, title: 'Learn CSS', completed: true },
        { id: 3, title: 'Learn Vue 3', completed: false }
      ],
      newGoal: '',
      showGoalForm: false
    };
  },
  computed: {
    progress() {
      const completedGoals = this.goals.filter(goal => goal.completed);
      return (completedGoals.length / this.goals.length) * 100;
    }
  },
  methods: {
    toggleGoalForm() {
      this.showGoalForm = !this.showGoalForm;
    },
    addGoal() {
      if (this.newGoal.trim() !== '') {
        const newId = this.goals.length + 1;
        this.goals.push({ id: newId, title: this.newGoal, completed: false });
        this.newGoal = '';
        this.toggleGoalForm();
      }
    },
    removeGoal(goalId) {
      const index = this.goals.findIndex(goal => goal.id === goalId);
      if (index !== -1) {
        this.goals.splice(index, 1);
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

#app {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 800px;
  margin: 0 auto;
}

header {
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

h1 {
  margin: 0;
  font-size: 24px;
}

main {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

section {
  width: 45%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  margin-bottom: 5px;
}

.progress-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-container {
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #3498db;
  border-radius: 10px;
  transition: width 0.5s;
  text-align: center;
  line-height: 20px;
  color: #fff;
}

p {
  font-size: 20px;
  margin-top: 10px;
}

/* Styles for buttons */
.add-button, .remove-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.add-button:hover, .remove-button:hover {
  background-color: #2980b9;
}

.add-button:focus, .remove-button:focus {
  outline: none;
}
</style>
