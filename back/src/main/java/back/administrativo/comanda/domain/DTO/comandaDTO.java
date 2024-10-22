package back.administrativo.comanda.domain.DTO;

import back.administrativo.agenda.domain.entity.Agenda;
import lombok.Data;

import java.io.Serial;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class comandaDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idComanda;
    private BigDecimal valorTotal;
    private LocalDate dataPagamento;
    private String formaPagamento;
    private Long idAgendamento;

}
