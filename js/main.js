
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
},40)



for (let i=0; i< planets.length; i++){
    planets[i].planetElm.style.backgroundImage=`url('img/${i+1}.jpeg')`;
    planets[i].planetElm.style.backgroundPosition='center';
    planets[i].planetElm.style.backgroundCover='cover';
}