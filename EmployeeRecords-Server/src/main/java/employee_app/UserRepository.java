package employee_app;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
	boolean existsByUsernameAndPassword(String username, String password);
}
