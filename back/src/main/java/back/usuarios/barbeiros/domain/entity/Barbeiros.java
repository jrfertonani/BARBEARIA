package back.usuarios.barbeiros.domain.entity;

import back.administrativo.agenda.domain.entity.Agenda;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data       @Entity
public class Barbeiros implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBarbeiro;

    private String nome;
    private String especialidade;
    private String telefone;

    @JsonIgnore
    // Relacionamento com Agenda (1 Barbeiro pode realizar vários agendamentos)
    @OneToMany(mappedBy = "barbeiro")
    private List<Agenda> agendamentos;

}
