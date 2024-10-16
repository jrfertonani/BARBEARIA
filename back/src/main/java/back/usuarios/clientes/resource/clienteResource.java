package back.usuarios.clientes.resource;


import back.usuarios.clientes.service.clienteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/clientes")
public class clienteResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public clienteService service;


}
