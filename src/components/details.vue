<template>
    <div class="container p-5">
        <div class="row">
            <div class="card col " style="width: 80%;">
            <img v-bind:src=this.photo class="card-img-top" alt="...">
            <div class="card-body-auto">
                <textarea class="card-title col-12"  v-model="this.name"></textarea>
                <textarea class="card-title col-12" type="text" cols=45 v-model="this.description"></textarea>
                <a href="#" class="btn btn-success px-5 mx-5" style="background-color:#1B5E20"  @click="update()">Update</a>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name:'detailsComp',
        props:['id'],
        data() {
            return {
               // id:"",
                name: "",
                description: "",
                photo: "",
            };
        },

  created() {
    this.getItemById();
  },
  methods: {
    getItemById() {
        //console.log("menna  ");
        //this.id=this.$route.params.id;
        axios.get(`Starbucks?id=${this.id}`)
        .then((res) => {console.log(res.data);
        console.log(res.data[0].photo);

            this.name = res.data[0].name;
            this.description = res.data[0].description;
            this.photo = res.data[0].photo;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update()
    {
        axios.put("/Starbucks/"+this.id,{
            name:this.name,
            description:this.description,
            photo:this.photo,

        }).then(()=>alert("Done Update"))
        .catch(()=>console.log("err"));

    }
  },
}
</script>

<style scoped>

</style>