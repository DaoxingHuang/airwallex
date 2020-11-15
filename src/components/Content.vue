<template>
    <div class='al-content'>
        <div class="title"> a bettery way to enjoy every day.
        </div>
        <div> be the first to know when we lanch.
        </div>
        <div>
            <el-button @click="sendRequest">Request a invite</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            sendRequest:()=>{
                alert('sended');
            }
        }
    }
</script>

<style lang='scss'>
    .al-content {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        // height: 100vh;
        .title {
            font-size: 3rem;
            font-weight: 700;
        }
    }
</style>