package back.administrativo.agenda.service;

import back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import back.administrativo.agenda.domain.DTO.agendaDTO;
import back.administrativo.comanda.domain.DTO.comandaDTO;
import back.administrativo.comanda.domain.entity.Comanda;
import back.servicos.repository.servicoRepository;
import back.usuarios.barbeiros.repository.barbeiroRepository;
import back.usuarios.clientes.repository.clienteRepository;
import back.administrativo.agenda.domain.entity.Agenda;
import back.administrativo.agenda.repository.agendaRepository;
import back.servicos.domain.entity.Servicos;
import back.usuarios.barbeiros.domain.entity.Barbeiros;
import back.usuarios.clientes.domain.entity.Clientes;
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


    public List<Agenda> findAll() {
        return agendaRepository.findAll();
    }

    public agendaDTO findById(Long id) {
        return mapper.map(
                agendaRepository.findById(id).orElseThrow(
                        () -> new ObjectNotFoundException("Agendamento não encontrado! ID: " +id)
                ), agendaDTO.class);
    }

    public Agenda update(Long id, agendaDTO DTO) {
        findById(id);
        return agendaRepository.save(
                mapper.map(DTO, Agenda.class)
        );
    }


    public void delete(Long id) {
        findById(id);
        agendaRepository.deleteById(id);
    }



/*
    @Autowired
    private clienteRepository clienteRepository;

    @Autowired
    private barbeiroRepository barbeiroRepository;

    @Autowired
    private servicoRepository servicoRepository;

    // Buscar todos os agendamentos de um cliente
    public List<Agenda> getAgendamentosByCliente(Long idCliente) {
        return agendaRepository.findByClienteId(idCliente);
    }

    // Buscar todos os agendamentos de um barbeiro
    public List<Agenda> getAgendamentosByBarbeiro(Long idBarbeiro) {
        return agendaRepository.findByBarbeiroId(idBarbeiro);
    }

    // Buscar todos os agendamentos de um serviço
    public List<Agenda> getAgendamentosByServico(Long idServico) {
        return agendaRepository.findByServicoId(idServico);
    }

    // Criar um novo agendamento
    public Agenda criarAgendamento(Long idCliente, Long idBarbeiro, Long idServico, Agenda agenda) {
        Clientes cliente = clienteRepository.findById(idCliente)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Barbeiros barbeiro = barbeiroRepository.findById(idBarbeiro)
                .orElseThrow(() -> new RuntimeException("Barbeiro não encontrado"));

        Servicos servico = servicoRepository.findById(idServico)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));

        agenda.setCliente(cliente);
        agenda.setBarbeiro(barbeiro);
        agenda.setServico(servico);

        return agendaRepository.save(agenda);
    }

 */
}



/*Relacionamento Cliente e Agenda: O método getAgendamentosByCliente(Long idCliente) usa o método customizado findByClienteId no AgendaRepository para buscar todos os agendamentos de um cliente.
Relacionamento Barbeiro e Agenda: O método getAgendamentosByBarbeiro(Long idBarbeiro) faz o mesmo, mas busca os agendamentos relacionados a um barbeiro.
Relacionamento Serviço e Agenda: O método getAgendamentosByServico(Long idServico) busca os agendamentos por serviço.
Criar um Novo Agendamento
Quando criamos um novo agendamento no método criarAgendamento, usamos os repositórios para buscar os objetos relacionados (Cliente, Barbeiro, Servico), associamos esses objetos ao agendamento e salvamos no banco de dados através do agendaRepository.
 */
