package back.administrativo.comanda.service;

import back.administrativo.comanda.repository.comandaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class comandaService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public comandaRepository repository;



}
