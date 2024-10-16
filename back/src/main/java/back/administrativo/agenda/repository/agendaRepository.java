package back.administrativo.agenda.repository;

import back.administrativo.agenda.domain.entity.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface agendaRepository extends JpaRepository<Agenda, Long> {
/*
    // Buscar agendamentos por cliente
    List<Agenda> findByClienteId(Long idCliente);

    // Buscar agendamentos por barbeiro
    List<Agenda> findByBarbeiroId(Long idBarbeiro);

    // Buscar agendamentos por serviço
    List<Agenda> findByServicoId(Long idServico);

 */
}
