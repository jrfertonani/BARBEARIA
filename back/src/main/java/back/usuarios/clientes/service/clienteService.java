package back.usuarios.clientes.service;

import back.usuarios.clientes.repository.clienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class clienteService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public clienteRepository repository;


}
