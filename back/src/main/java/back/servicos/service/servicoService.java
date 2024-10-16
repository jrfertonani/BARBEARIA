package back.servicos.service;

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



}
