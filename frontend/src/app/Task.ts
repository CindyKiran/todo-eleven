export class Task{
    id: number;
    task: string;
    deadline: Date;
    description: string;
    priority: number;
    status:string;

    constructor(    
        id: number,
        task: string,
        deadline: Date,
        description: string,
        priority: number,
        status:string
        ){
            this.id = id;
            this.task = task;
            this.deadline = deadline;
            this.description = description;
            this.priority = priority;
            this.status = status;
    }
}

