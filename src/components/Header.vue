<template>
    <header>
        <div class="nav">
            <div class="home">Home</div>
            <div class="item">About</div>
            <div class="item">Work</div>
            <div class="item">Socials</div>
            <div class="item">Contact</div>
            
        </div>
    </header>
</template>
  
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
  
<style>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* border: 2px solid black; */
}

.nav div {
    border-right: 2px solid black;
    padding: 30px;
    background: white;
    font-size: 22px;
}

.nav div.item {
    
    text-align: end;
    width: 20%;
    border: 2px solid black;
    border-left: 1px solid black;
    border-right: 1px solid;
    padding: 30px 20px;
    box-shadow: 5px 5px 0px 0px black;
}
.nav div.item:hover {
    transform: translate(5px, 5px);
    box-shadow: -5px -5px 0px 0px rgb(0, 0, 0);
    transition-property: transform, box-shadow;
    transition-duration: .2s;
    transition-timing-function: ease;
}

.nav div.home {
    width: 20%;
    text-align: start;
    border: 2px solid black;
    border-right: 1px solid black;
    padding: 30px 20px;
    box-shadow: 5px 5px 0px 0px black;

}

.nav div.home:hover {
    transform: translate(5px, 5px);
    box-shadow: -5px -5px 0px 0px rgb(0, 0, 0);
    transition-property: transform, box-shadow;
    transition-duration: .2s;
    transition-timing-function: ease-out;
}

.nav div.home:hover>.item {
    z-index: 2;

}


</style>
  