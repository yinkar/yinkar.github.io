---
layout: page
permalink: /single-div/
title: Single Div
---

<style class="custom-style">
    .item-container {
        background-color: #333;
        height: 600px;
        width: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        place-content: center;
    }

    .bottle {
        background-color: #fff;
        height: 300px;
        width: 150px;
        border-radius: 60% 60% 60% 60% / 16% 16% 10% 10%;
        background-image: radial-gradient(
                ellipse,
                rgba(255, 255, 255, 0.2) 60%,
                transparent 61%
            ),
            linear-gradient(
                to right,
                darkred 0%,
                red 20%,
                #440000 40%,
                darkred 50%,
                #bb0000 65%,
                red 75%,
                darkred 100%
            );
        background-size: 20px 70px, 100% 100%;
        background-position: 15px 40px, 0 0;
        background-repeat: no-repeat, repeat;
        box-shadow: 25px -120px 20px -70px #555, 0 -100px 1px -30px black,
            -13px -160px 12px -73px #444, -20px -150px 1px -60px black,
            30px -150px 1px -68px black;
        animation: bottle 6s linear infinite 1s;
    }

    .bottle::before {
        content: "";
        width: 22px;
        height: 22px;
        background-image: radial-gradient(
                ellipse,
                rgba(200, 100, 100, 0.6) 0%,
                transparent 90%
            ),
            radial-gradient(ellipse, red, firebrick, darkred);
        background-position: 10px 2px, 15px 30px;
        background-size: 50% 50%, 100% 100%;
        background-repeat: no-repeat, repeat;
        position: absolute;
        left: 60px;
        top: -470px;
        margin: auto;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        z-index: 2;
        transform: scaleY(1.2);
        animation: openside 6s linear infinite 1s;
    }

    .bottle::after {
        content: "";
        position: absolute;
        left: 0;
        top: -476px;
        margin: auto;
        border-radius: 55px 15px 5px 5px / 20px 10px;
        bottom: 0;
        right: 0;
        width: 80px;
        height: 20px;
        background-image: linear-gradient(
            -5deg,
            red,
            darkred,
            firebrick 80%,
            transparent 81%
        );
        animation: opentop 6s linear infinite 1s;
        transform-origin: 90% 45%;
    }

    @keyframes opentop {
        0% {
            transform: rotate(0deg);
        }
        5% {
            transform: rotate(45deg) scaleY(1.2);
        }
        20% {
            transform: rotate(45deg) scaleY(1.2);
        }
        70% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes openside {
        0% {
            transform: rotate(0deg) scaleY(1.2);
        }
        5% {
            transform: rotate(45deg) scaleY(1.1) scaleX(1.1);
        }
        20% {
            transform: rotate(45deg) scaleY(1.1) scaleX(1.1);
        }
        70% {
            transform: rotate(0deg) scaleY(1.2);
        }
        100% {
            transform: rotate(0deg) scaleY(1.2);
        }
    }

    @keyframes bottle {
        0% {
            transform: rotate(0deg);
        }
        30% {
            transform: rotate(-115deg);
            background-position: 15px -400px, 0 0;
        }
        33% {
            transform: rotate(-115deg) translate(10%, 20%);
        }
        35% {
            transform: rotate(-115deg) translate(0, 0);
        }
        37% {
            transform: rotate(-115deg) translate(10%, 20%);
        }
        39% {
            transform: rotate(-115deg) translate(0, 0);
        }
        80% {
            transform: rotate(0deg);
            background-position: 15px 30px, 0 0;
        }
    }

</style>

<script>
    document.head.appendChild(document.querySelector('.custom-style'));
</script>

<div class="item-container">
    <div class="bottle"></div>
</div>