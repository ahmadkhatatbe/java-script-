let card=[ 
  {name:"ahmed",
age:18,
image:"7 -13-2023/Screenshot 2023-06-09 163256.png"},
{name:"khatatbeh",
  age:25,
  image:"7 -13-2023/Screenshot 2023-06-09 163256.png"},
  {name:"mohammad",
    age:20,
    image:"7 -13-2023/Screenshot 2023-06-09 163256.png"},
    {name:"ali",
      age:28,
      image:"7 -13-2023/Screenshot 2023-06-09 163256.png"}  ]
      
      for (let i = 0; i < card.length; i++) {
       let main=document.createElement("div")
       main.style.background="brown";
       main.style.width="200px";
       main.style.height="200px";
       main.style.textAlign="center";
       main.style.display="inline-block";
       main.style.flexDirection="wrap";
       main.style.margin="10px";
       document.body.appendChild(main)
        let name = document.createElement("h1")
        main.appendChild(name)
        let textName = document.createTextNode(`${card[i].name}`)
        name.appendChild(textName)
        let age = document.createElement("p")
        main.appendChild(age)
        let txtage = document.createTextNode(`${card[i].age}`)
        age.appendChild(txtage);
        let img = document.createElement("img")
        img.style.width="200px";
        img.src=card.image;
        main.appendChild (img)
       let textimg = document.createTextNode(`${card[i].image}`)
       img.appendChild(textimg);
       
      }

  