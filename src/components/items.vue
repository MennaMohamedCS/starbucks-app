<template>
    <div class="container p-4">
           
      <div v-for="(item) in items" :key="item.id" class="p-2">
            <div class="card col " >
            <img style="width: 50%;" v-bind:src=item.photo class="card-img m-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <h3 class="card-title">{{item.price}} $</h3>
                <h3 class="card-title">{{quantityCart}}
                    <img src="../assets/icons8-add-30.png" alt="Add" class="px-2" v-on:click="additem(item.id)">
                </h3> 

                <button class="btn btn-success px-5 mx-5 " style="background-color:#1B5E20" v-on:click="createItem(item.id)">Add to cart</button> 
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
                quantityCart:1,
                total:0,
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

            createItem(id) { 
                const index=id-1;
                if(this.total===0)
                    this.total=this.items[index].price;
                axios.post("Cart", {
                    name: this.items[index].name,
                    description: this.items[index].description,
                    price: this.items[index].price,
                    photo: this.items[index].photo,
                    idProduct:id,
                    quantity:this.quantityCart,
                    total:this.total,

                }).then((res) => {
                    console.log(res.data);
                    alert("Done Add");
                }).catch((err) => {
                    console.log(err);
                });
                this.quantityCart=1;
                this.total=0;
            },

            additem(id) { 
                this.quantityCart++;
                this.total=this.quantityCart * (this.items[id-1].price)
                //console.log(this.total);
            },

    }
};
</script>

<style scoped>

</style>