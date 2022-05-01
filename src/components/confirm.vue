<template>
    <div class="card container m-5 p-5" style="width: 100%;">
        <div class="card-body">
            <h3 class="card-title">Total :
                 <h5 class="card-text d-inline"> {{this.total}} </h5>
            </h3>
        </div>

        <ul class="list-group list-group-flush" v-for="(item) in itemsCart" :key="item.id" >
            <li class="list-group-item">Name: {{item.name}} ({{item.quantity}} items)</li>
        </ul>
    </div>

</template>

<script>
    import axios from "axios";
    export default {
        name:'confirmComp',

                data() {
            return {
                itemsCart: [],
                items: [],
                total:0,
            };
        },

        created() {
            this.getItems();
        },
         methods: {
             async getItems() {
                await axios.get("Starbucks").then((res) => {
                    console.log(res.data);
                    this.items = res.data;
                 })
                .catch((err) => {
                    console.log(err);
                });
                 
                await axios.get("Cart").then((res) => {
                    console.log(res.data);
                    this.itemsCart = res.data;
                 })
                .catch((err) => {
                    console.log(err);
                });

                for(let i=0 ;i< this.itemsCart.length ;i++)
                {
                    //let updateQuantity=0;
                    //if(this.items[this.itemsCart[i].idProduct-1].quantity >= this.itemsCart[i].quantity)
                    //updateQuantity=this.items[this.itemsCart[i].idProduct-1].quantity - this.itemsCart[i].quantity;
                   
                   /* else{
                        updateQuantity=0;
                            this.itemsCart[i].quantity=this.items[this.itemsCart[i].idProduct-1].quantity;
                            this.itemsCart[i].total = this.items[this.itemsCart[i].idProduct-1].quantity*this.itemsCart[i].price;     
                       }*/
                    await axios.put("/Starbucks/"+this.itemsCart[i].idProduct,{
                        
                        name: this.itemsCart[i].name ,
                        description: this.itemsCart[i].description,
                        photo: this.itemsCart[i].photo,
                        quantity: this.items[this.itemsCart[i].idProduct-1].quantity - this.itemsCart[i].quantity,
                        price: this.itemsCart[i].price,
                    }).then(()=>console.log("Done Update"))
                    .catch(()=>console.log("err"));

                    await axios.delete("Cart/"+this.itemsCart[i].id).then(()=>{
                     console.log("Done");
                    })
                     .catch((err) => {
                        console.log(err);
                    });
                    
                   this.total+=this.itemsCart[i].total;
                }
                  console.log(this.total)
             },

    }
    };
</script>

<style scoped>

</style>