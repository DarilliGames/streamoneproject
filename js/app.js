
//////////////// the todo is from the index.html, ngRoute i would stay safe with and not touch for now.

angular.module("todoApp", ["ngRoute", "RouteControllers", "UserService", "TodoService"]);

angular.module("todoApp").config(function($locationProvider, $routeProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when("/", {
        templateUrl: "/templates/home.html",
        controller: "DessertController",
        
    })
    
    .when("/about", {
        templateUrl: "/templates/about.html",
        controller: "DessertController",
    })
    
    .when("/contact", {
        templateUrl: "/templates/contact.html"
        
    })
    .when("/portfolio", {
        templateUrl: "/templates/portfolio.html"
    })
    
    .when("/play", {
        templateUrl: "/templates/play.html"
    })
    .when("/zoomtroopers", {
        templateUrl: "/templates/zoomtroopers.html"
    })
    
    
    
    
    
        
    .when("/todo", {
        templateUrl: "/templates/todo.html",
        controller: "TodoController",
    })
        
    
    .when("/search", {
        templateUrl: "/templates/search.html"
        
    })
    .when("/add", {
        templateUrl: "/templates/add.html",
        controller: "DessertController",
    })
    .when("/account/register", {
        templateUrl: "/templates/register.html",
        controller: "RegisterController",
    })
    .when("/todo/edit/:id",{
        templateUrl: "templates/edit-todo.html",
        controller: "EditTodoController",
    });
    
});

