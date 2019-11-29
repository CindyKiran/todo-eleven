package cindyK.Eleven.toDoApp.backend.controller;

import cindyK.Eleven.toDoApp.backend.model.Task;
import cindyK.Eleven.toDoApp.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/tasks")
    @ResponseStatus(HttpStatus.OK)
    public Task addTask(@RequestBody Task task){
        return taskService.save(task);
    }

    @GetMapping("/tasks/{id}")
    public Optional<Task> getTask(@PathVariable("id") long id){
        return taskService.findById(id);
    }

    @GetMapping("/tasks")
    public List<Task> displayAll(){
        return (List<Task>) taskService.findAll();
    }

    @DeleteMapping("/tasks/{id}")
    public void removeTask(@PathVariable long id){
        taskService.deleteById(id);
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Object> updateTask(@RequestBody Task task, @PathVariable long id){
        //check first if task exist
        Optional<Task> taskOptional = taskService.findById(id);
        if(!taskOptional.isPresent())
            return ResponseEntity.notFound().build();

        task.setId(id);
        taskService.save(task);
        return ResponseEntity.noContent().build();
    }



}
