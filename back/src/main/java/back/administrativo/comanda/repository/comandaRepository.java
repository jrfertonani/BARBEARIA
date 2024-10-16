package back.administrativo.comanda.repository;

import back.administrativo.comanda.domain.entity.Comanda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface comandaRepository extends JpaRepository<Comanda, Long> {
    // Buscar comanda por agendamento
   // Comanda findByAgendamentoId(Long idAgendamento);


}
