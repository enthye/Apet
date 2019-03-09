package Main.Controller;

import Main.Model.Pet;
import Main.Model.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PetController {
    private PetRepository petRepository;

    @Autowired
    public PetController(PetRepository petRepository){
        this.petRepository = petRepository;
    }

    @GetMapping("/add")
    public @ResponseBody String createNewPet(
            @RequestParam String name) {

        Pet pet = new Pet();
        pet.setName(name);
        pet.setHitpoints(100);
        petRepository.save(pet);
        return "PET CREATED:" + name;
    }

    @GetMapping("/delete")
    public @ResponseBody String deletePet(@RequestParam Long id) {
        String name = "";

        if (petRepository.findById(id).isPresent()) {
            name = petRepository.findById(id).get().getName();
        }

        petRepository.deleteById(id);
        return "PET DELETED: \"" + name + "\"";
    }

    @GetMapping("/all")
    public Iterable<Pet> getAllPets() {
        return petRepository.findAll();
    }

}
