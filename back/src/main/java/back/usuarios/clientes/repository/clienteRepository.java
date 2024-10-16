package back.usuarios.clientes.repository;

import back.usuarios.clientes.domain.entity.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface clienteRepository extends JpaRepository<Clientes, Long> {
}
