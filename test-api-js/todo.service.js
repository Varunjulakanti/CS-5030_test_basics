class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{ 
            "title": "T2",
            "description": "D2",
            "done": false
        },{
            "title": "T3",
            "description": "D2",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        this.todos = this.todo_data;
                return this.todos;
    }

    add_todo(todo){
        this.todo_data["todo"].push(todo)
    }

    delete_todo(id){
        this.todo_data["todo"].splice(id,1)
    }

    update_todo(id, todo){
        this.todo_data["todo"][id]=todo
    }
}


module.exports= todoservice;