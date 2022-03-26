
    const searchBtn = document.querySelector(".search-btn");
    const mealList = document.getElementById("meal_life");
    const mealDetailsContent = document.querySelector('meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');
    const mealDetails = document.getElementById("meal-details");
    const closeButton = document.getElementById("recipe-close-btn");
    const recipeBtn = document.querySelector(".recipe-btn");

    // dom variables for the meal
    const meal_id = document.getElementById("meal-id");
    const meal_img = document.getElementById("meal-img");
    const meal_text = document.getElementById("meal-text");

    // event listeners
    searchBtn.addEventListener('click', getMealList);

    // get meal list that matches with the ingredients
        function getMealList(){
           let searchInputTxt = document.getElementById("search-input").value.trim();
            // console.log(searchInputTxt);  
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
            .then(response => response.json())
            .then(data => {
                //  console.log(data)
                let life = "";
                let html = "";
                if(data.meals){
                    console.log(data.meals);
                    // let meals = data.meals;
                    // $.each(meals, (index, meal) => {
                        data.meals.forEach(meal => {
                        life +=` <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <button onclick="mealSelected('${meal.idMeal}')" class="recipe-btn">Get Recipe</button>
                        </div>
                    </div> `

                    console.log(life);
                    });
                }
                $('#meal_life').html(life); 
                // mealList.innerHTML = life;
                          
            });
          
        }

        // Display Content.........
    function mealSelected(idMeal){
        // alert(idMeal);
       
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(result => result.json())
        .then(data => {
            // console.log(data.meals[0].strMeal);
            // console.log(data.meals[0]);

            let meal = data.meals[0];
            if(meal){
                mealDetails.style.display = "block";
                output = `
                <h2 class="recipe-title">
                        ${meal.strMeal}
                    </h2>strCategory
                    <p class="recipe-category">${meal.strCategory}</p>
                    <div class="recipe-instruct">
                        <h3>Instructions:</h3>
                        <p>${meal.strInstructions}
                           </p>

                    </div>
                    <div class="recipe-meal-img">
                        <img src="${meal.strMealThumb}" alt="">
                    </div>strYoutube
                    <div class="recipe-link">
                        <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
                    </div>
                `;
    
                $(".meal-details-content").html(output);
            }
            
        })
    }

    // recipeBtn.addEventListener("click", (e)=> {
    //     e.preventDefault();
    // })

    // Close Button.....
        closeButton.addEventListener("click", (e) =>{
            mealDetails.style.display = "none";
        })