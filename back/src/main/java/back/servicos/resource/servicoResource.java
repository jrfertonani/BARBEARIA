package back.servicos.resource;


import back.servicos.domain.DTO.servicoDTO;
import back.servicos.domain.entity.Servicos;
import back.servicos.service.servicoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin("*")
@RestController
@RequestMapping("/servicos")
public class servicoResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public servicoService service;

    @PostMapping
    public ResponseEntity<servicoDTO> create(@RequestBody servicoDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

}
