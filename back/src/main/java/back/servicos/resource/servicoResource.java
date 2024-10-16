package back.servicos.resource;


import back.servicos.service.servicoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/servicos")
public class servicoResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public servicoService service;


}
