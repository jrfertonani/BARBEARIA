package back.administrativo.agenda.resource;


import back.administrativo.agenda.service.agendaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/servicos")
public class agendaResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public agendaService service;


}
