<template>
    <div class="profile">
        <h3>My Info</h3>
        <br>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="media text-left">
                        <img src="../assets/pic.jpg" alt="user-pic" class="user-pic mr-3">
                        <div class="media-body">
                            <h5 class="mt-0">{{firstName}} {{ lastName}}</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed deleniti quo laudantium dolorum officia beatae molestiae non rem accusantium totam in neque veritatis. Tempora facere fugit id exercitationem, nesciunt, sit nobis quidem at reprehenderit, ipsam deserunt iste vero. Quibusdam?</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
    name: 'profile',
    data: function() {
        return  {
        // property: value
        firstName : 'Ahmad',
        lastName: 'Salem'
        }
    },
    components: {

    }
}
</script>

<style scoped>
    .user-pic {
        height: 100px;
        width: 90px;
        border-radius: 200%;
    }
</style>