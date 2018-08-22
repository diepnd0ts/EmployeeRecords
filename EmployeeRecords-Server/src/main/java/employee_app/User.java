package employee_app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String username;
	private String password;
	
	public User() { }
	public User(int id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
	
	public int getId() { return id; }
	public String getUsername() { return username; }
	public String getPassword() { return password; }
	
	public void setId(int id) { this.id = id; }
	public void setUsername(String username) { this.username = username; }
	public void setPassword(String password) { this.password = password; }
	
	@Override
	public String toString() {
		return String.format("Employee(%d, '%s', '%s')", id, username, password);
	}
}
