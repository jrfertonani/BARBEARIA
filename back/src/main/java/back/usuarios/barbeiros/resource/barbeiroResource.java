package back.usuarios.barbeiros.resource;


import back.usuarios.barbeiros.service.barbeiroService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/barbeiros")
public class barbeiroResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public barbeiroService service;


}
