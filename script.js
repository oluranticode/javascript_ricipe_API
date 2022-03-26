
    const searchBtn = document.querySelector(".search-btn");
    const mealList = document.getElementById("meal");
    const mealDetailsContent = document.querySelector('meal-details-content');
    const recipeCloseBtn = document.getElementById('recipe-close-btn');

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
                if(data.meals){
                    // console.log(data.meals);
                    data.meals.forEach(meal => {
                        //console.log(meal.strMealThumb);
                        // meal_id.innerHtml = meal.idMeal;
                        // meal_img.src = meal.strMealThumb;
                        // meal_text.innerHtml = meal.strMeal; 

                        life +=` <div class="meal-item" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div> `;

                    console.log(life);
                    });
                }
                mealList.innerHtml = life;
            });
          
        }