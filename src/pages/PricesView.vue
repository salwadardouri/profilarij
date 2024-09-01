<template>
    <div>
      <h1 class="text-center text-3xl font-bold mb-4">Liste des Prix</h1>
      
      <!-- Tableau des prix -->
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fréquence de Paiement</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="price in prices" :key="price.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ price.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ price.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ price.price }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ price.payment_frequency }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button @click="editPrice(price.id)" class="text-blue-500 hover:text-blue-700">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!-- Formulaire de modification -->
      <div v-if="showForm" class="mt-8 p-4 border border-gray-300 rounded">
        <h2 class="text-xl font-bold mb-4">Modifier le Prix</h2>
        <form @submit.prevent="updatePrice">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input v-model="form.name" id="name" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-700">Prix</label>
            <input v-model="form.price" id="price" type="number" step="0.01" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
          </div>
          <div class="mb-4">
            <label for="payment_frequency" class="block text-sm font-medium text-gray-700">Fréquence de Paiement</label>
            <input v-model="form.payment_frequency" id="payment_frequency" type="text" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required />
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sauvegarder</button>
            <button @click="cancelEdit" type="button" class="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "PricingComp",
    data() {
      return {
        prices: [],
        showForm: false,
        form: {
          id: null,
          name: '',
          price: '',
          payment_frequency: ''
        }
      };
    },
    mounted() {
      this.fetchPrices();
    },
    methods: {
      async fetchPrices() {
        try {
          const response = await axios.get('http://localhost:5000/prices');
          this.prices = response.data;
        } catch (error) {
          console.error('Error fetching prices:', error);
        }
      },
      async editPrice(id) {
        try {
          const response = await axios.get(`http://localhost:5000/prices/${id}`);
          this.form = response.data;
          this.showForm = true;
        } catch (error) {
          console.error('Error fetching price details:', error);
        }
      },
      async updatePrice() {
        try {
          await axios.put(`http://localhost:5000/prices/${this.form.id}`, this.form);
          this.fetchPrices(); // Refresh the list
          this.cancelEdit(); // Hide the form
        } catch (error) {
          console.error('Error updating price:', error);
        }
      },
      cancelEdit() {
        this.showForm = false;
        this.form = { id: null, name: '', price: '', payment_frequency: '' };
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez votre style ici, si nécessaire */
  </style>
  