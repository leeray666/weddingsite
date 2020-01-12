# SimpleAscensor
Just a simple jQuery elevator system

&rarr; <a href="http://jeyffrey.fr/work/simpleascensor/" title="Demo" target="_blank">DEMO</a>

#### How to

* Initialize
```html
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/script.js" type="text/javascript"></script>
<script>
  // Nav links selection
  $('nav a').simpleAscensor();
</script>
```

* Your links href has to be your links-target-slide ID
```html
<nav>
  <a href="#slide1">Some link text 1</a>
  ...
</nav>

<div id="slide1" ...></div>
```


* To choose your slide position : add two attributes to your *div / article / section* slide element
  * ***data-x="?"*** &rarr; for x-axis position
  * ***data-y="?"*** &rarr; for y-axis position

    Where ***?*** has to be a number.
    If ***? = 1***, the position is 100%, ***? = 2***, the position is 200%, ...
    
```html
<div id="slide1" data-x="1" data-y="3"></div>
```

* You can choose the speed of the animation
```html
<script>
  $('nav a').simpleAscensor(750);
</script>
```
Where the number is the speed in ms.
