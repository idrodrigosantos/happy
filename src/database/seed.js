// Importa os pacotes
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Orfanato Esperança",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1234-5678",
        images: [
            "https://source.unsplash.com/tvc5imO5pXk",
            "https://source.unsplash.com/iDCtsz-INHI",
            "https://source.unsplash.com/-Ux5mdMJNEA",
            "https://source.unsplash.com/AEaTUnvneik",
            "https://source.unsplash.com/cRRDzGxqVe8",
            "https://source.unsplash.com/xtd3zYWxEs4",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"
    });

    // Consultar dados da tabela
    // const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    // console.log(selectedOrphanages);

    // Consultar somente um orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    // console.log(orphanage);

    // Deletar dados da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "1"'));
});