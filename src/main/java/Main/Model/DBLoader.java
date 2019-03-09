package Main.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBLoader implements CommandLineRunner {
    private final PetRepository repository;

    @Autowired
    public DBLoader(PetRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Pet((long)1,"Pet1",100));
        this.repository.save(new Pet((long)2,"Pet2",99));
    }
}