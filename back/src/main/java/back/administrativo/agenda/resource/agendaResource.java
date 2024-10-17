package back.administrativo.agenda.resource;


import back.administrativo.agenda.domain.DTO.agendaDTO;
import back.administrativo.agenda.domain.entity.Agenda;
import back.administrativo.agenda.service.agendaService;
import back.administrativo.comanda.domain.DTO.comandaDTO;
import back.administrativo.comanda.domain.entity.Comanda;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public ResponseEntity<Agenda> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(
                mapper.map(service.findById(id), Agenda.class)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<agendaDTO> updata(@PathVariable Long id,
                                            @RequestBody agendaDTO DTO) {
        Agenda obj = service.update(id,DTO);
        return ResponseEntity.ok().body(DTO);
    }

}
