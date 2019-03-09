package Main.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/* Pet class is the model for each pet in Apet */
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Pet {
    private @Id @GeneratedValue Long id;
    private String name;
    private Integer hitpoints;
}
