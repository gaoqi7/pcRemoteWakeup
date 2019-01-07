# pcRemoteWakeup

# What
this app running in raspberry pi 3 (model B). I use it for wakeup my home server remotely.

# How
* Raspberry pi running all the time.
* SSH into raspberry pi remotely
* `node servo.js` running the app
* app trigger a servo which click one logitech wireless keyboard button 3 times

# Why
* I don't want my home server keep on running all the time. I want to saving energy and no fan noise.
* my server's normal state should be just sleep. when I want to use it, I just wake it up. after I finish my job, my server will be sleep automatically. 
* I know there is one thing called WoL, I tried in a lot of way, it just not work!
