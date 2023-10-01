<template>
    <nav class="navbar blur stickyy">
        <div class="nav-pad">
            <div class="navbar-nav align-items-center">
                <a id="nav-title" class="nav-link bold" href="#">PORTFOLIO</a>
                <span class="nav-item nav-lg">
                    <router-link to="/" class="nav-link active">Home</router-link></span>
                <span class="nav-item nav-lg">
                    <router-link to="/about" class="nav-link">About Me</router-link>
                </span>
                <span class="nav-item nav-lg">
                    <router-link to="/skills" class="nav-link">My Skills</router-link>
                </span>
                <span class="nav-item nav-lg">
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </span>
                
                
                
                

                <span style="float: right;" id="trans">
                    <span id="trans1"><i id="tgl" class="fa fa-bars nav-toggler"
                            style="font-size:22px;color:#d4d4d8"></i></span>
                </span>

                <!-- <span class="signin" >
                        <button class="btn sign-in-btn btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#SigninModal" type="submit">Sign in</button>
                      </span> -->

            </div>
        </div>

        <div id="nav-collapse" class="nav-pad">
            <div class="d-flex-sm navbar-nav">
                <span class="nav-item nav-sm">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </span>
                <span class="nav-item nav-sm">
                    <a class="nav-link" href="#about">About Me</a>
                </span>
                <span class="nav-item nav-sm">
                    <a class="nav-link" href="#skills">My Skills</a>
                </span>
                <span class="nav-item nav-sm">
                    <a href="" class="nav-link" data-bs-toggle="modal" data-bs-target="#MotionModal">Contact</a>
                </span>

                <!-- <span class="signin" >
                        <button class="btn sign-in-btn btn-lg btn-light" data-bs-toggle="modal" data-bs-target="#SigninModal" type="submit">Sign in</button>
                      </span> -->

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    // Component logic here
}
</script>

<style scoped>
/* Your Navbar CSS styles here */
</style>
