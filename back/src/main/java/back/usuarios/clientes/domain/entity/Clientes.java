package back.usuarios.clientes.domain.entity;

import back.administrativo.agenda.domain.entity.Agenda;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data       @Entity
public class Clientes implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCliente;

    private String nome;
    private String telefone;
    private String email;

    // Relacionamento com Agenda (1 Cliente pode ter vários agendamentos)
    @OneToMany(mappedBy = "cliente")
    private List<Agenda> agendamentos;

}
