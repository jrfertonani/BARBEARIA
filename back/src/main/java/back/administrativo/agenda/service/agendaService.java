package back.administrativo.agenda.service;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.administrativo.agenda.domain.DTO.agendaDTO;
import back.administrativo.comanda.domain.DTO.comandaDTO;
import back.servicos.domain.entity.Servicos;
import back.servicos.service.servicoService;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.barbeiros.service.barbeiroService;
import back.usuarios.clientes.domain.entity.Clientes;
import back.administrativo.agenda.domain.entity.Agenda;
import back.administrativo.agenda.repository.agendaRepository;
import back.usuarios.clientes.service.clienteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class agendaService {

    @Autowired
    public ModelMapper mapper;

    @Autowired
    private agendaRepository agendaRepository;

    @Autowired
    private clienteService clienteService;

    @Autowired
    private barbeiroService barbeiroService;

    @Autowired
    public servicoService servicoService;



    public List<Agenda> findAll() {
        return agendaRepository.findAll();
    }


    public agendaDTO findById(Long id) {
        return mapper.map(
                agendaRepository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("Agendamento não encontrado! ID: " +id)
                ), agendaDTO.class);
    }


    public void delete(Long id) {
        findById(id);
        agendaRepository.deleteById(id);
    }


    public Agenda create(agendaDTO DTO) {
        return agendaRepository.save(newAgendamento(DTO));
    }

    public Agenda update(Long id, agendaDTO DTO) {
        DTO.setIdAgendamento(id);
        findById(id);
        return agendaRepository.save(
                mapper.map(newAgendamento(DTO), Agenda.class)
        );
    }

    // Criar um novo agendamento
    public Agenda newAgendamento(agendaDTO obj) {
        Clientes cliente = clienteService.findById(obj.getIdCliente());

        Barbeiros barbeiro = barbeiroService.findById(obj.getIdBarbeiro());

        Servicos servico = servicoService.findById(obj.getIdServico());

        Agenda agenda = new Agenda();
        if(obj.getIdAgendamento() != null){
            agenda.setIdAgendamento(obj.getIdAgendamento());
        }

        agenda.setCliente(cliente);
        agenda.setBarbeiro(barbeiro);
        agenda.setServico(servico);

        return agenda;
    }



}
