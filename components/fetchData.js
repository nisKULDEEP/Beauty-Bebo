const fetchData = async(url) => {
    try {
        let data = await fetch(url);
        let finalData = await data.json();
   return finalData;
    } catch (error) {
        console.log("ERROR")
    }
    
}

const display = (data,container) =>{
    data.forEach(element => {
        let foodCard = document.createElement("div");

        let category = document.createElement("div");
        category.textContent ="Category :"+ " "+ element.strCategory;

        let image = document.createElement("img");
        image.src = element.strMealThumb;

        let name = document.createElement("div");
        name.textContent = element.strMeal;
        name.setAttribute("id","name")

        let b = document.createElement("button");
        b.textContent = "Watch Video"
      
        b.addEventListener("click", ()=>{
            window.open(
                element.strYoutube,
                '_blank' // <- This is what makes it open in a new window.
              );
            // location.href = element.strYoutube;
        })
       

        foodCard.append(image, name, category,b);
        container.append(foodCard);
           
    });
   
}

export {fetchData, display};