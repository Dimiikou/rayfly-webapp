import heroImage from '../assets/heroimage.jpg';

export default function Hero() {
    return (
        <section className="relative rounded-2xl overflow-hidden">
            <img
                src={heroImage}
                alt="Two RayFly helicopters"
                className="w-full h-auto object-cover shadow-lg"
            />

            <div className="absolute inset-0 bg-black/60"/>

            <div className="absolute inset-0 flex items-end">
                <div className="text-white pl-10 pb-8">
                    <h1>Hoch hinaus mit RayFly</h1>
                    <p>
                        Wir verleihen dir Flügel! Egal ob einen Flugschein oder einen Rundflug mit unseren erfahrenen Piloten.<br/>
                        Wir haben, was du brauchst!
                    </p>
                </div>
            </div>
        </section>
    );
}