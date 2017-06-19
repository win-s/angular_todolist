# `ToDoList (AngularJS 1)`

To do list web application base on AngularJS 1

This todolist consist of two lists:
1. Today todolist
2. Tomorrow todolist

The user can add, remove and reorder task on each list.



## Getting Started


Cloning this repository and install the dependencies:

### Clone `ToDoList (AngularJS 1)`

Clone the `ToDoList (AngularJS 1)` repository using git:

```
git clone https://github.com/win-s/angular_todolist.git
cd angular_todolist
```

### Install Dependencies
```
npm install
```

### Run the Application
```
npm start
```
Now browse to the app at [`localhost:8000/index.html`]

## Code Design

This design allows any controller changing list of today and tomorrow pass by the services. Therefore, TodayCtrl can move its task to tomorrow and TomorrowCtrl can move this task back to Today.

### Controllers

![PlantUML model](http://www.plantuml.com/plantuml/png/TO_13e8m38RlUueUCP4NC9uqyG5qDyEXi4Qci2RRWZ7gkxiXPA1Xf-rh_syjbivRh3piq95anOrsVkzj8xYyKk21uMCEMhQMxpqJlp7Oll8yXM03sjHajL_iJBP9iy2bkPu2leES2_3eRav0oTmG6Y0Lai3ce8rsjGp5R1NVHsgvet1__oqLRBq4iWlvjQEXT2BRwOf2EfyU0QZKw8rEoRArSt5Q9xb7kgWTNF7hQFi0)

Todolist app consist of  two controllers:
1. TodayCtrl : Controlling UI of today list
2. TomorrowCtrl : Controlling UI of tomorrow list

Each controller gets and updates model by using the services (TodayService, TomorrowService).

### Services

![PlantUML model](http://www.plantuml.com/plantuml/png/VP313e8m38RlUueU8P4N89wyUz8NA31r23HP6ubHtjqvG0Kcjsxxlgv_CMEnc0iSgQ3AiEoGzK7RcycregpK_HFU5tSrMKjj2DrJeQivs5ygNFdleM2GQWz3HLX4iOAp5g-_Q_xMNMX0ryJR4CbdbbWvzi_aORvR1dAW9q2GhmmbCZLm8bkZXDgFpdWEQSuAh06spoIPP8BKD1TjZQpXarGJOmW0YwvkhnktJpMNV_fvCuM1V040)

Todolist app consist of two services:
1. TodayService : The only place to get and set TodayModel
2. TomorrowService : The only place to get and set TomorrowModel

