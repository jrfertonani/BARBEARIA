package back.usuarios.barbeiros.repository;

import back.usuarios.barbeiros.domain.entity.Barbeiros;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface barbeiroRepository extends JpaRepository<Barbeiros, Long> {
}
