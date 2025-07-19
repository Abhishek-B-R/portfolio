export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-24">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-30">
          Hi, I&apos;m <span className="text-primary">Abhishek BR</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6">
          A <span className="text-blue-600">developer</span> who loves{" "}
          <span className="text-purple-600">building</span> and{" "}
          <span className="text-green-600">learning</span>.
        </h2>
      </div>
      <div
        className={`mb-8 transition-all duration-1000 delay-500 opacity-100 translate-y-0}`}
      >
        <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          20, I build <span className="text-primary font-semibold">fast</span>, learn{" "}
          <span className="text-blue-600 font-semibold">faster</span>, and ship projects that{" "}
          <span className="text-purple-600 font-semibold">push limits</span> — from{" "}
          <span className="relative">
            AI-powered apps
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </span>{" "}
          to{" "}
          <span className="relative">
            decentralized systems
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </span>
          . I believe in <span className="text-foreground font-medium">curiosity</span>,{" "}
          <span className="text-foreground font-medium">chaos</span>, and{" "}
          <span className="text-foreground font-medium">clean code</span>.
        </div>
      </div>
    </div>
  )
};
