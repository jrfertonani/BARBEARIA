package back.servicos.domain.DTO;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Setter;

import java.io.Serial;
import java.math.BigDecimal;

@Data
public class servicoDTO {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long idServico;
    private String nomeServico;
    private BigDecimal preco;
    private String descricao;


}
