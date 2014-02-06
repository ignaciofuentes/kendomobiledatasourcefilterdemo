(function (global) {
       var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        $(document.body).height(window.innerHeight);
    }, false); 
    app.application = new kendo.mobile.Application(document.body, { initial:"views/first.html", layout: "layout"});
})(window);
var myVm= new kendo.observable({
    name:"",
    action: function(){
        app.application.navigate("views/second.html");  
    },
    people: new kendo.data.DataSource({data:[{name:"Ignacio"}, {name:"Tony"}]})   
});

function peopleLoaded(view){
    if(myVm.name)    
        myVm.people.filter( { field: "name", operator: "startswith", value: myVm.name });    
    else          
        myVm.people.filter({});
    
}