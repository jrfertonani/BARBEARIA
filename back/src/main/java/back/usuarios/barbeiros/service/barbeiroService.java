package back.usuarios.barbeiros.service;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.usuarios.barbeiros.domain.DTO.barbeiroDTO;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.barbeiros.repository.barbeiroRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class barbeiroService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public barbeiroRepository repository;

    public Barbeiros create(barbeiroDTO DTO) {
        return repository.save(
                mapper.map(DTO, Barbeiros.class)
        );
    }


    public List<Barbeiros> findAll() {
        return repository.findAll();
    }

    public barbeiroDTO findById(Long id) {
        return mapper.map(
                repository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("Serviço não encontrado! ID: " +id)
                ), barbeiroDTO.class);
    }

    public Barbeiros update(Long id, barbeiroDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Barbeiros.class)
        );
    }

    public void delete(Long id) {
        findById(id);
        repository.deleteById(id);
    }

}
