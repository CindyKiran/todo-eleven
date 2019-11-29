package cindyK.Eleven.toDoApp.backend.service;

import cindyK.Eleven.toDoApp.backend.model.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskService extends CrudRepository <Task, Long>{
}
