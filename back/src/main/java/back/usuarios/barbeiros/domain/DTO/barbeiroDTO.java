package back.usuarios.barbeiros.domain.DTO;

import back.administrativo.agenda.domain.entity.Agenda;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.io.Serial;
import java.util.List;

@Data
public class barbeiroDTO {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long idBarbeiro;
    private String nome;
    private String especialidade;
    private String telefone;



}


