package back.administrativo.agenda.resource;


import back.administrativo.agenda.domain.entity.Agenda;
import back.administrativo.agenda.service.agendaService;
import back.administrativo.comanda.domain.entity.Comanda;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/agenda")
public class agendaResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public agendaService service;


    @GetMapping
    public ResponseEntity<List<Agenda>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(x -> mapper.map(
                                x, Agenda.class)
                        ).toList()
        );
    }


}
