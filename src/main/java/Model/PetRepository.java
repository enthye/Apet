package Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* PetRepository allows the controller to access
all Pets in the database */
@Repository
public interface PetRepository extends JpaRepository<Pet,Long> {
}
