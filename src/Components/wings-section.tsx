export default function WingsSection() {
    const licenseTypes = [
        {
            price: "12,000",
            name: "Private Fluglizenz",
            shortName: "PPL",
            validityPeriodInDays: "28",
            recertificationPrice: "3,000"
        },
        {
            price: "20,000",
            name: "Kommerzielle Fluglizenz",
            shortName: "CPL",
            validityPeriodInDays: "28",
            recertificationPrice: "5,000"

        }
    ];

    return (
        <section>
            <h2>Earn your Wings.</h2>
            <p>Unsere Fluglehrer bringen dir alles bei was du benötigst um mit neuen Flügeln davon zu fliegen! <br/>
                Egal ob du Anfänger oder erfahrener Pilot bist - wir bringen dich in die Luft. <br/>
                Interesse geweckt? Dann ruf noch heute bei uns an!</p>

            <div className={"flex gap-15 mt-10"}>
                {licenseTypes.map((licenseType) => (
                    <div className={"bg-button-primary rounded-3xl pl-10 pr-10 pt-5 pb-5"}>
                        <p className={"text-font-secondary"}>Für nur {licenseType.price}$</p>
                        <h3>{licenseType.name} ({licenseType.shortName})</h3>
                        <p className={"text-font-secondary"}>{licenseType.validityPeriodInDays} Tage gültig. <br/>
                            Auffrischung für nur {licenseType.recertificationPrice}$</p>
                    </div>
                ))}
            </div>
        </section>
    );
}