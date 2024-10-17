package back.administrativo.comanda.service;

import back.administrativo.comanda.domain.DTO.comandaDTO;
import back.administrativo.comanda.domain.entity.Comanda;
import back.administrativo.comanda.repository.comandaRepository;
import back.servicos.domain.DTO.servicoDTO;
import back.servicos.domain.entity.Servicos;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class comandaService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public comandaRepository repository;

    public Comanda create(comandaDTO DTO) {
        return repository.save(
                mapper.map(DTO, Comanda.class)
        );
    }

    public List<Comanda> findAll() {
        return repository.findAll();
    }


}
