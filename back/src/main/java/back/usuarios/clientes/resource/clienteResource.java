package back.usuarios.clientes.resource;


import back.usuarios.barbeiros.domain.DTO.barbeiroDTO;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.clientes.domain.DTO.clienteDTO;
import back.usuarios.clientes.domain.entity.Clientes;
import back.usuarios.clientes.service.clienteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/clientes")
public class clienteResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public clienteService service;


    @PostMapping
    public ResponseEntity<clienteDTO> create(@RequestBody clienteDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                        service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Clientes>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(x -> mapper.map(
                                x, Clientes.class)
                        ).toList()
        );
    }

}
