# Envio de emails com nodeJS

- Uso da lib nodemailer e recursos do SMTP do gmail
- Uso do fs do node para ler arquivos e pastas
- Lê uma lista de contatos no formato csv (lista_emails.csv)
- Lê a pasta de attachments e pega o nome e o path dos possíveis anexos, anexando-os na mensagem
- A mensagem principal escrita no arquivo message.txt, lida altera dinamicamente a variável ${name} pelo nome do contato
