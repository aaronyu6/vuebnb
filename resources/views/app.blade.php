<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">


    <title>Vuebnb</title>

    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
</head>
<body>
<div id="toolbar">
    <img class="icon" src="{{ asset('images/logo.png') }}">
    <h1>vuebnb</h1>
</div>

<div id="app">
    <div class="header">
        <div
                class="header-img"
                v-bind:style="headerImageStyle"
                v-on:click="modalOpen = true"
        >
            <button class="view-photos">View Photos</button>
        </div>
    </div>
    <div class="container">
        <div class="heading">
            <h1>@{{ title }}</h1>
            <p>@{{ address }}</p>
            <button v-if="contracted" class="more" v-on:click="contracted = false">+ More</button>
        </div>
        <hr>
        <div class="about">
            <h3>About this listing</h3>
            <p v-bind:class="{ contracted:contracted}">@{{ about }}</p>
        </div>
        <div class="lists">
            <hr>
            <div class="amenities list">
                <div class="title"><strong>Amenities</strong></div>
                <div class="content">
                    <div class="list-item" v-for="amenity in amenities">
                        <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                        <span>@{{ amenity.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="modal" v-bind:class="{ show : modalOpen }">
        <button v-on:click="modalOpen = false" class="modal-close">
            &times;
        </button>
        <div class="modal-content">
            <img src="{{ asset('images/header.jpg') }}"/>
        </div>
    </div>
</div>
<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
