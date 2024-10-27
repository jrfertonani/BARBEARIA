package back.administrativo.agenda.domain.entity;

import back.administrativo.comanda.domain.entity.Comanda;
import back.servicos.domain.entity.Servicos;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.clientes.domain.entity.Clientes;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class Agenda implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAgendamento;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
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


    public Agenda(Long idAgendamento, LocalDateTime dataHora, Clientes cliente, Barbeiros barbeiro, Servicos servico, Comanda comanda) {
        this.idAgendamento = idAgendamento;
        this.dataHora = dataHora;
        this.cliente = cliente;
        this.barbeiro = barbeiro;
        this.servico = servico;
        this.comanda = comanda;
    }

    public Agenda() {
    }

    public Long getIdAgendamento() {
        return idAgendamento;
    }

    public void setIdAgendamento(Long idAgendamento) {
        this.idAgendamento = idAgendamento;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public Clientes getCliente() {
        return cliente;
    }

    public void setCliente(Clientes cliente) {
        this.cliente = cliente;
    }

    public Barbeiros getBarbeiro() {
        return barbeiro;
    }

    public void setBarbeiro(Barbeiros barbeiro) {
        this.barbeiro = barbeiro;
    }

    public Servicos getServico() {
        return servico;
    }

    public void setServico(Servicos servico) {
        this.servico = servico;
    }

    public Comanda getComanda() {
        return comanda;
    }

    public void setComanda(Comanda comanda) {
        this.comanda = comanda;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Agenda agenda = (Agenda) o;
        return Objects.equals(idAgendamento, agenda.idAgendamento);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(idAgendamento);
    }
}
