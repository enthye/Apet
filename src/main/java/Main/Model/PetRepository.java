package Main.Model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/* PetRepository allows the controller to access
all Pets in the database */
@Repository
public interface PetRepository extends CrudRepository<Pet,Long> {
}
