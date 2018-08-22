package employee_app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // This tells Hibernate to make a table out of this class. Default table name corresponds to class name
@Table(name="employee") //Changes default table name to specified name
public class Employee {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String phoneNumber;
	private String supervisor;
	
	public Employee() {
		
	}
	
	public Employee(int id, String name, String phoneNumber, String supervisor) {
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.supervisor = supervisor;
	}
	
	public int getId() { return id; }
	public String getName() { return name; }
	public String getPhoneNumber() { return phoneNumber; }
	public String getSupervisor() { return supervisor; }
	
	public void setId(int id) { this.id = id; }
	public void setName(String name) { this.name = name; }
	public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
	public void setSupervisors(String supervisor) { this.supervisor = supervisor; }
	
	@Override
	public String toString() {
		return String.format("Employee(%d, '%s', '%s', '%s')", id, name, phoneNumber, supervisor);
	}
}
