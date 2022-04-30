<template>
    <div class="container p-5">
        <form @submit.prevent="createItem" class="row g-3">
            <div class="col-md-6">
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="form-control" id="Name" v-model="name">
            </div>
            <div class="col-md-6">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" v-model="description">
            </div>

            <div class="col-md-6">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="quantity" v-model="quantity">
            </div>
            <div class="col-md-6">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" v-model="price">
            </div>
            <div class="col-12">
                <label for="photo" class="form-label">Photo (URL)</label>
                <input type="text" class="form-control" id="photo" placeholder="https://" v-model="photo">
            </div>

            <div class="col-6">
                <button type="submit" class="btn btn-success px-5 " style="background-color:#1B5E20">Add</button>
            </div>
            <div class="col-6">
                <button class="btn btn-success px-5 " style="background-color:#1B5E20" @click.prevent="back">go back</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:"creatComp",
        data() {
            return {
                name: "",
                description: "",
                photo: "",
                quantity:0,
                price :0,
            };
         },
         methods: {
            createItem() { 
            axios.post("Starbucks", {
            name: this.name,
            description: this.description,
            quantity: this.description,
            price: this.price,
            photo: this.photo
             }).then((res) => {
                 console.log(res.data);
                 document.getElementsByTagName("input").innerHTML="";
                 alert("Done");
            }).catch((err) => {
            console.log(err);
            });
            },

         back(){
            this.$router.push('/home')
         }
  },
        
    }
</script>

<style scoped>

</style>