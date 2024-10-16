package back.servicos.repository;

import back.servicos.domain.entity.Servicos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface servicoRepository extends JpaRepository<Servicos, Long> {
}
