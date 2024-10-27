package back.usuarios.clientes.service;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.usuarios.clientes.domain.DTO.clienteDTO;
import back.usuarios.clientes.domain.entity.Clientes;
import back.usuarios.clientes.repository.clienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class clienteService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public clienteRepository repository;

    public Clientes create(clienteDTO DTO) {
        return repository.save(
                mapper.map(DTO, Clientes.class)
        );
    }

    public List<Clientes> findAll() {
        return repository.findAll();
    }

    public Clientes findById(Long id) {
        return mapper.map(
                repository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("Cliente não encontrado! ID: " +id)
                ), Clientes.class);
    }

    public Clientes update(Long id, clienteDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Clientes.class)
        );
    }

    public void delete(Long id) {
        findById(id);
        repository.deleteById(id);
    }

}
