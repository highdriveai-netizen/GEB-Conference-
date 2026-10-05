import React, { useState, useEffect } from 'react';
import { Clock, Info } from 'lucide-react';
import { CONFERENCE_INFO } from '../data/conferenceData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(CONFERENCE_INFO.countdownTarget).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs relative z-10" aria-label="Conference Countdown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label and demo note */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">Conference Countdown</h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Demo Schedule
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Target: {CONFERENCE_INFO.datesDisplay} · Subject to official committee announcement
              </p>
            </div>
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full md:w-auto">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="bg-slate-50 border border-slate-200/90 rounded-lg py-2.5 px-3 sm:px-5 min-w-[70px] sm:min-w-[85px] text-center"
              >
                <div className="text-xl sm:text-3xl font-extrabold text-emerald-800 tabular-nums leading-tight">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet disclaimer */}
        <div className="mt-3 flex items-center justify-center md:justify-end gap-1.5 text-[11px] text-slate-400">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>Configurable in <code>src/data/conferenceData.ts</code></span>
        </div>
      </div>
    </section>
  );
};
