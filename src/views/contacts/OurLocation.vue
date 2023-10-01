<template>
    <div class="main">
        <div class="image">
            <img src="../../assets/agrochemist.png" alt="">
        </div>
        

        <div class="texts">
            <h1>Locate our office</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore corrupti hic consequatur repudiandae in ut deleniti eos, nam vero? Totam tenetur fugit tempore recusandae tempora ducimus impedit dignissimos id, sequi obcaecati maxime, hic, culpa explicabo quidem. Voluptatem natus aperiam iure eveniet sint esse saepe aspernatur libero velit quae quod delectus quisquam repellat et vero quam, provident commodi exercitationem, omnis consequuntur quaerat porro? Expedita voluptatum labore esse similique blanditiis voluptatem aspernatur debitis, ullam, et qui corporis aperiam, maxime iure. Laudantium nostrum expedita ratione quisquam amet, nihil repellendus, iure enim a quod sed perspiciatis, omnis quibusdam quos? Quibusdam mollitia officiis magnam.</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus deleniti non deserunt hic exercitationem omnis voluptates nisi maiores accusamus vel quos minus blanditiis et excepturi, animi quo eos, porro amet iure, illum dolores placeat sint! Possimus, impedit voluptatibus enim dolore minima blanditiis molestias, consequuntur, totam quaerat quis excepturi alias.</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "OurLocation",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        padding: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main .image{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #032D26;
    }
    .main .image img{
        width: 100%;
    }
    .main .texts{
        margin: 0 25px;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .texts h1{
        margin-bottom: 20px;
        text-align: center;
    }
    @media(max-width: 1110px){
        .main{
            flex-direction: column;
            padding: 0 50px;
        }
        .texts{
            width: 80vw;
            margin: 0;
            padding: 50px 0;
        }
        .image{
            width: 100vw;
            height: 60vh;
        }
        .image img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        } 
    }

</style>