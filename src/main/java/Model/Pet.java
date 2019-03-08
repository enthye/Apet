package Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor

/* Pet class is the model for each pet in Apet */
public class Pet {
    @Id @GeneratedValue Long id;
    @NonNull String name;
    private Integer hitpoints;
}
