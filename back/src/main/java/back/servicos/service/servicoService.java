package back.servicos.service;

import back.servicos.domain.DTO.servicoDTO;
import back.servicos.domain.entity.Servicos;
import back.servicos.repository.servicoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class servicoService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public servicoRepository repository;


    public Servicos create(servicoDTO DTO) {
        return repository.save(
                mapper.map(DTO, Servicos.class)
        );
    }



}
