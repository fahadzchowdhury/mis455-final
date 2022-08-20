function api()
{
    var searchText = document.getElementById("searchbar").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => display(data))
    
    document.getElementById("searchbar").value = "";
    document.getElementById("container").textContent = "";
}

function display(data)
{
    var oldContent = document.getElementById("container");
    var numberOfItems = parseInt(document.getElementById("number").value);
    
    for(var a = 0; a < numberOfItems; a++)
    {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `
        <div class="card m-2" style="width: 18em">
            <img src="${data.meals[a].strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h4 class = "card-title text-center">${data.meals[a].strMeal}</h4>
            </div>        
        
        </div>
        
        `
        // <br></br>
        oldContent.appendChild(newDiv);
    }

}