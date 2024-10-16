package back.usuarios.clientes.domain.DTO;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serial;

@Data
public class clienteDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idCliente;
    private String nome;
    private String telefone;
    private String email;
}
