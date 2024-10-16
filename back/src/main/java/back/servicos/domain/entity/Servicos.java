package back.servicos.domain.entity;

import back.administrativo.agenda.domain.entity.Agenda;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Data       @Entity
public class Servicos implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idServico;

    private String nomeServico;
    private BigDecimal preco;
    private String descricao;

    // Relacionamento com Agenda (1 Serviço pode estar em vários agendamentos)
    @OneToMany(mappedBy = "servico")
    private List<Agenda> agendamentos;
}
