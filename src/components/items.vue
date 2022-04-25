<template>
    <div class="container p-4">
           
      <div v-for="(item) in items" :key="item.id" class="p-2">
            <div class="card col " >
            <img style="width: 50%;" v-bind:src=item.photo class="card-img m-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>

                <button class="btn btn-success px-5 mx-5 " style="background-color:#1B5E20" v-on:click="deleteItem(item.id)">Delete</button> 
                <router-link class="btn btn-success px-5 mx-5" style="background-color:#1B5E20" :to="`/details/${item.id}`">see more</router-link>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:'itemsComp',

        data() {
            return {
                items: [],
            };
        },

        created() {
            this.getItems();
        },
         methods: {
             getItems() {
                 axios.get("Starbucks").then((res) => {
                    console.log(res.data);
                    this.items = res.data;
                 })
                .catch((err) => {
                    console.log(err);
                });
             },
             deleteItem(id)
             {
                 axios.delete("Starbucks/"+id).then(()=>{
                     alert("Done");
                     this.getItems();
                     //this.items.splice(id,1);
                })
                .catch((err) => {
                    console.log(err);
                });
            },
    }
};
</script>

<style scoped>

</style>