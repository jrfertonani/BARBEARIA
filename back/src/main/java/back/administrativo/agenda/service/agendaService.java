package back.administrativo.agenda.service;

import back.administrativo.agenda.repository.agendaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class agendaService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    public agendaRepository repository;



}
