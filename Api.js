$(document).ready(() => {
    requestApi();
});

//reques api
var requestApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getData(data),
        error: () => getError(),
    });
};

//get url
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
};

//get data
var getData = (myData) => {
    myData.recipes.forEach(element => {
        //recipe element.ingredients
        getIngredients(element.ingredients);
    });
};

//get error
var getError = () => {

};

//get ingredients
var getIngredients = (ing)=>{
    ing.forEach(item =>{
        comuteHtml(item);
    });
};
//comute html
var comuteHtml = (item)=>{
    var result ="";
    result+=`
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td><img src="${item.iconUrl}" class="img-fluit" width="100px"></td>
        </tr>
    `;
    printOut(result);
}
//print out to html
var printOut = (out) =>{
    $("#ingrediants").append(out);
};