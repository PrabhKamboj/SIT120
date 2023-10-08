<!-- App.vue -->

<template>
  <div>
    <!-- 1. Template Syntax -->
    <h2 class="section-heading">1. Template Syntax</h2>
    <h1>{{ message }}</h1>
    
    <!-- 1b. Raw HTML [v-html] -->
    <h2 class="section-heading">1b. Raw HTML [v-html]</h2>
    <p v-html="rawHtml"></p>
    
    <!-- 1c. Attribute Bindings [v-bind:id] -->
    <h2 class="section-heading">1c. Attribute Bindings [v-bind:id]</h2>
    <div :id="divId">{{ attributeText }}</div>
    
    <!-- 1d. JavaScript expressions inside syntax i.e.{{ }} -->
    <h2 class="section-heading">1d. JavaScript expressions inside syntax</h2>
    <p>{{ calculateSum(2, 3) }}</p>
    
    <!-- 2. Methods -->
    <h2 class="section-heading">2. Methods</h2>
    <button @click="changeMessage">Change Message</button>
    
    <!-- 3. Reactivity Fundamentals [ref(), <script setup>] -->
    
    <!-- 4. Computed Properties -->
    <h2 class="section-heading">4. Computed Properties</h2>
    <div :class="{'active': isActive}" :style="{'color': textColor}" class="styled-element">Styled Element</div>
    
    <!-- 5. Class and Style Bindings -->
    
    <!-- 5a. Binding HTML class [v-bind:class] -->
    <h2 class="section-heading">5a. Binding HTML class [v-bind:class]</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    
    <!-- 5b. Binding Inline Styles [v-bind:style] -->
    <h2 class="section-heading">5b. Binding Inline Styles [v-bind:style]</h2>
    <ul>
      <li v-for="n in 5" :key="n" :style="{ 'font-size': n + 'rem' }">Number: {{ n }}</li>
    </ul>
    
    <!-- 6. List Rendering -->
    
    <!-- 6a. v-for with an Object -->
    <h2 class="section-heading">6a. v-for with an Object</h2>
    <ul>
      <li v-for="(value, key) in objectData" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    
    <!-- 6b. v-for with a Range -->
    <h2 class="section-heading">6b. v-for with a Range</h2>
    <ul>
      <li v-for="n in 5" :key="n">Number: {{ n }}</li>
    </ul>
    
    <!-- 6c. v-for on <template> -->
    <h2 class="section-heading">6c. v-for on &lt;template&gt;</h2>
    <template v-for="(item, index) in items" :key="index">
      <p>{{ item }}</p>
      <p v-if="index % 2 === 0">Even Index</p>
    </template>
    
    <!-- 6d. v-for with v-if -->
    <h2 class="section-heading">6d. v-for with v-if</h2>
    <div v-for="item in itemsWithCondition" :key="item.id">
      <p>{{ item.name }}</p>
      <button @click="deleteItem(item.id)">Delete</button>
    </div>
    
    <!-- 7. Event Handling: Listening to Events [v-on:click] -->
    
    <!-- 7a. Inline Handlers -->
    <h2 class="section-heading">7a. Inline Handlers</h2>
    <button @click="incrementCount">Increment Count</button>
    
    <!-- 7b. Method Handlers -->
    <h2 class="section-heading">7b. Method Handlers</h2>
    <p>Count: {{ count }}</p>
    
    <!-- 8. Form Input Bindings -->
    
    <!-- 8a. v-model with <input type="text">, <input type="checkbox">, <input type="radio">, <select> and <textarea> -->
    <h2 class="section-heading">8a. v-model with Form Inputs</h2>
    <input type="text" v-model="inputText" />
    <input type="checkbox" v-model="isChecked" />
    <input type="radio" v-model="selectedRadio" :value="1" />
    <input type="radio" v-model="selectedRadio" :value="2" />
    <select v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <textarea v-model="textareaValue"></textarea>
    
    <!-- 8b. v-model modifiers [.lazy , .number, .trim] -->
    <h2 class="section-heading">8b. v-model modifiers</h2>
    <input type="text" v-model.lazy="lazyInput" />
    <input type="text" v-model.number="numberInput" />
    <input type="text" v-model.trim="trimmedInput" />
    
   
    <!-- 9. Watchers -->
    <h2 class="section-heading">9. Watchers</h2>
    <input type="text" v-model="watchInput" />

    <!-- 10. Components -->
    <h2 class="section-heading">10. Components</h2>
    <my-component :prop-value="componentProp" @custom-event="handleCustomEvent">
      <!-- 10c. Slots -->
      <template #default>
        <p>This is a slot content</p>
      </template>
    </my-component>

    <!-- 11. Router (Assuming you have Vue Router configured) -->
    <h2 class="section-heading">11. Router</h2>
    <router-link to="/route">Go to Route</router-link>
    <router-view></router-view>
  </div>
</template>

<script>// eslint-disable-next-line
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    const rawHtml = ref('<strong>Raw HTML</strong>');
    const divId = ref('unique-div');
    const attributeText = ref('This is a bound attribute');
    const isActive = ref(true);
    const textColor = ref('blue');
    const items = ref(['Item 1', 'Item 2', 'Item 3']);
    const inputText = ref('');
    const isChecked = ref(false);
    const selectedRadio = ref(1);
    const selectedOption = ref('option1');
    const textareaValue = ref('');
    const lazyInput = ref('');
    const numberInput = ref(0);
    const trimmedInput = ref('');
    const count = ref(0);
    const watchInput = ref('');
    // 10a. Props
    const componentProp = ref('Prop Value');

    // 10b. Events ($emit)
    const handleCustomEvent = (payload) => {
      console.log('Custom event received with payload:', payload);
    };


    const calculateSum = (a, b) => a + b;

    const changeMessage = () => {
      message.value = 'Message changed!';
    };

    const deleteItem = (id) => {
      items.value = items.value.filter(item => item.id !== id);
    };

    const incrementCount = () => {
      count.value++;
    };

    watch(watchInput, (newValue, oldValue) => {
      console.log(`Watch input changed from ${oldValue} to ${newValue}`);
    });

    return {
      message,
      rawHtml,
      divId,
      attributeText,
      calculateSum,
      isActive,
      textColor,
      items,
      changeMessage,
      deleteItem,
      inputText,
      isChecked,
      selectedRadio,
      selectedOption,
      textareaValue,
      lazyInput,
      numberInput,
      trimmedInput,
      count,
      incrementCount,
      watchInput,
      componentProp,
      handleCustomEvent,
    };
  },
};
</script>

<style>
.section-heading {
  background-color: #f0f0f0;
  padding: 10px;
  margin: 10px 0;
  font-size: 1.2rem;
  border-radius: 5px;
}

.styled-element {
  border: 1px solid #0078d4;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
  color: #0078d4;
}
</style>
