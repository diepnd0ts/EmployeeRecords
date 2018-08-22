package employee_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import employee_app.User;
import employee_app.UserRepository;

@Controller
@RequestMapping(path="/api")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(path="/login")
	public @ResponseBody Iterable<User> findAllUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping(path="/login")
	public @ResponseBody boolean userExists( @RequestBody User user) {
		return userRepository.existsByUsernameAndPassword(user.getUsername(), user.getPassword());
	}
	
	@PostMapping(path="/login/add")
	public ResponseEntity<String> addUser(@RequestBody User user) {
		User newUser = userRepository.save(user);
		return new ResponseEntity<String>(newUser.getUsername(), HttpStatus.CREATED);
	}
	
}
