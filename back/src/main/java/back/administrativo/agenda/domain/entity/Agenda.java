package back.administrativo.agenda.domain.entity;

import back.administrativo.comanda.domain.entity.Comanda;
import back.servicos.domain.entity.Servicos;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.clientes.domain.entity.Clientes;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data       @Entity
public class Agenda implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAgendamento;

    private LocalDateTime dataHora;

    // Relacionamento com Cliente (Muitos agendamentos para um cliente)
    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Clientes cliente;

    // Relacionamento com Barbeiro (Muitos agendamentos para um barbeiro)
    @ManyToOne
    @JoinColumn(name = "id_barbeiro")
    private Barbeiros barbeiro;

    // Relacionamento com Serviço (Muitos agendamentos para um serviço)
    @ManyToOne
    @JoinColumn(name = "id_servico")
    private Servicos servico;

    // Relacionamento com Comanda (Um agendamento gera uma única comanda)
    @OneToOne(mappedBy = "agenda", cascade = CascadeType.REMOVE )
    private Comanda comanda;


}
