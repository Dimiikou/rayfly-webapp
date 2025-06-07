export default function ServicesSection() {
    const services = [
        {
            key: 0,
            cost: "2,000$",
            title: "Rundflug im Helikopter",
            description: "Erlebe die Schönheit unserer Insel aus der Vogelperspektive. Genieß diesen Anblick mit bis zu 4 Personen zwischen 15 und 60 Minuten lang!"
        },
        {
            key: 1,
            cost: "500$ pro Person",
            title: "Fallschirmsprung",
            description: "Mit unserem Fallschirmsprung hast du garantiert den größten Adrenalinschub! Gerne besprechen wir gemeinsam deinen Start und Landepunkt."
        },
        {
            key: 2,
            cost: "1,000$ pro Start",
            title: "Personentransport",
            description: "Wenn wir dich mit einer unserer Maschinen zu deinem nächsten Treffen fliegen bist du garantiert Gesprächsthema nummer Eins!"
        }
    ];

    return (
        <section>
            <h2>Zeit für deinen Aufstieg.</h2>
            <div className={"flex flex-col gap-10"}>
                {
                    services.map((service) => (
                        <div id={service.key.toString()}>
                            <p className={"text-font-secondary"}>Ab nur {service.cost}</p>
                            <h3>{service.title}</h3>
                            <p className={"text-font-secondary"}>{service.description}</p>
                            <button className={"bg-button-primary"}>Jetzt Buchen</button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}