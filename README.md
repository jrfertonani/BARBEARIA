Simulador de barbearia:

Para este projeto foram utilizadas: JAVA-SpringBoot - Angular - MySql

Diagrama Relacional:

Clientes --- 1

--- Agenda

Barbeiros --- 1

--- Agenda

Serviços --- 1

--- Agenda

Agenda --- 1:1 --- Comandas

Esse esquema permite registrar todos os atendimentos da barbearia de forma organizada,
associando clientes, serviços, e pagamentos.

Para rodar o Back, se tiver o java instalado basta somente rodar o projeto. IDE( Intelij );

Para rodar o Front, se tiver instalado o @angular-cli basta digitar no console: ng s IDE( VsCode );

Para acessar o Swagger basta estar com o Back rodando e clicar em: http://localhost:8080/swagger-ui.html  ;



![BARBEARIA (1)](https://github.com/user-attachments/assets/f1f4cf20-69ca-476c-afd0-78c0441a0ab2)

