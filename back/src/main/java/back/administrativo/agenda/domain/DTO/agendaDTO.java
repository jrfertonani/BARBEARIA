package back.administrativo.agenda.domain.DTO;

import back.administrativo.comanda.domain.entity.Comanda;
import com.fasterxml.jackson.annotation.JsonFormat;
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


    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    private LocalDateTime dataHora;

    private Long idComanda;
}
