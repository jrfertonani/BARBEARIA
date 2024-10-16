package back.administrativo.agenda.domain.DTO;

import lombok.Data;

import java.io.Serial;
import java.time.LocalDateTime;

@Data
public class agendaDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idAgendamento;
    private Long idCliente;
    private Long idBarbeiro;
    private Long idServico;
    private LocalDateTime dataHora;


}
