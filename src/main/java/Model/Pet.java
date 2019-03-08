package Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data // lombok removes all getter/setter boiler plate code
@Entity

/* Pet class is the model for each pet in Apet */
public class Pet {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer hitpoints;
}
