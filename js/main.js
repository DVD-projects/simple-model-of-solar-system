// const orbit = document.createElement('div');
// orbit.classList.add('orbit');
// document.body.append(orbit);

// const orbit = document.querySelector('.orbit');
// const planet = document.querySelector('.planet');


// let r1 = 300;
// let r2 = 50;
// let angle = 0;
// planet.style.left=`${r1+r1*Math.cos(angle*(Math.PI/180))-r2}px`;
// planet.style.top=`${r1-r1*Math.sin(angle*(Math.PI/180))-r2}px`;
// setInterval(()=>{
//     angle++;
//     planet.style.left=`${r1+r1*Math.cos(angle*(Math.PI/180))-r2}px`;
//     planet.style.top=`${r1-r1*Math.sin(angle*(Math.PI/180))-r2}px`;
//     if (angle===360) angle=0;
// },10)

// class Orbit {
//     elm;
//     radius;
//     constructor(radius){
//         this.radius=radius;
//         this.elm = document.createElement('div');
//         this.elm.style.width=`${this.radius}px`
//         this.elm.style.height=`${this.radius}px`
//         this.elm.classList.add('orbit');
//         document.body.append(this.elm);
//     }
// }



class Orbit {
    orbitElm;
    planetElm;
    radius1;
    radius2;
    angle = Math.floor(Math.random()*361);
    constructor(d1,d2){
        this.radius1=d1/2;
        this.radius2=d2/2;
        this.d1 = d1;
        this.d2=d2;
        this.orbitElm = document.createElement('div');
        this.planetElm = document.createElement('div');
        this.orbitElm.style.width=`${this.d1}px`;
        this.orbitElm.style.height=`${this.d1}px`;
        this.planetElm.style.width=`${this.d2}px`;
        this.planetElm.style.height=`${this.d2}px`;
        this.orbitElm.classList.add('orbit');
        this.planetElm.classList.add('planet');
        // this.planetElm.style.backgroundImage=`linear-gradient(180deg, 
        //     rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}), 
        //     rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}))`
        this.orbitElm.append(this.planetElm);
        document.body.append(this.orbitElm);
        this.planetElm.style.left=`${this.radius1+this.radius1*Math.cos(this.angle*(Math.PI/180))-this.radius2}px`;
        this.planetElm.style.top=`${this.radius1-this.radius1*Math.sin(this.angle*(Math.PI/180))-this.radius2}px`;
    }

    spinClockwise(){
        this.angle--;
        this.planetElm.style.left=`${this.radius1+this.radius1*Math.cos(this.angle*(Math.PI/180))-this.radius2}px`;
        this.planetElm.style.top=`${this.radius1-this.radius1*Math.sin(this.angle*(Math.PI/180))-this.radius2}px`;
        if (this.angle===360) this.angle=0;
    }
    spinAntiClockwise(){
        this.angle++;
        this.planetElm.style.left=`${this.radius1+this.radius1*Math.cos(this.angle*(Math.PI/180))-this.radius2}px`;
        this.planetElm.style.top=`${this.radius1-this.radius1*Math.sin(this.angle*(Math.PI/180))-this.radius2}px`;
        if (this.angle===360) this.angle=0;
    }
}

const planets = [];
planets.push(new Orbit(200,25))
planets.push(new Orbit(280,35))
planets.push(new Orbit(380,45))
planets.push(new Orbit(500,50))
planets.push(new Orbit(700,120))
planets.push(new Orbit(900,80))

// setInterval(()=>{
//     for (let i=0; i<planets.length; i++){
//         if (i%2===0)planets[i].spinAntiClockwise();
//         else planets[i].spinClockwise();
//     }
// },15);

setInterval(()=>{
    planets.forEach(planet=> planet.spinClockwise());
},15)



for (let i=0; i< planets.length; i++){
    planets[i].planetElm.style.backgroundImage=`url('img/${i+1}.jpeg')`;
    planets[i].planetElm.style.backgroundPosition='center';
    planets[i].planetElm.style.backgroundCover='cover';
}