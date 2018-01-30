angular.module("RouteControllers", [])
    .controller("DessertController", function($scope){
        $scope.title = "Welcome to AngularJS";
        if($scope.loggedInUser = localStorage.getItem("username")){
            $scope.loggedInUser = localStorage.getItem("username");
            $scope.buttonName = "Log Out";
            
        }else{
            $scope.loggedInUser = "Guest";
            $scope.buttonName = "Log In";
            
        }
        $scope.favouriteDessert = "Chocolate Fudge Brownie";
        $scope.desserts = [
            {name: "Trifle", discription: "Old people love this"},
            {name: "Chocolate Fudge Brownie", discription: "With no nuts it is delicious"},
            {name: "Red Velvet Cake", discription: "Orgasm in your mouth"},
            {name: "Sticky Toffee Pudding", discription: "It's sticky so you won't drop it"},
            ];
        $scope.dessert = {name: "", discription: ""};
    
        $scope.save = function(){
            alert("Hello");
            if($scope.desserts.indexOf($scope.dessert)==-1){
                $scope.desserts.push($scope.dessert);
                
            }else{
                alert("NOOO!");
                
            }
            
        }
    })

.controller("RegisterController", function($scope, UserAPIService){
    $scope.registrationUser = {};
    let URL = "https://morning-castle-91468.herokuapp.com/";
    
    $scope.login = function(){
        UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
            $scope.token = results.data.token;
            localStorage.setItem("username", $scope.registrationUser.username);
            localStorage.setItem("authToken", $scope.token);
            console.log("I THink you are in");
            alert("Welcome Welcome Blah Blah Blah!");
            
        }).catch(function(err){
            console.log(err);
            
        });
        
    };

    $scope.submitForm = function(){
        if($scope.registrationForm.$valid){
        alert("Check");
        $scope.registrationUser.username = $scope.user.username;
        $scope.registrationUser.password = $scope.user.password;

        UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
            $scope.data = results.data;
            alert("You have Successfully Registered. Go You!!!");
            $scope.login();
        }).catch(function(err){
            alert("What the Fuz is happening??");
            console.log(err);
                
            });
        }
    };
    
    
        
})
.controller("TodoController", function($scope, $location, TodoAPIService){
    let URL = "https://morning-castle-91468.herokuapp.com/";
    
    $scope.authToken = localStorage.getItem("authToken");
    $scope.username = localStorage.getItem("username");
    $scope.todos = [];
    
    
    TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken).then(function(results){
        $scope.todos = (results.data || []);
        console.log($scope.todos);
    }).catch(function(err){
        console.log("error log send");
        console.log(err);
        console.log("error log send");
    });
    
    $scope.deleteTodo = function(id){
        TodoAPIService.deleteTodo(URL + "todo/" + id, $scope.authToken).then(function(results){
            console.log(results);
            alert("Item Deleted Successfully");
        }).catch(function(err){
            console.log(err);
        });
        
    };
    $scope.editTodo = function(id){
        $location.path("/todo/edit/"+id);
    };
    
    
    $scope.submitForm = function(){
        if($scope.todoForm.$valid){
            $scope.todo.username = $scope.username;
            $scope.todos.push($scope.todo);
            console.log($scope.todos);

        
    
    
    
    
            
        TodoAPIService.createTodos(URL + "todo/", $scope.todo, $scope.authToken).then(function(results){
            
            console.log(results);
        }).catch(function(err){
            console.log("error log getting");
            console.log(err);
            console.log("error log getting");
        });
        }
    };
    
    
        
})
       
 



.controller("EditTodoController", function($scope, $location, $routeParams, TodoAPIService){
    let id = $routeParams.id;
    let URL = "https://morning-castle-91468.herokuapp.com/";
    
    $scope.authToken = localStorage.getItem("authToken");
    $scope.username = localStorage.getItem("username");
    
    TodoAPIService.getTodos(URL + "todo/" + id, $scope.username, $scope.authToken).then(function(results){
        $scope.todo = results.data;
    }).catch(function(err){
        console.log(err);
        
    })
    
    
    $scope.submitForm = function(){
        if($scope.todoForm.$valid){
            $scope.todo.username = $scope.username;
            
            TodoAPIService.editTodo(URL + "todo/" + id, $scope.todo, $scope.authToken).then(function(results){
                $location.path("/todo");
            }).catch(function(err){
                console.log(err);
            });
        }
    }
})




alert("Hello");