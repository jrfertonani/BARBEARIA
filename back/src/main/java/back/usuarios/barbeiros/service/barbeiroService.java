package back.usuarios.barbeiros.service;

import back.usuarios.barbeiros.repository.barbeiroRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class barbeiroService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public barbeiroRepository repository;



}
