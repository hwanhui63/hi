import React from 'react';

export function BrassBorder({ children, className = "", innerClassName = "" }) {
  return (
    <div className={`relative p-[2px] rounded-lg bg-gradient-to-b from-[#EBD39A] via-[#B88B4A] to-[#6C4A1A] shadow-brass ${className}`}>
      {/* Corner Rivets */}
      <span className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#EBD39A] border border-[#6C4A1A] shadow-sm z-10" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#EBD39A] border border-[#6C4A1A] shadow-sm z-10" />
      <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#EBD39A] border border-[#6C4A1A] shadow-sm z-10" />
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#EBD39A] border border-[#6C4A1A] shadow-sm z-10" />

      <div className={`rounded-[6px] bg-train-secondary p-5 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}

export function VintageDivider({ text, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-train-gold to-transparent opacity-60" />
      {text ? (
        <span className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-train-champagne px-3 py-1 border border-train-gold/40 rounded bg-train-bg/80">
          {text}
        </span>
      ) : (
        <div className="w-2.5 h-2.5 rotate-45 border border-train-gold bg-train-burgundy" />
      )}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-train-gold to-transparent opacity-60" />
    </div>
  );
}

export function ScriptHeading({ subtitle, title, titleEn, className = "" }) {
  return (
    <div className={`text-center space-y-2 ${className}`}>
      {subtitle && (
        <p className="font-serif text-xs md:text-sm tracking-[0.25em] text-train-gold uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-2xl md:text-4xl text-train-ivory font-bold tracking-wide">
        {title}
      </h2>
      {titleEn && (
        <p className="font-script text-3xl md:text-4xl text-train-champagne/90 leading-none">
          {titleEn}
        </p>
      )}
    </div>
  );
}
