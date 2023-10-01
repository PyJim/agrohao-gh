<template>
    <div class="all-achievements">
        <div class="achievement">
            <font-awesome-icon :icon="['fas', 'award']" size="3x" style="color: white"/>
            <h1 class="value">{{awardCount}}+</h1>
            <h3 class="quantity">Awards</h3>
        </div>
        <div class="achievement">
            <font-awesome-icon :icon="['fas', 'people-line']" size="3x" style="color: white"/>
            <h1 class="value">{{customerCount}}K+</h1>
            <h3 class="quantity">Satisfied Customers</h3>
        </div>
        <div class="achievement">
            <font-awesome-icon :icon="['fas', 'location-crosshairs']" size="3x" style="color: white"/>
            <h1 class="value">{{operationalRangeCount}}+</h1>
            <h3 class="quantity">Operation Range</h3>
        </div>
        <div class="achievement">
            <font-awesome-icon :icon="['fas', 'sitemap']" size="3x" style="color: white"/>
            <h1 class="value">{{productCount}}+</h1>
            <h3 class="quantity">Products</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AchievementsPage",
        data() {
            return {
            productCount: 0,
            customerCount: 0,
            awardCount: 0,
            operationalRangeCount: 0,
            targetCounts: {
                products: 50, // Change these values to your desired counts
                customers: 5,
                awards: 100,
                operationalRange: 100,
            },
            delay: 100, // Change this value to your desired delay in milliseconds
            };
        },
        mounted() {
            this.startCounting();
        },
        methods: {
            startCounting() {
            const interval = setInterval(() => {
                if (this.productCount < this.targetCounts.products) {
                this.productCount++;
                }
                if (this.customerCount < this.targetCounts.customers) {
                this.customerCount++;
                }
                if (this.awardCount < this.targetCounts.awards) {
                this.awardCount++;
                }
                if (this.operationalRangeCount < this.targetCounts.operationalRange) {
                this.operationalRangeCount++;
                }
                if (
                this.productCount === this.targetCounts.products &&
                this.customerCount === this.targetCounts.customers &&
                this.awardCount === this.targetCounts.awards &&
                this.operationalRangeCount === this.targetCounts.operationalRange
                ) {
                clearInterval(interval);
                }
            }, this.delay);
            },
        },
    }
</script>

<style scoped>
    .all-achievements{
        width: 100vw;
        padding: 30px 0;
        height: auto;
        background-color: #032D26;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .achievement{
        background-color: transparent;
        width: auto;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .value{
        font-size: 50px;
        font-weight: bold;
        color: white;
        margin-top: 30px;
    }
    .quantity{
        color: white;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }
    @media(max-width: 767px){
        .achievement{
            transform: scale(0.8);
        }
    }
    @media(max-width: 587px){
        .all-achievements{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>