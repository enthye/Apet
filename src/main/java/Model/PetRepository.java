package Model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet,Long> {
    Pet findByName(String name); // Pet search implementation
}
