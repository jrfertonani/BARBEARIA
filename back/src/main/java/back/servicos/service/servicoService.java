package back.servicos.service;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.servicos.domain.DTO.servicoDTO;
import back.servicos.domain.entity.Servicos;
import back.servicos.repository.servicoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

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


    public List<Servicos> findAll() {
        return repository.findAll();
    }

    public servicoDTO findById(Long id) {
        return mapper.map(
                repository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("Serviço não encontrado! ID: " +id)
                ), servicoDTO.class);
    }

    public Servicos update(Long id, servicoDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Servicos.class)
        );
    }

    public void delete(Long id) {
        findById(id);
        repository.deleteById(id);
    }
}
