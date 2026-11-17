// Todas as informações do projeto ficam aqui.
// Para mudar um texto ou link do site, basta editar este arquivo.

export const links = {
  sistema: 'https://brunopyanywhe2.pythonanywhere.com',
  github: 'https://github.com/FellT430/Sistema-Web-De-Biblioteca-',
  figma: 'https://www.figma.com/design/oiKmU3W55LlOzicZ5xLGsc/Livro-',
  kanban: 'https://github.com/users/FellT430/projects/1',
}

export const numeros = [
  { valor: '4', legenda: 'perfis de usuário' },
  { valor: '2FA', legenda: 'login com Google Authenticator' },
  { valor: 'API', legenda: 'Google Books integrada ao cadastro' },
  { valor: 'LGPD', legenda: 'termos, consentimento e anonimização' },
]

export const problemas = [
  {
    titulo: 'Acervo desconectado das aulas',
    texto: 'Os livros da biblioteca não ficam ligados às disciplinas, e o aluno não sabe quais obras o professor indica para cada matéria.',
  },
  {
    titulo: 'Controle manual de empréstimos',
    texto: 'Empréstimos e devoluções anotados à mão dificultam saber quem está com cada livro e quando ele deve voltar.',
  },
  {
    titulo: 'Atrasos sem aviso',
    texto: 'Sem notificações, o aluno esquece o prazo e o livro fica parado, enquanto outros alunos ficam sem acesso.',
  },
]

export const solucoes = [
  {
    titulo: 'Livros ligados às disciplinas',
    texto: 'O professor cria a disciplina, relaciona os livros do acervo e publica recomendações em um mural visível para os alunos.',
  },
  {
    titulo: 'Empréstimos digitais',
    texto: 'O bibliotecário registra empréstimos e devoluções no sistema, e o aluno acompanha os prazos pelo próprio painel.',
  },
  {
    titulo: 'Notificações automáticas',
    texto: 'Tarefas agendadas avisam sobre prazos e atrasos. Quem tem empréstimo em atraso não consegue fazer um novo.',
  },
]

export const perfis = [
  {
    id: 'aluno',
    nome: 'Aluno',
    resumo: 'Encontra os livros certos para cada matéria.',
    funcoes: [
      'Cadastro próprio com confirmação por e-mail',
      'Consulta do acervo e da disponibilidade',
      'Mural de recomendações dos professores',
      'Acompanhamento de empréstimos e prazos',
    ],
  },
  {
    id: 'professor',
    nome: 'Professor',
    resumo: 'Indica as leituras de cada disciplina.',
    funcoes: [
      'Criação de disciplinas',
      'Relaciona livros do acervo às disciplinas',
      'Publica recomendações para os alunos',
      'Consulta do acervo da biblioteca',
    ],
  },
  {
    id: 'bibliotecario',
    nome: 'Bibliotecário',
    resumo: 'Cuida do acervo e da circulação dos livros.',
    funcoes: [
      'Cadastro de livros com busca na Google Books',
      'Edição e exclusão de livros do acervo',
      'Registro de empréstimos e devoluções',
      'Painel de indicadores da biblioteca',
    ],
  },
  {
    id: 'admin',
    nome: 'Administrador',
    resumo: 'Mantém o sistema seguro e organizado.',
    funcoes: [
      'Aprovação de novas contas',
      'Ativação e desativação de usuários',
      'Reset de 2FA dos usuários',
      'Logs de auditoria com exportação em CSV',
    ],
  },
]

export const seguranca = [
  { titulo: 'Autenticação em dois fatores', texto: 'Login com código do Google Authenticator, configurado por QR Code.' },
  { titulo: 'Senhas em hash', texto: 'As senhas são guardadas de forma irreversível, nunca em texto puro.' },
  { titulo: 'Proteção CSRF', texto: 'Os formulários usam token para impedir requisições forjadas.' },
  { titulo: 'LGPD', texto: 'Termos de uso, política de privacidade, área "Meus dados" e exclusão por anonimização.' },
]

export const tecnologias = [
  { grupo: 'Front-end', itens: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Jinja2'] },
  { grupo: 'Back-end', itens: ['Python', 'Flask', 'SQLAlchemy', 'APScheduler'] },
  { grupo: 'Banco de dados', itens: ['MySQL', 'MySQL Workbench'] },
  { grupo: 'Segurança', itens: ['bcrypt', 'Werkzeug Security', 'pyotp (2FA)', 'python-dotenv'] },
  { grupo: 'Integrações', itens: ['Google Books API', 'Mailtrap (e-mails de teste)'] },
  { grupo: 'Ferramentas', itens: ['Git e GitHub', 'GitHub Projects', 'Figma', 'Postman', 'PythonAnywhere'] },
]

export const camadasMVC = [
  { nome: 'Model', texto: 'Classes do SQLAlchemy que representam as tabelas do MySQL: usuários, livros, disciplinas, empréstimos e logs.' },
  { nome: 'View', texto: 'Templates HTML (Jinja2 + Bootstrap) que o Flask renderiza e entrega prontos ao navegador.' },
  { nome: 'Controller', texto: 'Rotas do Flask que recebem as requisições, aplicam as regras de negócio e escolhem a view.' },
]

export const equipe = [
  {
    nome: 'Bruno Dante Nogueira Alves',
    papel: 'Desenvolvedor',
    github: 'https://github.com/behsks-jpgs',
  },
  {
    nome: 'Felipe Lima Torres',
    papel: 'Desenvolvedor',
    github: 'https://github.com/FellT430',
  },
]

export const orientador = 'Prof. Bruno Messias'

export const curso = {
  nome: 'Bacharelado em Sistemas de Informação',
  instituicao: 'Universidade de Mogi das Cruzes (UMC)',
  ano: '2026',
}
