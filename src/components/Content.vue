<template>
    <div class="container-fluid content">
        <div class="row gx-5">
            <div class="col-lg-6 iframe-div">
                <img class="here" src="../assets/here.png" alt="">
                <iframe src='https://my.spline.design/untitled-9a92b9d46af0b657f7f8a4aed746e91a/'
                    frameborder='0'></iframe>
            </div>
            <div class="col-lg-6">
                <div class="custom-card">
                    <div class="custom-card-header">
                        <h2>Hi, it's your friendly neighbourhood Frontend Developer</h2>
                    </div>
                    <div class="custom-card-body">
                        <p>Hello! My name is Alptug i am a Frontend Developer who loves to create new things that amaze
                            people.

                        </p>
                        <p>
                            Computers fascinated me since i was a kid. It all started when i was 5 years old when my
                            neighbour's kid gave me a game called 'Street Fighter ZERO' on my birthday.
                            First i tried to make animations on computer ( like stick fighters ).
                            After a while i realised i wanted to work on something art related.

                        </p>
                        <p>
                            But i've met with development so late and even later i've put the work to become a good one.
                            When i put enaugh
                            time and work to become a developer i realised that i can mix my art side with computer
                            science and i fell in love with it immediately.
                        </p>
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at a Digital Agency called
                            Badiworks as a Software Engineer and a international company called TEKLAS as a Frontend
                            Developer. My main focus these days is building accessible,
                            inclusive products and digital experiences while i keep learning new things.
                        </p>

                    </div>
                    <button class="btn-contact">
                        <a href="#">Look at things i've build</a>
                    </button>
                </div>
            </div>
        </div>
        <section class="row gx-5 section">
            <div class="col-lg-9">
                <button class="button98" id="button98" @click="hide()">
                    <i class="fa-solid fa-xmark icon-x"></i>
                </button>

                <p id="web-page" class="web-page">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam voluptatum
                    temporibus optio nulla,
                    hic distinctio iusto fuga esse voluptatibus animi. Tempore accusantium quidem accusamus quaerat
                    laborum qui veritatis odio.</p>
            </div>
            <div class="col-lg-3">
                <p class="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam voluptatum
                    temporibus optio nulla,
                    hic distinctio iusto fuga esse voluptatibus animi. Tempore accusantium quidem accusamus quaerat
                    laborum qui veritatis odio.</p>
            </div>
        </section>
        <div class="row mt-5 gx-5">
            <div class="col-lg-6">
                <p class="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam voluptatum
                    temporibus optio nulla,
                    hic distinctio iusto fuga esse voluptatibus animi. Tempore accusantium quidem accusamus quaerat
                    laborum qui veritatis odio.</p>
            </div>
            <div class="col-lg-6">
                <p class="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam voluptatum
                    temporibus optio nulla,
                    hic distinctio iusto fuga esse voluptatibus animi. Tempore accusantium quidem accusamus quaerat
                    laborum qui veritatis odio.</p>
            </div>
        </div>


    </div>
</template>
  
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        hide() {
            const focus = document.getElementById('button98');
            focus.blur();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
}
</script>
  
<style>
.button98 {
    position: relative;
    top: 7px;
    left: 10px;
    background: grey;
    width: 28px;
    height: 28px;
    border-left: 4px solid rgb(175, 173, 173);
    border-top: 4px solid rgb(175, 173, 173);
    border-bottom: 4px solid rgb(51, 51, 51);
    border-right: 4px solid rgb(51, 51, 51);

}

.button98:focus {
    border-left: 4px solid rgb(51, 51, 51);
    border-top: 4px solid rgb(51, 51, 51);
    border-bottom: 4px solid rgb(175, 173, 173);
    border-right: 4px solid rgb(175, 173, 173);
}

.icon-x {
    position: relative;
    top: -2px;
    left: 0px;
    color: black;
}

.web-page {
    margin-top: -28px;
    border: 4px solid black;
    border-top: 40px solid black;
    padding: 20px;
}

.here {
    position: absolute;
    top: 15%;
    pointer-events: none;
}

.section {
    margin-top: 180px;
}

.btn-contact {
    position: relative;
    top: -30px;
    left: 20px;
    color: black;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 10px;
    background: rgb(199, 250, 81);
    border: 3px solid black;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0px black;
    transition-property: transform, box-shadow;
    transition-duration: .2s;
    transition-timing-function: ease;
}

.btn-contact:hover {

    transform: translate(5px, 5px);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
}

.content {
    margin-top: 20px;
    padding: 2%;
    border-radius: 20px;
}

.custom-card {
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 6px 6px 0px 0px black;
    max-height: 586px;
}

.custom-card-header {
    padding: 10px;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 4px solid black;
}

.custom-card-header h2 {
    text-align: center;
    font-weight: 700;
}

.custom-card-body {
    font-weight: 700;
    font-size: 18px;
    padding: 40px;
    background-color: #271a3bfa;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    height: 511px;
    width: 100%;
}

.custom-card-body p {
    font-weight: 400;
    color: white;
    letter-spacing: 1px;
}

.content-p {
    padding: 20px;
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 0px black;
}

.content-img {
    width: 100%;
    border: 3px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 0px black;
}

.iframe-div {
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 20px;
}

iframe {

    height: 110%;
    width: 100%;

}
</style>
  