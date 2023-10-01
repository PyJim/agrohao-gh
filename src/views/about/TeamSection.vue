<template>
    <div class="main">
        <h1>Team</h1>
        <p>Meet the wonderful humans of agrohao</p>

        <div class="team-card">
            <div class="member-card">
                <img src="../../assets/human1.jpg" alt="">
                <h3 class="name">John Doe</h3>
                <p>Co-Founder</p>
            </div>
            <div class="member-card">
                <img src="../../assets/human2.jpg" alt="">
                <h3 class="name">John Doe</h3>
                <p>Marketing Manager</p>
            </div>
            <div class="member-card">
                <img src="../../assets/human3.jpg" alt="">
                <h3 class="name">John Doe</h3>
                <p>CEO</p>
            </div>
            <div class="member-card">
                <img src="../../assets/human4.jpg" alt="">
                <h3 class="name">John Doe</h3>
                <p>Director</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamSection",
    }
</script>

<style scoped>
    .main{
        width: 100vw;
        height: auto;
        background-color: #F6FAF4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 80px;
    }
    .main h1{
        margin: 10px;
        text-align: center;
    }
    .main p{
        margin-bottom: 30px;
        text-align: center;
    }
    .team-card{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .member-card{
        width: 300px;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 30px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }
    .member-card img{
        width: 100%;
        height: 80%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .member-card h3{
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5rem;
        margin: 5px 30px;
    }
    .member-card p{
        margin: 5px 30px;
    }
    @media(max-width: 880px){
        .team-card{
            transform: scale(0.8);
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: -80px 0;
        }
    }
    @media(max-width: 567px){
        .team-card{
            transform: scale(0.6);
            margin: -200px 0;
        }
    }
    @media(max-width: 421px){
        .team-card{
            grid-template-columns: 1fr;
            transform: scale(1);
            margin: 0;
        }
        .member-card{
            margin: 20px 0;
        }
        .main{
            padding: 50px 10px;
        }
    }
    @media(max-width: 358px){
        .team-card{
            transform: scale(0.8);
            margin: -180px 0;
        }
    }
</style>