package back.usuarios.barbeiros.resource;


import back.usuarios.barbeiros.domain.DTO.barbeiroDTO;
import back.usuarios.barbeiros.domain.entity.Barbeiros;

import back.usuarios.barbeiros.service.barbeiroService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/barbeiros")
public class barbeiroResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public barbeiroService service;


    @PostMapping
    public ResponseEntity<barbeiroDTO> create(@RequestBody barbeiroDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                        service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Barbeiros>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(x -> mapper.map(
                                x, Barbeiros.class)
                        ).toList()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Barbeiros> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(
                mapper.map(service.findById(id), Barbeiros.class)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<barbeiroDTO> updata(@PathVariable Long id,
                                             @RequestBody barbeiroDTO DTO) {
        Barbeiros obj = service.update(id,DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
