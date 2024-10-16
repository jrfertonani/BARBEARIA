package back.administrativo.agenda.repository;

import back.administrativo.agenda.domain.entity.Agenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface agendaRepository extends JpaRepository<Agenda, Long> {
}
