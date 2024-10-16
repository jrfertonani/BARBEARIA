package back.usuarios.barbeiros.repository;

import back.usuarios.barbeiros.domain.entity.Barbeirios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface barbeiroRepository extends JpaRepository<Barbeirios, Long> {
}
