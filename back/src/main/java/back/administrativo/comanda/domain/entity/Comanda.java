package back.administrativo.comanda.domain.entity;

import back.administrativo.agenda.domain.entity.Agenda;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data       @Entity
public class Comanda implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idComanda;

    private BigDecimal valorTotal;
    private LocalDate dataPagamento;
    private String formaPagamento; // Pode ser ENUM

    // Relacionamento com Agenda (Cada comanda pertence a um único agendamento)
    @OneToOne
    @JoinColumn(name = "id_agendamento")
    private Agenda agendamento;


}
