import { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, Star, Music, Heart, Volume2, VolumeX } from 'lucide-react';

const KPopDemonHunterInvitation = () => {
    const [animate, setAnimate] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleStart = () => {
        setHasStarted(true);
        setIsPlaying(true);
        setAnimate(true);
        setTimeout(() => setShowDetails(true), 1500);
    };

    // Reproducir audio automáticamente cuando la invitación se carga
    useEffect(() => {
        if (hasStarted && audioRef.current) {
            audioRef.current.play().catch(e => {
                console.log("Audio play failed:", e);
                setIsPlaying(false);
            });
        }
    }, [hasStarted]);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!hasStarted) {
        return (
            <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
                {/* Fondo animado sutil */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black opacity-50"></div>

                <div className="relative z-10 text-center p-6">
                    <div className="mb-8 animate-bounce">
                        <img src="./logoHuntrix.png" alt="Logo Huntrix" className="w-64 mx-auto drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-8 animate-pulse">
                        KPop Demon Hunters
                    </h1>

                    <button
                        onClick={handleStart}
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 w-full h-full border-2 border-cyan-400 rounded-full animate-pulse"></div>
                        <span className="relative text-2xl font-bold text-white flex items-center gap-3">
                            <Sparkles size={24} className="animate-spin" />
                            INGRESAR A LA FIESTA
                            <Sparkles size={24} className="animate-spin" />
                        </span>
                    </button>

                    <p className="mt-6 text-pink-300/70 text-sm">Toca para comenzar la experiencia</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-black overflow-hidden flex items-center justify-center">
            {/* Derpy Tiger - Fondo central grande */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className="w-80 h-80 bg-contain bg-center bg-no-repeat animate-pulse"
                    style={{
                        backgroundImage: `url('./Derpy_Portrait_temp.webp')`,
                        animationDuration: '4s'
                    }}>
                </div>
            </div>

            {/* HUNTR/X personajes de fondo */}
            <div className="absolute inset-0 opacity-80">
                {/* Rumi - izquierda superior */}
                <div className="absolute left-2 sm:left-0 top-4 sm:top-16 w-20 sm:w-32 md:w-40 h-32 sm:h-48 md:h-64 bg-contain bg-center bg-no-repeat animate-pulse"
                    style={{
                        backgroundImage: `url('./RumiKPop.webp')`,
                        animationDuration: '3s'
                    }}>
                </div>

                {/* Mira - derecha centro */}
                <div className="absolute right-2 sm:right-0 top-12 sm:top-1/3 w-20 sm:w-32 md:w-40 h-32 sm:h-48 md:h-64 bg-contain bg-center bg-no-repeat animate-pulse"
                    style={{
                        backgroundImage: `url('./Mira_-_Full_Body.webp')`,
                        animationDuration: '3.5s',
                        animationDelay: '0.5s'
                    }}>
                </div>

                {/* Zoey - izquierda inferior */}
                <div className="absolute left-2 sm:left-0 bottom-4 sm:bottom-32 w-20 sm:w-32 md:w-40 h-32 sm:h-48 md:h-64 bg-contain bg-center bg-no-repeat animate-pulse"
                    style={{
                        backgroundImage: `url('./Zoey_-_Full_Body.webp')`,
                        animationDuration: '4s',
                        animationDelay: '1s'
                    }}>
                </div>
            </div>

            {/* Estrellas animadas de fondo */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    >
                        <Star className="text-purple-300" size={8 + Math.random() * 8} fill="currentColor" />
                    </div>
                ))}
            </div>

            {/* Rayos de energía */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: '-10%',
                            height: '120%',
                            width: '2px',
                            background: 'linear-gradient(to bottom, transparent, #ff00ff, transparent)',
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '2s'
                        }}
                    />
                ))}
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} loop>
                <source src="./golden.mp3" type="audio/mp3" />
            </audio>

            {/* Botón de control de música */}
            <button
                onClick={toggleAudio}
                className="absolute top-4 right-4 z-50 bg-black/50 backdrop-blur-md p-3 rounded-full border border-pink-500/50 text-white hover:bg-pink-600/50 transition-all animate-pulse"
                style={{ animationDuration: '3s' }}
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>

            <div className="relative z-10 w-full max-w-md px-6 py-8">
                {/* Encabezado con animación */}
                <div className={`text-center mb-4 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="relative inline-block mb-3">
                        <Music className="absolute -left-8 top-0 text-pink-400 animate-bounce" size={28} />
                        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse">
                            ¡FIESTA ÉPICA!
                        </h1>
                        <Zap className="absolute -right-8 top-0 text-cyan-400 animate-bounce" size={28} />
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-2">
                        <Sparkles className="text-yellow-400 animate-spin" size={20} />
                        <h2 className="text-2xl font-bold text-white">
                            KPop Demon Hunters
                        </h2>
                        <Sparkles className="text-yellow-400 animate-spin" size={20} />
                    </div>
                </div>

                {/* Nombre de la cumpleañera */}
                <div className={`text-center mb-4 transition-all duration-1000 delay-400 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-4 border-2 border-cyan-400/50 shadow-2xl">
                            <p className="text-lg text-pink-200 font-semibold mb-1">La nueva integrante de Las HUNTR/X</p>
                            <h3 className="text-5xl font-black text-white mb-1" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                                ARYA
                            </h3>
                            <p className="text-2xl font-bold text-cyan-300">¡Cumple 8 años!</p>
                        </div>
                    </div>
                </div>

                {/* Detalles del evento */}
                <div className={`transition-all duration-1000 delay-600 ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-black/30 backdrop-blur-md rounded-3xl p-4 border border-pink-500/50 shadow-2xl">
                        <div className="space-y-3 text-white">
                            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl p-3 border border-pink-400">
                                <p className="text-xs text-pink-300 font-semibold mb-1">📅 FECHA</p>
                                <p className="text-xl font-bold">Sábado 17 de Enero</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl p-3 border border-pink-400">
                                <p className="text-xs text-pink-300 font-semibold mb-1">⏰ HORARIO</p>
                                <p className="text-xl font-bold">17:00 a 20:00 hs</p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl p-3 border border-pink-400">
                                <p className="text-xs text-pink-300 font-semibold mb-1">📍 LUGAR</p>
                                <p className="text-lg font-bold">Salón Naranjo</p>
                                <p className="text-base mt-1">Almirante Brown 160</p>
                                <p className="text-base">Quilmes</p>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full p-1 animate-pulse">
                                <div className="bg-black rounded-full px-6 py-3">
                                    <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                                        ¡TE ESPERAMOS!
                                    </p>
                                    <p className="text-xs text-pink-300 mt-1">Únete a la batalla más divertida confirmando asistencia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute top-16 left-4 animate-bounce">
                    <Sparkles className="text-yellow-400" size={24} />
                </div>
                <div className="absolute top-28 right-6 animate-bounce delay-300">
                    <Heart className="text-pink-400" size={24} fill="currentColor" />
                </div>
                <div className="absolute bottom-28 left-8 animate-bounce delay-500">
                    <Star className="text-cyan-400" size={20} fill="currentColor" />
                </div>
                <div className="absolute bottom-40 right-4 animate-bounce delay-700">
                    <Music className="text-purple-400" size={20} />
                </div>
            </div>

            {/* Efecto de brillo pulsante */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border-4 border-pink-500/30 rounded-lg animate-pulse"></div>
            </div>
        </div>
    );
};

export default KPopDemonHunterInvitation;
