
const loadMeals = (searchText) =>{
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeals(data.meals))
} 
const displaymeals = meals =>{
    const mealscontainer =document.getElementById('meal-container');
    mealscontainer.innerHTML ='';
     meals.forEach(meal => {
        // console.log(meal);
        const milediv =document.createElement('div')
        milediv.classList.add('col')
        milediv.innerHTML =`
        <div class="col">
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            <button onclick="loadMealsDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
            </button>
          </div>
        </div>
      </div>
        `;

        mealscontainer.appendChild(milediv);
     });
}
const searchMeals =() =>{
  const searchText =document.getElementById('search-field').value;
  console.log(searchText)
  loadMeals(searchText);
}
const loadMealsDetails = idmeal =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data =>displaymealsDetails(data.meals[0]))
  .catch(error => {
    console.log(error)
  })
}
const displaymealsDetails =meal =>{
  document.getElementById('mealDetailsLabel').innerText =meal.strMeal;
  const mealsDetails =document.getElementById('mealDetailsBody');
  mealsDetails.innerHTML=`
  <img scr="${meal.strMealThumb}">
  `;
  

}
loadMeals('fish');